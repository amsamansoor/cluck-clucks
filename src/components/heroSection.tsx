import type { HeroContent } from "../types/catering";
import heroImg from "../assets/images/hero-sandwich.jpg";

type Props = HeroContent;

const HeroSection = ({ heading, tagline, orderLink, requestLink }: Props) => {
  return (
    <section className="relative w-full min-h-screen">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Catering hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-red-600">
            {heading}
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg leading-relaxed">{tagline}</p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition transform hover:scale-105"
            >
              Order Now
            </a>
            <a
              href={requestLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-6 py-3 font-semibold border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition transform hover:scale-105"
            >
              Request Catering
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
