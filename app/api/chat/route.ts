import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const SYSTEM_PROMPT = `You are TUBOT, a personal AI business agent for Academy for Mathematics & English.
Your job is to help automate tasks across Go High Level CRM, Google Sheets, Gmail, and Google Calendar.

## Your capabilities
- Go High Level (GHL): manage contacts, leads, pipelines, tags, workflows
- Google Sheets: read, update, add rows
- Gmail: draft, send, search emails
- Google Calendar: create, update, delete events

## Behavior
- Respond in a friendly, concise, professional tone
- Before irreversible actions (delete, send email, bulk update), confirm first
- Ask one clarifying question if a task is ambiguous
- Report back clearly after completing a task

## Action format
ACTION: [name of the action]
TOOL: [GHL / Sheets / Gmail / Calendar]
DATA: [specific data]
RESULT: [what will happen]

End with: "Anything else you'd like me to do?"`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 })

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro', systemInstruction: SYSTEM_PROMPT })

    const history = messages.slice(0, -1).map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

    const chat = model.startChat({ history })
    const result = await chat.sendMessage(messages[messages.length - 1].content)
    return NextResponse.json({ content: result.response.text() })
  } catch (err) {
    console.error('Gemini API error:', err)
    return NextResponse.json({ error: 'Failed to get response' }, { status: 500 })
  }
}