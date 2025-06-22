// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-backgroundDark text-white pt-0 pb-4 sm:pb-8 md:pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-lg font-semibold mb-4">Connect With Yati Locs</h3>
          <a
            href="https://wa.me/971558487022"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#B85C38] font-bold text-lg py-4 px-8 rounded-full mt-2 hover:bg-[#F1E9DB] transition mb-10"
          >
            Book an Appointment
          </a>
  
          <div className="flex justify-center items-center gap-6 mb-12 text-center mx-auto max-w-xs">
            <a
              href="https://instagram.com/yatifirecutz"
              aria-label="Instagram"
              className="text-white hover:text-ctaGold transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/Instagram.png" alt="Instagram" className="w-10 h-10" />
            </a>
            <a
              href="https://tiktok.com/@yatifirecutz"
              aria-label="TikTok"
              className="text-white hover:text-ctaGold transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/TikTok.png" alt="TikTok" className="w-10 h-10" />
            </a>
            <a
              href="https://wa.me/971558487022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-ctaGold transition"
            >
              <img src="/icons/WhatsApp.png" alt="WhatsApp" className="w-10 h-10" />
            </a>
          </div>
  
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4">Get Your Free Locs Maintenance Guide</h2>
            <p className="text-sm text-white/80 mb-6">
              Sign up below and receive expert insights directly in your inbox — perfect for keeping your crown thriving.
            </p>
  
            <form className="space-y-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-4 rounded bg-white text-charcoal focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 rounded bg-white text-charcoal focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#2A9D8F] hover:bg-[#E9C46A] text-white font-bold text-lg py-4 px-8 rounded transition duration-300"
              >
                Get the Free Guide
              </button>
            </form>
          </div>
        </div>
  
        <p className="text-center text-sm mt-16 text-white/70">&copy; {new Date().getFullYear()} Yati Locs. All rights reserved.</p>
      </footer>
    );
  }