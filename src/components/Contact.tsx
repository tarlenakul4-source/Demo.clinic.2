import { useState, useEffect } from "react";
import { useClinic } from "./ClinicContext";
import { Phone, MessageSquare, MapPin, Clock, Calendar, Compass, ExternalLink, Sparkles, Navigation, Copy, Check } from "lucide-react";

export function Contact() {
  const { clinicInfo } = useClinic();
  const [copied, setCopied] = useState(false);
  const [clinicStatus, setClinicStatus] = useState({ isOpen: true, message: "Open Now" });

  useEffect(() => {
    // Determine dynamic open status based on current hours
    // Sunday: 9 AM - 2 PM, Sat: 8 AM - 8 PM
    const now = new Date();
    const day = now.getDay(); // 0 is Sun, 1-6 is Mon-Sat
    const hour = now.getHours();

    if (day === 0) {
      // Sunday
      if (hour >= 9 && hour < 14) {
        setClinicStatus({ isOpen: true, message: "Open Now (Closes at 2:00 PM)" });
      } else {
        setClinicStatus({ isOpen: false, message: "Closed (Opens Sun 9:00 AM)" });
      }
    } else {
      // Mon - Sat
      if (hour >= 8 && hour < 20) {
        setClinicStatus({ isOpen: true, message: "Open Now (Closes at 8:00 PM)" });
      } else {
        setClinicStatus({ isOpen: false, message: "Closed (Opens tomorrow 8:00 AM)" });
      }
    }
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(clinicInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getMapsUrl = () => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      clinicInfo.name + " " + clinicInfo.address
    )}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            Contact & Location
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            We Are Here To Assist You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Get directions, view clinic timings, or call/message our triage desk directly for quick outpatient guidance.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-10.5 items-stretch">
          
          {/* Left Column: Details Cards */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Dynamic Clinic Hours Header */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Clock className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Clinical Status</h4>
                    <p className="text-slate-500 text-xs font-sans mt-0.5">Real-time status updates</p>
                  </div>
                </div>
                <span
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${
                    clinicStatus.isOpen
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                      : "bg-rose-50 text-rose-700 border-rose-200"
                  }`}
                >
                  {clinicStatus.message}
                </span>
              </div>

              {/* Call Details Card */}
              <a
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="block p-5 bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl shadow-2xs hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Phone Call Hotline</h4>
                    <p className="text-slate-800 font-extrabold text-base tracking-tight">{clinicInfo.phone}</p>
                    <p className="text-slate-500 text-[11px] font-sans">Tap to start an instant call</p>
                  </div>
                </div>
              </a>

              {/* WhatsApp Details Card */}
              <a
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 bg-white hover:bg-slate-50 border border-slate-100 rounded-2xl shadow-2xs hover:shadow-xs transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">WhatsApp Desk</h4>
                    <p className="text-slate-800 font-extrabold text-base tracking-tight">{clinicInfo.whatsapp}</p>
                    <p className="text-slate-500 text-[11px] font-sans">Chat directly with clinical assistants</p>
                  </div>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-2xs flex gap-4 items-start relative">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1 pr-10">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Clinic Address</h4>
                  <p className="text-slate-700 font-semibold text-sm leading-relaxed">{clinicInfo.address}</p>
                  <p className="text-slate-400 text-[11px]">Located next to the Metro Transit Hub</p>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="absolute top-5 right-5 p-1.5 rounded-lg border border-slate-150 hover:bg-slate-50 text-slate-500 transition-colors"
                  title="Copy Address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Timings Card */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-2xs flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Consultation Hours</h4>
                  <p className="text-slate-700 font-semibold text-sm leading-relaxed whitespace-pre-line">{clinicInfo.timings}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Google Maps Widget */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm bg-blue-900/5 min-h-[350px] lg:h-full flex flex-col justify-between p-6 sm:p-8">
              
              {/* Premium abstract designed map grid */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

              {/* Mock Map graphical layout */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-blue-600 animate-spin-slow" />
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    Location Radar
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-none">Find {clinicInfo.name}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-md leading-relaxed">
                    Easily accessible with spacious parking facilities, wheel-chair ramp ingress, and close proximity to rapid-transit stops.
                  </p>
                </div>
              </div>

              {/* Stylized physical address compass marker card */}
              <div className="relative z-10 max-w-sm bg-white/95 backdrop-blur-md p-4.5 rounded-2xl border border-slate-100 shadow-md flex items-center gap-3.5 my-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-green-500 text-white flex items-center justify-center animate-pulse shadow-sm">
                  <MapPin className="w-5 h-5 fill-white/10" />
                </div>
                <div>
                  <h5 className="font-bold text-slate-800 text-xs leading-none">Your Destination</h5>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{clinicInfo.address}</p>
                </div>
              </div>

              {/* Action trigger footer */}
              <div className="relative z-10 pt-4 border-t border-slate-100/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Latitude / Longitude</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">34.0522° N, 118.2437° W (Medical Hub)</p>
                </div>
                <a
                  id="btn-navigate-maps"
                  href={getMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] active:scale-95 shadow-md transition-all duration-150 rounded-xl"
                >
                  <Navigation className="w-4 h-4 fill-white/10" />
                  Navigate via Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
