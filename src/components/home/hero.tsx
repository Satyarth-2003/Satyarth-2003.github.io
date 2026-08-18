"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, ctaClass } from "@/components/ui/primitives";
import { RevealText } from "@/components/motion/reveal-text";
import { RichText } from "@/components/ui/rich-text";
import { Magnetic } from "@/components/motion/magnetic";
import { BootSequence } from "@/components/ui/boot-sequence";
import { ScrollCue } from "@/components/ui/scroll-cue";
import { LazyDevice } from "@/components/three/lazy-device";
import { profile } from "@/content/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[42rem] w-[42rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-ember/12 blur-[140px]"
      />

      <Container className="grid items-center gap-12 pb-16 pt-28 lg:min-h-dvh lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-24 lg:pb-24">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            {profile.status.available}
          </div>

          <RevealText
            as="h1"
            className="mt-7 text-balance font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] text-bone sm:text-[3.2rem] lg:text-[3.6rem]"
          >
            I build production GenAI systems, from agentic pipelines to multimodal{" "}
            <span className="text-ember">scale.</span>
          </RevealText>

          <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-bone-dim sm:text-lg">
            <RichText text={profile.intro} />
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Magnetic>
              <Link
                href="/projects"
                className={ctaClass}
              >
                See the work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-1 py-3 font-mono text-sm text-muted transition-colors hover:text-bone"
            >
              Résumé
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

        </div>

        <div className="relative h-[40vh] min-h-[300px] w-full lg:h-[80vh]">
          <LazyDevice poster="/assets/hero-poster.webp" />
        </div>
      </Container>

      <Container className="pb-16">
        <div className="max-w-sm">
          <BootSequence />
        </div>
      </Container>

      <ScrollCue />
    </section>
  );
}
