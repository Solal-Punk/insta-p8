import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-[#ffe14d] selection:text-black antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap');
        .font-serif-display { font-family: 'Instrument Serif', Georgia, serif; }
        .font-mono-ui { font-family: 'JetBrains Mono', ui-monospace, monospace; }
      `}</style>

      <nav className="flex items-center justify-between px-5 md:px-10 h-16 border-b border-white/[0.08]">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-[#ffe14d] text-black flex items-center justify-center rounded-[6px] font-mono-ui text-xs font-bold">
            IA
          </div>
          <span className="font-mono-ui text-sm font-bold tracking-tight">InstaAuto</span>
        </Link>
        <Link
          href="/"
          className="font-mono-ui text-xs text-neutral-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-3.5 py-1.5 transition-colors"
        >
          Back home
        </Link>
      </nav>

      <main className="px-5 md:px-10 py-16 md:py-24 max-w-2xl mx-auto">
        <p className="font-mono-ui text-[11px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
          Legal
        </p>
        <h1 className="font-serif-display text-5xl md:text-6xl mb-3">Privacy Policy</h1>
        <p className="font-mono-ui text-xs text-neutral-500 mb-12">Last updated: August 2026</p>

        <div className="space-y-10 text-neutral-300 leading-relaxed text-[15px]">
          <section>
            <p>
              <span className="text-white font-semibold">InstaAuto</span> is an Instagram automation
              tool that helps account owners set up automated replies to comments and direct
              messages. This page explains what data we collect, how we use it, and how you can
              request that it be deleted.
            </p>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              Data We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Your Instagram username and Instagram user ID</li>
              <li>Instagram access tokens issued when you connect your account</li>
              <li>
                The content of comments and direct messages that pass through the automations you
                configure, so we can match triggers and send the replies you set up
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              How We Use It
            </h2>
            <p>
              This data is used solely to power the automated replies you, the account owner,
              configure — for example, matching keywords in a comment or DM and sending the
              response you set up. We do not use your data for advertising, profiling, or any
              purpose outside operating the automation features you enable.
            </p>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              Data Storage
            </h2>
            <p>
              All data is stored securely in our database, hosted on Supabase. Access tokens and
              account data are protected and only used server-side to communicate with the
              Instagram API on your behalf.
            </p>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              Third Parties
            </h2>
            <p>
              We do not sell your data, and we do not share it with third parties. Data is only
              used within InstaAuto to run the automations you set up.
            </p>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              Data Deletion
            </h2>
            <p>
              You can request deletion of your data at any time by contacting{" "}
              <a
                href="mailto:solalphan@gmail.com"
                className="text-[#ffe14d] hover:underline"
              >
                solalphan@gmail.com
              </a>
              . We will remove your stored tokens and associated data promptly upon request.
            </p>
          </section>

          <section>
            <h2 className="font-mono-ui text-sm font-bold text-[#ffe14d] uppercase tracking-wide mb-3">
              Contact
            </h2>
            <p>
              For any questions about this policy or your data, reach out at{" "}
              <a
                href="mailto:solalphan@gmail.com"
                className="text-[#ffe14d] hover:underline"
              >
                solalphan@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/[0.08] px-5 md:px-10 py-8">
        <span className="font-mono-ui text-[11px] text-neutral-600">
          InstaAuto — Instagram automation.
        </span>
      </footer>
    </div>
  )
}
