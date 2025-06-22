// components/Services.js
import SectionDivider from './SectionDivider';
import { Sparkles, Scissors, SprayCan, Droplets, HeartPulse, User, Wand2 } from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <Wand2 className="w-6 h-6 text-ctaGold" />, label: 'Loc Creation (Starter Locs)' },
    { icon: <Sparkles className="w-6 h-6 text-ctaGold" />, label: 'Loc Maintenance & Retwist' },
    { icon: <Scissors className="w-6 h-6 text-ctaGold" />, label: 'Loc Styling (Barrel Rolls, Two-Strand Twist, Updos)' },
    { icon: <Droplets className="w-6 h-6 text-ctaGold" />, label: 'Wash & Deep Conditioning Treatments' },
    { icon: <HeartPulse className="w-6 h-6 text-ctaGold" />, label: 'Scalp Detox & Hydration Therapy' },
    { icon: <User className="w-6 h-6 text-ctaGold" />, label: 'Beard Grooming & Lining' },
    { icon: <SprayCan className="w-6 h-6 text-ctaGold" />, label: 'Basic Fades & Taper Cuts' }
  ];

  return (
    <>
      <section id="services" className="bg-[#F1E9DB] text-charcoal pt-0 pb-4 sm:pb-8 md:pb-12 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight animate-fadeIn">
            Our Craft
          </h2>
          <ul className="grid gap-5 md:grid-cols-2 text-left max-w-3xl mx-auto animate-fadeIn">
            {services.map((service, i) => (
              <li
                key={i}
                className="py-4 px-5 bg-white rounded-xl shadow text-lg hover:bg-ctaGold/10 transition flex items-center gap-4"
              >
                {service.icon}
                <span className="font-sans leading-snug">{service.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center gap-4">
        <a
        href="https://wa.me/971558487022"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-ctaTeal hover:bg-ctaGold text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md"
>
        Book an Appointment
      </a>
    </div>

      </section>

      <SectionDivider />
    </>
  );
}
