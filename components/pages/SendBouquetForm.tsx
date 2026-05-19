"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/effects/Reveal";
import { PageHero } from "@/components/layout/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { SEND_FORM_COPY } from "@/constants/pages";
import { cn } from "@/lib/utils";

export function SendBouquetForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pb-(--spacing-section-gap)">
      <PageHero
        eyebrow="Send Love"
        title={SEND_FORM_COPY.title}
        description={SEND_FORM_COPY.description}
      />

      <div className="mx-auto max-w-xl px-5 md:px-(--spacing-margin-desktop)">
        <AnimatePresence mode="wait">
          {sent ? (
            <Reveal key="success">
              <GlassCard className="p-10 text-center" hover={false}>
                <p className="font-headline-sm text-primary">
                  {SEND_FORM_COPY.successMessage}
                </p>
              </GlassCard>
            </Reveal>
          ) : (
            <Reveal key="form">
              <GlassCard className="p-8 md:p-10" hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <label className="block space-y-2">
                    <span className="font-label-md uppercase text-on-surface-variant">
                      Their name
                    </span>
                    <input
                      required
                      name="recipient"
                      type="text"
                      className={cn(
                        "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                        "text-on-surface outline-none focus:border-primary/50",
                      )}
                      placeholder="Who receives this bloom?"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="font-label-md uppercase text-on-surface-variant">
                      Your name
                    </span>
                    <input
                      required
                      name="sender"
                      type="text"
                      className={cn(
                        "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                        "text-on-surface outline-none focus:border-primary/50",
                      )}
                      placeholder="Signed with love"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="font-label-md uppercase text-on-surface-variant">
                      Your message
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className={cn(
                        "w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3",
                        "text-on-surface outline-none focus:border-primary/50",
                      )}
                      placeholder="Write the words your heart has been holding..."
                    />
                  </label>

                  <motion.button
                    type="submit"
                    className="w-full rounded-full bg-primary-container py-4 font-label-md uppercase tracking-widest text-on-primary-container shadow-[0_0_24px_rgba(255,127,80,0.45)]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Bouquet
                  </motion.button>
                </form>
              </GlassCard>
            </Reveal>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
