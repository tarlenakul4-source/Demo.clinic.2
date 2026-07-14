import { useClinic } from "./ClinicContext";
import { Phone, MessageSquare, ShieldCheck, Award, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { MouseEvent } from "react";
import heroImg from "../assets/images/clinic_hero_1784005613059.jpg";

export function Hero() {
  const { clinicInfo } = useClinic();

  const handleScrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 bg-radial from-slate-50 to-sky-50/50 overflow-hidden">
      {/* Absolute decorative medical grid shapes */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-emerald-100/40 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-2xs mx-auto lg:mx-0"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 fill-blue-600/10" />
              Comprehensive Clinical Care
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]"
              >
                Trusted Healthcare <br />
                <span className="text-blue-600">For Your Family.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-500 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
              >
                Welcome to {clinicInfo.name}. Our mission is to provide patient-focused care with a holistic, empathetic approach to your long-term health and well-being. Led by Dr. Elena Vance.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                id="hero-call-now"
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 rounded-2xl shadow-lg shadow-blue-100 cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-white/10" />
                Call Now
              </a>
              <a
                id="hero-chat-whatsapp"
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4.5 text-base font-bold text-white bg-emerald-500 hover:bg-emerald-600 hover:scale-[1.02] transition-all duration-200 rounded-2xl shadow-lg shadow-emerald-100"
              >
                <MessageSquare className="w-5 h-5 text-white fill-white/10" />
                WhatsApp
              </a>
            </motion.div>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0 text-left"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-600 font-bold text-sm">
                  <Award className="w-4 h-4" />
                  <span>15+ Years</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Doctor Experience</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-600 font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>100% Care</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Patient Satisfaction</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Sanitized</span>
                </div>
                <p className="text-xs text-slate-500 font-semibold">Clean Environment</p>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Graphic Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backglow design card */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-[2.5rem] opacity-30 blur-xl animate-pulse-slow" />
              
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-100 aspect-16/10 lg:aspect-square">
                <img
                  src={heroImg}
                  alt="Apex Family Clinic Reception Lobby"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Active Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce-slow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-slate-700">Doctor Consulting Today</span>
              </div>

              {/* Floating Quick Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white px-5 py-4 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3.5 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <HeartHandshake className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Quick Consultation</h4>
                  <p className="text-[11px] text-slate-500">Minimal waiting. Walk-ins & appointments welcome.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
