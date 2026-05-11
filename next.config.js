import Link from 'next/link'
import { ArrowRight, Zap, Globe, Calendar, Mail, Table2, Bot, ChevronRight } from 'lucide-react'

const tools = [
  { icon: Globe,    label: 'Go High Level',      desc: 'Contacts, pipelines, tags' },
  { icon: Table2,   label: 'Excel Online',        desc: 'Read, update, add rows' },
  { icon: Mail,     label: 'Gmail / Outlook',     desc: 'Draft, send, search' },
  { icon: Calendar, label: 'Google Calendar',     desc: 'Events & meetings' },
  { icon: Zap,      label: 'More coming soon',    desc: 'Slack, Notion & more' },
]

const examples = [
  '"Add Maria Lopez to GHL as a hot lead in the Sales pipeline"',
  '"Update row 5 in my tracker sheet — set status to Completed"',
  '"Send a follow-up email to all pending leads from last week"',
  '"Schedule a call with John for Thursday at 3pm"',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-950 noise grid-bg relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[400px] right-[-100px] w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-700 text-lg text-white tracking-tight">TUBOT</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/chat" className="btn-ghost text-sm py-2 px-4">
            Sign in
          </Link>
          <Link href="/chat" className="btn-primary text-sm py-2 px-4">
            Try free <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-300 text-xs font-medium mb-8 animate-fade-in">
          <Zap className="w-3 h-3" />
          Powered by Gemini — 100% free to start
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-800 leading-[1.05] tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
          <span className="gradient-text-warm">Your tools.</span>
          <br />
          <span className="gradient-text">Your words.</span>
        </h1>

        <p className="text-white/50 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
          TUBOT is your AI business agent. Tell it what to do in plain English
          and it handles your CRM, spreadsheets, emails, and calendar — instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 opacity-0 animate-fade-up delay-300">
          <Link href="/chat" className="btn-primary px-8 py-3.5 text-base glow-brand">
            Start for free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="#how-it-works" className="btn-ghost px-8 py-3.5 text-base">
            See how it works
          </Link>
        </div>
      </section>

      {/* Example prompts */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-white/[0.08] bg-surface-900/60 backdrop-blur-sm overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-white/30 font-mono">tubot — agent chat</span>
          </div>

          <div className="p-6 space-y-4">
            {examples.map((ex, i) => (
              <div key={i} className="flex gap-3 items-start opacity-0 animate-fade-up" style={{ animationDelay: `${300 + i * 100}ms` }}>
                <div className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-brand-300 font-mono font-500">U</span>
                </div>
                <div className="bg-surface-800/80 rounded-xl rounded-tl-sm px-4 py-2.5 text-sm text-white/80 font-mono leading-relaxed border border-white/[0.05]">
                  {ex}
                </div>
              </div>
            ))}

            {/* Bot response preview */}
            <div className="flex gap-3 items-start opacity-0 animate-fade-up delay-500">
              <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="bg-brand-500/10 border border-brand-500/20 rounded-xl rounded-tl-sm px-4 py-2.5 text-sm text-brand-200 font-mono leading-relaxed">
                ✓ Done — Maria Lopez added to GHL Sales pipeline with tag &quot;hot lead&quot;.
                <br />
                <span className="text-white/30">Anything else you&apos;d like me to do?</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="how-it-works" className="relative z-10 max-w-5xl mx-auto px-6 pb-24">
        <p className="text-center text-xs font-mono text-white/30 uppercase tracking-widest mb-8">Works with your tools</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {tools.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-white/[0.07] bg-surface-900/40 hover:border-brand-500/30 hover:bg-brand-500/5 transition-all duration-200 cursor-default">
              <Icon className="w-5 h-5 text-brand-400 group-hover:text-brand-300 transition-colors" />
              <span className="text-xs font-600 text-white/80 text-center leading-tight">{label}</span>
              <span className="text-[10px] text-white/30 text-center leading-tight">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pb-32 text-center">
        <div className="rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 to-violet-600/5 p-10 backdrop-blur-sm">
          <h2 className="font-display text-3xl sm:text-4xl font-700 text-white mb-4">
            Ready to automate your business?
          </h2>
          <p className="text-white/40 mb-8 text-base">No setup. No code. Just tell TUBOT what to do.</p>
          <Link href="/chat" className="btn-primary px-8 py-3.5 text-base">
            Get started free <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-6 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-brand-400" />
          <span className="text-xs text-white/30 font-mono">TUBOT © 2025</span>
        </div>
        <p className="text-xs text-white/20">Built with Next.js · Deployed on Vercel</p>
      </footer>
    </div>
  )
}
