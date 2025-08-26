import type { HeroContent } from "../types/catering";

type Props = HeroContent;

const HeroSection = ({ heroImage, heading, tagline, orderLink, requestLink }: Props) => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh]">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Catering hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-3xl px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {heading}
          </h1>
          <p className="mt-4 md:mt-6 text-sm md:text-lg leading-relaxed">
            {tagline}
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={orderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              Order Now
            </a>
            <a
              href={requestLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl px-6 py-3 font-semibold bg-white/90 text-black hover:bg-white transition"
            >
              Request A Special Catering Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
