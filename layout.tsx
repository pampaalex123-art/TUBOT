@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-body: 'DM Sans', sans-serif;
  --font-display: 'Syne', sans-serif;
  --font-mono: 'DM Mono', monospace;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #2f36cc; border-radius: 99px; }

/* Noise texture overlay */
.noise::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 0;
  opacity: 0.4;
}

/* Grid background */
.grid-bg {
  background-image:
    linear-gradient(rgba(80, 99, 245, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(80, 99, 245, 0.07) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Glow effects */
.glow-brand {
  box-shadow: 0 0 60px rgba(80, 99, 245, 0.25), 0 0 120px rgba(80, 99, 245, 0.1);
}

.glow-text {
  text-shadow: 0 0 40px rgba(117, 137, 255, 0.6);
}

/* Chat message animation */
.message-enter {
  animation: slideIn 0.3s ease forwards;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #7589ff 0%, #5063f5 40%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-warm {
  background: linear-gradient(135deg, #fff 0%, #9db0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Staggered animation delays */
.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }

/* Button base */
.btn-primary {
  @apply inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
         bg-brand-500 hover:bg-brand-400 text-white transition-all duration-200
         hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-500/20;
}

.btn-ghost {
  @apply inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm
         text-white/60 hover:text-white border border-white/10 hover:border-white/20
         transition-all duration-200 hover:bg-white/5;
}
