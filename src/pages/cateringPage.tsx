import HeroSection from "../components/HeroSection";
import { heroContent } from "../content/catering";

const CateringPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection {...heroContent} />

      {/* If you want the small intro block again just below hero, keep it dynamic too */}
      <section className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          {heroContent.heading}
        </h2>
        <p className="mt-3 text-gray-700 md:text-lg">{heroContent.tagline}</p>
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={heroContent.orderLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-6 py-3 font-semibold bg-yellow-400 text-black hover:bg-yellow-300 transition"
          >
            Order Now
          </a>
          <a
            href={heroContent.requestLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl px-6 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition"
          >
            Request A Special Catering Order
          </a>
        </div>
      </section>
    </main>
  );
};

export default CateringPage;
