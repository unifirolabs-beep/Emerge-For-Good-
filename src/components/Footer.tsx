import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-brand-warm-white border-t border-brand-light-neutral pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-brand-dark-navy/70 text-lg font-medium max-w-xs">
              Innovation Challenge 2026
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-center">
            <h4 className="text-xl font-bold text-brand-navy mb-2">EMERGE AURO</h4>
            <p className="text-brand-dark-navy/70 mb-1">Conscious capital conclave</p>
            <p className="text-brand-dark-navy/70">Puducherry & Auroville</p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-light-neutral/50 flex flex-col items-center gap-4">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-brand-dark-navy/50 font-medium text-center md:text-left">
              &copy; {new Date().getFullYear()} EMERGE FOR GOOD. An EMERGE AURO Initiative.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-brand-dark-navy/50 hover:text-brand-navy font-medium transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-brand-dark-navy/50 hover:text-brand-navy font-medium transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="text-sm text-brand-dark-navy/50 font-medium mt-2 md:mt-0 text-center">
            designed & developed <a href="https://www.unifirolabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-navy transition-colors underline underline-offset-2">unifirolabs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
