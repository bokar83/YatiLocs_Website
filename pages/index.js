import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import LocsLegacy from '../components/LocsLegacy'; 
import Tips from '../components/Tips';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yati Locs | Dubai Locs & Black Hair Specialist</title>
        <meta name="description" content="Premier black hair care & dreadlock barber in Dubai. Book now via WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yati Locs – Locs & Black Hair Barber in Dubai" />
        <meta property="og:description" content="Expert in black hair care and locs. Explore styles and book easily via WhatsApp." />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <Header />
      <Hero />
      <Gallery />
      <Services />
      <LocsLegacy />
      <Tips />
      <Footer />

      <a
        href="https://wa.me/971558487022"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="hover:scale-110 transition"
      >
        <img
          src="/icons/whatsappGreen.svg"
          alt="WhatsApp"
          className="w-20 h-20"
        />
      </a>
    </>
  );
}
