import { ArrowDown } from "lucide-react";

export default function MembersHero() {
  return (
    <section
      className="relative z-10 flex min-h-[calc(100vh-6rem)] w-full flex-col justify-between pt-[clamp(6rem,12vh,9rem)] pb-[clamp(2rem,5vh,4rem)]"
      aria-label="Members Hero"
    >
      <style>{`
        @keyframes heroEntrance {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-reveal {
          opacity: 0;
          animation: heroEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-reveal {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Main Hero Header Area */}
      <div className="flex w-full flex-col justify-between gap-8 md:flex-row md:items-start lg:gap-16">
        {/* Left Column: Eyebrow + Heading + Description */}
        <div className="flex-1">
          {/* Eyebrow */}
          <div
            className="hero-reveal mb-4 sm:mb-6"
            style={{ animationDelay: "50ms" }}
          >
            <span className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-ces-glint-blue">
              Computer Engineers&apos; Society
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-reveal text-[clamp(2.5rem,5.5vw,5rem)] font-medium leading-[1.05] tracking-tight text-ces-text-primary"
            style={{ animationDelay: "150ms" }}
          >
            Meet the People
            <br />
            Behind CS.
          </h1>

          {/* Sub-paragraph */}
          <p
            className="hero-reveal mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ces-text-secondary"
            style={{ animationDelay: "280ms" }}
          >
            The builders, problem-solvers, mentors, and creators shaping the
            Computer Engineers Society.
          </p>
        </div>

        {/* Right Column: Pills & Category Indicator */}
        <div
          className="hero-reveal flex flex-col items-start md:items-end gap-3 pt-2 md:pt-4"
          style={{ animationDelay: "380ms" }}
        >
          {/* Pills: BUILD / LEARN / CREATE */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm">
              BUILD
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm">
              LEARN
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] sm:text-xs tracking-wider text-ces-text-secondary backdrop-blur-sm">
              CREATE
            </span>
          </div>

          {/* Micro-label */}
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-ces-text-muted">
            01 / PEOPLE / COMMUNITY
          </span>
        </div>
      </div>

      {/* Bottom Row: Scroll to meet the team */}
      <div
        className="hero-reveal mt-12 sm:mt-16 flex items-center"
        style={{ animationDelay: "500ms" }}
      >
        <a
          href="#community-intro"
          className="group inline-flex items-center gap-2 text-sm text-ces-text-muted transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ces-glint-blue/60"
        >
          <span>Scroll to meet the team</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-ces-glint-blue transition-transform group-hover:translate-y-1 motion-reduce:animate-none" />
        </a>
      </div>
    </section>
  );
}
