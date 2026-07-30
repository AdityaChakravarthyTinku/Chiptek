import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button.jsx";
import { useReducedMotion } from "../../hooks/useReducedMotion.js";

const capabilityLine = "Custom software • Data foundations • Applied AI • Specialist engineering talent";

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = !reducedMotion && !videoFailed;

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-hero-gradient pt-28 text-white"
    >
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/media/chiptek-hero.mp4"
          poster="/media/chiptek-hero-poster.webp"
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
          aria-hidden="true"
        />
      )}

      {/* Dark overlay + vignette + data-grid texture, always present so text stays readable whether or not the video loads */}
      <div className="absolute inset-0 bg-hero-gradient/90 mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 grid-texture opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(7,19,33,0.7), transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="container-content relative z-10">
        <p className="text-xs font-semibold tracking-[0.25em] text-teal">SOFTWARE · DATA · AI</p>
        <h1 className="mt-5 max-w-3xl text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.05]">
          Build the systems your next stage depends on.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Chiptek designs, develops, and improves dependable software, data platforms, and AI-enabled workflows
          for organizations that need practical technology outcomes.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/#services">Explore Our Capabilities</Button>
          <Button href="/#contact" variant="ghost" withArrow={false}>
            Discuss a Requirement
          </Button>
        </div>

        <p className="mt-8 text-xs font-medium tracking-wide text-white/55 sm:text-sm">{capabilityLine}</p>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/60 sm:flex"
        aria-label="Scroll to About Chiptek"
      >
        <span className="text-[10px] font-semibold tracking-widest">SCROLL</span>
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
