'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Send, Bot, User, ArrowLeft, Loader2, Zap, Globe, Table2, Mail, Calendar } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'Add a new lead to GHL',
  'Update my Google Sheet',
  'Send a follow-up email',
  'Schedule a meeting',
]

const TOOL_ICONS = [Globe, Table2, Mail, Calendar, Zap]

function formatMessage(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, loading])

  const send = async (text?: string) => {
    const content = (text || input).trim()
    if (!content || loading) return
    const userMsg: Message = { role: 'user', content }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content || 'Sorry, something went wrong.'
      }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div className="min-h-screen bg-surface-950 flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-surface-900/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/30 hover:text-white/70 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white leading-none">TUBOT</p>
            <p className="text-[10px] text-brand-400 leading-none mt-0.5">agent online</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {TOOL_ICONS.map((Icon, i) => (
            <div key={i} className="w-6 h-6 rounded-md bg-surface-800 border border-white/[0.07] flex items-center justify-center">
              <Icon className="w-3 h-3 text-white/30" />
            </div>
          ))}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl w-full mx-auto">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
              <Bot className="w-8 h-8 text-brand-400" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-2">What can I help you with?</h2>
              <p className="text-white/40 text-sm">Tell me a task in plain English and I'll handle it.</p>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => send(s)}
                  className="text-left text-xs text-white/60 hover:text-white px-3 py-2.5 rounded-xl border border-white/[0.07] hover:border-brand-500/30 hover:bg-brand-500/5 transition-all">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex gap-3 message-enter ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-brand-600 text-white rounded-tr-sm'
                  : 'bg-surface-800 text-white/80 rounded-tl-sm border border-white/[0.07]'
              }`} dangerouslySetInnerHTML={{ __html: formatMessage(msg.content).replace(/\n/g, '<br/>') }} />
              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded-full bg-surface-700 border border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="w-3.5 h-3.5 text-white/60" />
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 items-start message-enter">
              <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-surface-800 border border-white/[0.07] rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 text-brand-400 animate-spin" />
                <span className="text-xs text-white/30">TUBOT is thinking...</span>
              </div>
            </div>
          )}
        </div>
        <div ref={bottomRef} />
      </div>

      <div className="sticky bottom-0 px-4 py-4 bg-surface-950/90 backdrop-blur-sm border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto flex gap-2 items-end">
          <div className="flex-1 relative">
            <textarea ref={inputRef} rows={1} value={input}
              onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
              placeholder="Tell TUBOT what to do..."
              className="w-full resize-none bg-surface-800 border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand-500/50 transition-all max-h-40 overflow-y-auto"
              style={{ minHeight: '46px' }}
              onInput={e => {
                const el = e.currentTarget
                el.style.height = 'auto'
                el.style.height = `${Math.min(el.scrollHeight, 160)}px`
              }} />
          </div>
          <button onClick={() => send()} disabled={!input.trim() || loading}
            className="w-11 h-11 rounded-xl bg-brand-600 hover:bg-brand-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all hover:scale-105 active:scale-95 flex-shrink-0">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
        <p className="text-center text-[10px] text-white/20 mt-2 font-mono">Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  )
}