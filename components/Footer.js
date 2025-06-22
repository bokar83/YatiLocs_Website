// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-[#B85C38] text-white pt-0 pb-4 sm:pb-8 md:pb-12 px-6">
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
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-ctaGold transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.5.2.9.5 1.3 1 .4.4.8.8 1 1.3.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.5-.5.9-1 1.3-.4.4-.8.8-1.3 1-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.5-.2-.9-.5-1.3-1-.4-.4-.8-.8-1-1.3-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.5.5-.9 1-1.3.4-.4.8-.8 1.3-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white hover:text-ctaGold transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                <path d="M12.3 2c2 .2 3.8.3 5.2 1.3v2.2c-1.5-.7-3-1.1-5-1.2v8.5c0 2.7-1.3 4.1-3.4 4.1-2 0-3.5-1.4-3.5-3.4 0-2.1 1.4-3.6 3.5-3.6.3 0 .7 0 1 .1v-2.6c-.3 0-.7-.1-1-.1-3.4 0-5.9 2.4-5.9 6.2 0 3.7 2.5 6.1 5.7 6.1 3.3 0 5.8-2.3 5.8-6.2V2h-2.4z" />
              </svg>
            </a>
            <a
              href="https://wa.me/971558487022"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white hover:text-ctaGold transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
                <path d="M17.5 14.4c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.1-.3.2-.5s0-.4 0-.6c0-.2-.7-1.7-1-2.3-.3-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3s-.9.9-.9 2.2.9 2.5 1 2.7c.1.2 1.8 3.4 4.4 4.7 2.6 1.3 2.6.9 3.1.8.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" />
              </svg>
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