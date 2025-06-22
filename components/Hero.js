// components/Hero.js
import { useEffect } from 'react';
import Rellax from 'rellax';
import SectionDivider from './SectionDivider';

export default function Hero() {
  useEffect(() => {
    new Rellax('.rellax-hero', { speed: -3, center: true });
  }, []);

  return (
    <>
      <section
          id="hero"
          className="relative min-h-[80vh] sm:min-h-screen overflow-hidden bg-backgroundDark text-white flex items-center justify-center text-center scroll-mt-16 pt-0 pb-4 sm:pb-8 md:pb-12"
        >

        <div className="absolute inset-0 z-0">
          <img
            src="/hero-placeholder.png"
            alt="Locs Barber Dubai"
            className="w-full h-full object-cover scale-105 sm:scale-110 opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10"></div>

        <div className="relative z-20 rellax-hero max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6 drop-shadow-xl">
            Yati Locs
          </h1>
          <p className="text-lg md:text-2xl text-backgroundLight mb-10 font-light max-w-xl mx-auto">
            Dubai’s premier black hair & locs specialist.
            <br className="hidden md:block" /> Culture. Care. Craft.
          </p>
          <div className="flex flex-col items-center gap-4">
  <a
    href="#gallery"
    className="inline-block bg-ctaTeal hover:bg-ctaGold text-white font-bold py-3 px-8 md:px-12 text-lg md:text-xl rounded-full transition duration-300 shadow-lg"
  >
    See the Work
  </a>

  <a
    href="https://wa.me/971558487022"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-ctaTeal hover:bg-ctaGold text-white font-bold py-3 px-8 md:px-12 text-lg md:text-xl rounded-full transition duration-300 shadow-lg"
  >
    Book an Appointment
  </a>
</div>

        </div>
      </section>

      <SectionDivider />
    </>
  );
}
