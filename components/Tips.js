// components/Tips.js
import SectionDivider from './SectionDivider';

export default function Tips() {
  const tips = [
    {
      title: 'Moisture Is the Move',
      text: 'Hydrate your locs regularly with water-based sprays and seal in with natural oils like jojoba or castor.'
    },
    {
      title: 'Sleep Smart',
      text: 'Wrap your hair at night in a satin or silk scarf to reduce friction and retain moisture.'
    },
    {
      title: 'Clean, But Don’t Strip',
      text: 'Use sulfate-free shampoos that cleanse without drying. Avoid over-washing — 2-3 weeks is often ideal.'
    },
    {
      title: 'Hands Off!',
      text: 'Avoid excessive twisting or styling to prevent tension and breakage around roots and edges.'
    },
    {
      title: 'Respect the Journey',
      text: 'Locs evolve over time — trust the process, stay consistent, and embrace every phase.'
    }
  ];

  return (
    <>
      <section id="tips" className="bg-backgroundDark text-white pt-0 pb-4 sm:pb-8 md:pb-12 px-6 scroll-mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-display text-white animate-fadeIn">
            Secrets of the Locsmith
          </h2>
          <p className="text-lg text-gray-300 mb-12 animate-slideUp">
            Proven guidance for nurturing your crown from the inside out — because real artistry begins with real care.
          </p>

          <div className="grid gap-6 md:grid-cols-2 animate-fadeIn">
            {tips.map((tip, i) => (
              <div key={i} className="bg-charcoal p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold mb-2 text-ctaGold">{tip.title}</h3>
                <p className="text-sm text-gray-200">{tip.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4">
        <a
        href="https://wa.me/971558487022"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-white hover:bg-ctaGold text-charcoal font-bold py-3 px-8 rounded-full transition duration-300 shadow-md"
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
