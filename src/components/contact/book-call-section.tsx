"use client";

import { motion } from "framer-motion";

export function BookCallSection() {
  return (
    <section id="book-call" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <p className="text-xs uppercase tracking-[0.55em] text-[var(--text-subheading)]">
          Prefer a human conversation?
        </p>

        <h2 className="text-3xl font-semibold md:text-4xl text-[var(--text-heading)]">
          Book a strategy call with our team
        </h2>

        <p className="text-lg text-[var(--text-subheading)] max-w-2xl mx-auto">
          Schedule a 30-minute call to discuss implementing Orvia in your business, explore AI automation opportunities, integrations with your existing tools, or get expert guidance on scaling revenue with AI.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            Orvia Implementation
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            AI Automation
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            Revenue Growth
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            Integrations
          </span>
        </div>

        {/* Scheduler Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <div className="rounded-2xl dark:bg-white/5 dark:border-white/10 dark:text-white bg-white border-gray-300 text-gray-900 border shadow-md p-6">
            <div className="h-[520px] w-full overflow-hidden rounded-2xl bg-[var(--bg)] dark:bg-[var(--bg-secondary)]">
              {/* 
                OPTION 1: Cal.com Embed
                Replace 'your-username' with your Cal.com username
                Get your embed URL from: https://cal.com/your-username/30min
              */}
              <iframe
                src="https://cal.com/your-username/30min"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "1rem",
                }}
                title="Book a strategy call"
              />

              {/* 
                OPTION 2: Calendly Embed (Alternative)
                Uncomment this and comment out Cal.com iframe above
                Replace 'your-username' with your Calendly username
                Get your embed URL from: https://calendly.com/your-username/30min
              */}
              {/* <iframe
                src="https://calendly.com/your-username/30min?embed_domain=yourdomain.com&embed_type=Inline"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "1rem",
                }}
                title="Book a strategy call"
              /> */}

              {/* 
                OPTION 3: Custom Scheduler
                If you have a custom booking system, replace the iframe with your component
              */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

