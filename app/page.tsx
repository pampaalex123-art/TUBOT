import Link from 'next/link'
import { ArrowRight, Zap, Globe, Calendar, Mail, Table2, Bot, ChevronRight } from 'lucide-react'

const tools = [
  { icon: Globe,    label: 'Go High Level',   desc: 'Contacts, pipelines, tags' },
  { icon: Table2,   label: 'Google Sheets',   desc: 'Read, update, add rows' },
  { icon: Mail,     label: 'Gmail',           desc: 'Draft, send, search' },
  { icon: Calendar, label: 'Google Calendar', desc: 'Events & meetings' },
  { icon: Zap,      label: 'More soon',       desc: 'Slack, Notion & more' },
]

const examples = [
  '"Add Maria Lopez to GHL as a hot lead in the Sales pipeline"',
  '"Update row 5 in my tracker sheet — set status to Completed"',
  '"Send a follow-up email to all pending leads from last week"',
  '"Schedule a call with John for Thursday at 3pm"',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-950 grid-bg relative overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-600/20 blur-[120px] pointer-events-none" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">TUBOT</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/chat" className="btn-ghost text-sm py-2 px-4">Sign in</Link>
          <Link href="/chat" className="btn-primary text-sm py-2 px-4">
            Try free <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-medium mb-8">
          <Zap className="w-3 h-3" /> Powered by Gemini — 100% free to start
        </div>
        <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
          <span className="gradient-text-warm">Your tools.</span><br />
          <span className="gradient-text">Your words.</span>
        </h1>
        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
          TUBOT is your AI business agent. Tell it what to do in plain English
          and it handles your CRM, spreadsheets, emails, and calendar instantly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up delay-300">
          <Link href="/chat" className="btn-primary px-8 py-3.5 text-base">
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#tools" className="btn-ghost px-8 py-3.5 text-base">See how it works</Link>
        </div>
      </section>

      <section id="tools" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <p className="text-center text-xs font-mono text-white/30 uppercase tracking-widest mb-8">Works with your tools</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {tools.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/[0.07] bg-surface-900/40 hover:border-brand-500/30 transition-all">
              <Icon className="w-5 h-5 text-brand-400" />
              <span className="text-xs font-semibold text-white/80 text-center">{label}</span>
              <span className="text-[10px] text-white/30 text-center">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-32 text-center">
        <div className="rounded-2xl border border-brand-500/20 bg-brand-500/10 p-10">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Ready to automate?</h2>
          <p className="text-white/40 mb-8">No setup. No code. Just tell TUBOT what to do.</p>
          <Link href="/chat" className="btn-primary px-8 py-3.5 text-base">
            Get started free <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.06] py-6 px-6 max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-brand-400" />
          <span className="text-xs text-white/30 font-mono">TUBOT © 2025</span>
        </div>
        <p className="text-xs text-white/20">Built with Next.js · Deployed on Vercel</p>
      </footer>
    </div>
  )
}