export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full bg-[#0A0A0A] py-[80px] px-6 text-[#A1A1A1] border-t border-[var(--color-border)]"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-[13px] md:text-[14px] leading-relaxed">
          <p>&copy; {currentYear} Vinay Filmlab. All rights reserved.</p>
          <p className="mt-2 text-[12px] text-[#808080]">
            Premium photography portfolio by Vinay. Specializing in cinematic editorial and luxury commercial work.
          </p>
        </div>

        <nav className="flex items-center gap-6" aria-label="Social navigation">
          <a 
            href="https://instagram.com/vinay.filmlab" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center hover:text-white transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
            aria-label="Visit Vinay Filmlab on Instagram (opens in new window)"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a 
            href="mailto:vinayfilmlab@gmail.com"
            className="inline-flex items-center justify-center hover:text-white transition-colors duration-300 p-2 hover:bg-white/5 rounded-lg"
            aria-label="Send email to Vinay Filmlab"
            title="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
