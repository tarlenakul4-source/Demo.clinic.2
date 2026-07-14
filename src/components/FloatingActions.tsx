import { useClinic } from "./ClinicContext";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function FloatingActions() {
  const { clinicInfo } = useClinic();

  const formattedPhone = clinicInfo.phone.replace(/[^0-9+]/g, "");
  const formattedWhatsapp = clinicInfo.whatsapp.replace(/[^0-9]/g, "");

  return (
    <>
      {/* Floating Call Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 group flex items-center gap-2">
        <a
          id="floating-call-btn"
          href={`tel:${formattedPhone}`}
          className="w-14 h-14 bg-sky-600 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white hover:bg-sky-700 hover:scale-110 active:scale-95 transition-all duration-300 relative"
          title="Call Clinic Desk"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-sky-600/35 animate-ping opacity-60" />
          <Phone className="w-6 h-6 fill-white/10" />
        </a>
        <div className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          Call Clinic: {clinicInfo.phone}
        </div>
      </div>

      {/* Floating WhatsApp Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 group flex flex-row-reverse items-center gap-2">
        <a
          id="floating-whatsapp-btn"
          href={`https://wa.me/${formattedWhatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-teal-500 text-white rounded-full flex items-center justify-center shadow-2xl border-2 border-white hover:bg-teal-600 hover:scale-110 active:scale-95 transition-all duration-300 relative"
          title="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-teal-500/35 animate-ping opacity-60" />
          <MessageSquare className="w-6 h-6 fill-white/10" />
        </a>
        <div className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 pointer-events-none opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
          WhatsApp Desk: {clinicInfo.whatsapp}
        </div>
      </div>
    </>
  );
}
