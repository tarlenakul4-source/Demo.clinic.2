import { useClinic } from "./ClinicContext";
import { HeartPulse, Phone, MessageSquare, MapPin, ChevronUp } from "lucide-react";
import { MouseEvent } from "react";

export function Footer() {
  const { clinicInfo } = useClinic();

  const handleScrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10.5 pb-12 border-b border-slate-800">
          
          {/* Column 1: Clinic Brand */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-2.5 text-white group w-fit"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-900/30">
                <HeartPulse className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight block leading-none">
                  {clinicInfo.name}
                </span>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Trusted Clinical Wellness
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
              Providing modern outpatient diagnostic evaluations, pediatric immunizations, metabolic condition control, and compassionate family healthcare options.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-blue-400 transition-colors py-1">About Us</a>
              <a href="#doctor" onClick={(e) => handleLinkClick(e, "#doctor")} className="hover:text-blue-400 transition-colors py-1">Our Doctor</a>
              <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="hover:text-blue-400 transition-colors py-1">Services</a>
              <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-blue-400 transition-colors py-1">Gallery</a>
              <a href="#testimonials" onClick={(e) => handleLinkClick(e, "#testimonials")} className="hover:text-blue-400 transition-colors py-1">Reviews</a>
              <a href="#faqs" onClick={(e) => handleLinkClick(e, "#faqs")} className="hover:text-blue-400 transition-colors py-1">FAQs</a>
            </div>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="md:col-span-4 space-y-4 text-xs">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Triage Desk Details</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Call Hotline: {clinicInfo.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {clinicInfo.whatsapp}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{clinicInfo.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal and Disclaimers */}
        <div className="pt-8 space-y-6 text-[11px] text-slate-500 font-sans leading-relaxed">
          <p className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
            <strong>Medical Triage Disclaimer:</strong> All medical summaries, FAQ resources, and clinical information published on this website are structured exclusively for educational and outpatient consultation queries. This website does not compile electronic health records, handle clinical emergency trauma services, or offer prescription diagnostics online. In case of acute chest pain, major physical injuries, severe sudden allergic shock, or other critical life-threatening conditions, please contact national emergency services immediately or report directly to the nearest hospital emergency room.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>© {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.</p>
            
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors hover:shadow-md"
              title="Scroll to Top"
            >
              <span className="text-[10px] font-bold uppercase">Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
