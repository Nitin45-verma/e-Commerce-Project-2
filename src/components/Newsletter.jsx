import React, { useState } from 'react';
import { Mail, Check, Sparkles, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-indigo-500/20 bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 relative overflow-hidden text-center shadow-2xl">
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Join The Luxe VIP Club
            </h2>

            <p className="text-sm text-slate-300">
              Subscribe to receive exclusive access to early product drops, private flash sales, and <strong className="text-indigo-400">15% off your first purchase</strong>.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 p-4 rounded-2xl flex items-center justify-center gap-2 max-w-md mx-auto">
                <Check className="w-5 h-5" />
                <span className="text-xs font-semibold">Welcome to the Club! Check your inbox for your 15% discount code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-slate-950/80 border border-slate-700/80 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-500">
              We respect your privacy. Unsubscribe anytime with 1-click.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
