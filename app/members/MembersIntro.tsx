export default function MembersIntro() {
  return (
    <section
      id="community-intro"
      className="relative z-10 w-full border-t border-white/10 py-[clamp(3rem,6vh,5rem)]"
      aria-labelledby="community-heading"
    >
      <div className="max-w-4xl">
        {/* Eyebrow */}
        <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-ces-gold">
          The Community
        </p>

        {/* Heading */}
        <h2
          id="community-heading"
          className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-ces-text-primary"
        >
          The People Behind the Community
        </h2>

        {/* Lead line */}
        <p className="mt-4 text-lg sm:text-xl font-normal text-ces-text-primary/90">
          Different skills. Different perspectives. One community.
        </p>

        {/* Sub-paragraph */}
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-ces-text-secondary">
          Senior members, associates, junior associates, and alumni mentors who
          learn, build, collaborate, and push technology forward together.
        </p>
      </div>
    </section>
  );
}
