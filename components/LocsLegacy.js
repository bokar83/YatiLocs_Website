// components/LocsLegacy.js
import SectionDivider from './SectionDivider';

export default function LocsLegacy() {
  return (
    <>
      <section id="legacy" className="bg-[#FFF8F0] text-charcoal px-6 pb-12 scroll-mt-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 text-left">
          <img
            src="/yati-placeholder.png"
            alt="Yati the Locsmith"
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover max-h-[500px]"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              The Locsmith’s Legacy
            </h2>
            <p className="text-lg text-gray-800 mb-4 leading-relaxed">
              With years of hands-on experience, Yati has lived the loc journey — from starter locs to flourishing crowns.
              His expertise with Black hair care and mastery of natural styling has made him the go-to loc specialist in Dubai.
            </p>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              Whether you're looking to begin your locs journey or maintain an existing set, Yati’s approach blends culture,
              artistry, and precision. Your crown is safe in the hands of someone who’s walked this path many times before.
            </p>
            <a
              href="https://wa.me/971558487022"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2A9D8F] hover:bg-[#E9C46A] text-white font-bold py-3 px-8 rounded-full transition shadow-lg"
            >
              Book with Yati
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}