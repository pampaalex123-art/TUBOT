# TUBOT — AI Business Agent

Your personal AI agent. Tell it what to do in plain English — it handles GHL, Excel, Email, Calendar and more.

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Gemini 1.5 Pro** (Google AI — free tier)
- **Vercel** (deployment)

---

## Setup Guide

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/tubot.git
cd tubot
npm install
```

### 2. Get your Gemini API key
1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Click **Get API key** → **Create API key**
3. Copy the key

### 3. Set up environment variables
```bash
cp .env.example .env.local
```
Open `.env.local` and paste your key:
```
GEMINI_API_KEY=your_key_here
```

### 4. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

---

## Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo
3. In **Environment Variables**, add:
   - `GEMINI_API_KEY` = your Gemini key
4. Click **Deploy**

That's it — live in 60 seconds.

---

## Project Structure
```
tubot/
├── app/
│   ├── layout.tsx          # Root layout, fonts
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── chat/
│   │   └── page.tsx        # Chat page
│   └── api/
│       └── chat/
│           └── route.ts    # Gemini API endpoint
├── components/
│   └── ChatInterface.tsx   # Main chat UI
├── .env.example            # Environment variable template
└── README.md
```

---

## Adding n8n Integrations (next step)

Once you have n8n running locally:
1. Create workflows in n8n for each tool (GHL, Excel, etc.)
2. Expose them as webhook endpoints
3. Add the webhook URLs to your `.env.local`
4. Update `app/api/chat/route.ts` to call n8n when the agent identifies an action

More on this in the next phase.
