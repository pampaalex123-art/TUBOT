import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Syne } from 'next/font/google'
import './globals.css'

const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', weight: ['300','400','500','600'] })
const display = Syne({ subsets: ['latin'], variable: '--font-display', weight: ['600','700','800'] })
const mono = DM_Mono({ subsets: ['latin'], variable: '--font-mono', weight: ['400','500'] })

export const metadata: Metadata = {
  title: 'TUBOT — Your AI Business Agent',
  description: 'Automate your tools in plain English.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`}>
      <body className="font-sans bg-surface-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}