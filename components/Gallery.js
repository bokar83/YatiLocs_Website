// components/Gallery.js
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionDivider from './SectionDivider';
import { Home, Image, Scissors, Lightbulb, Phone, MessageCircle, Earth,Signature } from 'lucide-react';
import { useEffect, useState } from 'react';
//import ManIcon from '/man-locs-icon.svg';

export default function Gallery() {
  const galleryItems = [
    '/barber_placeholder1.png',
    '/barber_placeholder2.png',
    '/barber_placeholder3.png',
    '/barber_placeholder4.png',
    '/barber_placeholder5.png',
    '/video-placeholder.mp4'
  ];

  const [activeSection, setActiveSection] = useState('hero');
  const [heroOverlay, setHeroOverlay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'gallery', 'services', 'legacy', 'tips'];
      const scrollPos = window.scrollY + 100;
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
      setHeroOverlay(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(btn => {
      btn.classList.add('text-[#B85C38]', 'hover:text-[#2A9D8F]', 'transition-colors', 'duration-300');
    });
  }, []);

  return (
    <>
      <nav className="fixed top-2 left-1/2 -translate-x-1/2 z-50 text-[0.7rem] sm:text-sm md:text-base font-semibold flex flex-nowrap justify-between items-center gap-1 sm:gap-3 animate-fadeInUp backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-white/20 shadow-md transition-all duration-300 hover:scale-100 w-[98%] max-w-[520px]">
        <a href="#hero" className={`flex items-center gap-1 transition-colors ${activeSection === 'hero' ? 'text-[#B85C38]' : heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}>
          <Home className="w-5 h-5" /> Home
        </a>
        <a href="#gallery" className={`flex items-center gap-1 transition-colors ${activeSection === 'gallery' ? 'text-[#B85C38]' : heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}>
          <Image className="w-5 h-5" /> Gallery
        </a>
        <a href="#services" className={`flex items-center gap-1 transition-colors ${activeSection === 'services' ? 'text-[#B85C38]' : heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}>
          <Scissors className="w-5 h-5" /> Services
        </a>
        <a href="#legacy" className={`flex items-center gap-1 transition-colors ${activeSection === 'legacy' ? 'text-[#B85C38]' : heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}>
          <Signature className="w-5 h-5" /> Yati
        </a>
        <a href="#tips" className={`flex items-center gap-1 transition-colors ${activeSection === 'tips' ? 'text-[#B85C38]' : heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}>
          <Lightbulb className="w-5 h-5" /> Tips
        </a>
        <a
          href="https://wa.me/971558487022"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1 transition-colors ${heroOverlay ? 'text-white/90 hover:text-white' : 'text-charcoal hover:text-[#B85C38]'}`}
        >
          <MessageCircle className="w-5 h-5" /> Book
        </a>
      </nav>

      <section id="gallery" className="relative bg-backgroundLight text-charcoal pt-0 pb-4 sm:pb-8 md:pb-12 scroll-mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight font-display text-charcoal animate-fadeIn">
            Art in Action
          </h2>
          <p className="text-base sm:text-lg text-muted mb-4 sm:mb-8 max-w-2xl mx-auto animate-slideUp px-2">
            A look at real transformations and powerful hair moments from the chair of Yati Locs. Bold. Intentional. Rooted.
          </p>

          <a
            href="https://wa.me/971558487022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 sm:mb-10 bg-ctaTeal hover:bg-ctaGold text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-colors duration-300 shadow-xl animate-slideUp"
          >
            Book an Appointment
          </a>

          <div className="max-w-4xl mx-auto animate-fadeIn flex justify-center">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onInit={(swiper) => {
                swiper.el.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(btn => {
                  btn.style.color = '#B85C38';
                });
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4500 }}
              navigation
              pagination={{ clickable: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {galleryItems.map((src, index) => {
                const isVideo = src.endsWith('.mp4');
                return (
                  <SwiperSlide key={index} className="flex justify-center items-center w-full h-full">
                    {isVideo ? (
                      <video
                        src={src}
                        autoPlay
                        muted
                        loop
                        className="max-h-[500px] md:max-h-[600px] h-full object-contain mx-auto rounded-2xl"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`Art ${index + 1}`}
                        className="max-h-[500px] md:max-h-[600px] w-auto object-contain rounded-2xl mx-auto block"
                      />
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <a
            href="https://wa.me/971558487022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 sm:mt-8 bg-ctaTeal hover:bg-ctaGold text-white text-base sm:text-lg font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-colors duration-300 shadow-xl animate-slideUp"
          >
            Book an Appointment
          </a>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
