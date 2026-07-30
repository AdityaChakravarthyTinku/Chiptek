import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function FinalCTA() {
  return (
    <section className="bg-hero-gradient py-20 text-white sm:py-24">
      <div className="container-content text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold leading-tight">
            Have a software, data, or AI requirement to evaluate?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75">
            Describe the current system, challenge, or desired outcome. Chiptek can help identify a practical
            technical starting point.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/#contact">Discuss a Requirement</Button>
            <Button href="/#services" variant="ghost" withArrow={false}>
              Review Our Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
