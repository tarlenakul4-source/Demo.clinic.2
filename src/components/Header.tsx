import { useState, useEffect, MouseEvent } from "react";
import { useClinic } from "./ClinicContext";
import { Menu, X, Phone, HeartPulse, MessageSquare } from "lucide-react";

export function Header() {
  const { clinicInfo } = useClinic();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Doctor", href: "#doctor" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Clinic Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-100 group-hover:scale-105 transition-all duration-300">
              <HeartPulse className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="text-xl font-bold text-blue-950 tracking-tight block leading-none group-hover:text-blue-600 transition-colors">
                {clinicInfo.name}
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Premium Family Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-semibold text-slate-500 uppercase tracking-wider hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Call/WhatsApp Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="header-whatsapp"
              href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all duration-200 shadow-md shadow-emerald-100 hover:shadow-lg hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4 fill-white/10" />
              WhatsApp Us
            </a>
            <a
              id="header-call"
              href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 shadow-md shadow-blue-100 hover:shadow-lg hover:scale-[1.02]"
            >
              <Phone className="w-4 h-4 fill-white/10" />
              Call Clinic
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/50 text-slate-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay & Panel */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-slate-900/40 backdrop-blur-xs z-30 animate-fade-in">
          <div className="bg-white border-b border-slate-150 px-6 py-6 shadow-xl space-y-6 animate-slide-down">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-semibold uppercase tracking-wider text-slate-600 hover:text-blue-600 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="h-px bg-slate-100" />

            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <a
                id="mobile-header-whatsapp"
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-colors shadow-md shadow-emerald-50"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                id="mobile-header-call"
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-50"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
