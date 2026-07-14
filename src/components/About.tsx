import { useClinic } from "./ClinicContext";
import { Heart, Activity, Award, ShieldAlert, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const { clinicInfo } = useClinic();

  const values = [
    {
      title: "Patient-First Care",
      desc: "Every clinical decision, therapy, and treatment plan is crafted around the specific comfort and health goals of the patient.",
      icon: Heart,
      colorClass: "bg-orange-50 text-orange-600 border-orange-100/50"
    },
    {
      title: "Clinical Excellence",
      desc: "Adhering to evidence-based healthcare standards, sterile protocols, and meticulous diagnostics for clinical accuracy.",
      icon: Award,
      colorClass: "bg-blue-50 text-blue-600 border-blue-100/50"
    },
    {
      title: "Compassionate Healing",
      desc: "Treating families with ultimate warmth, listening actively, and establishing supportive medical pathways.",
      icon: HeartHandshake,
      colorClass: "bg-green-50 text-green-600 border-green-100/50"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            About Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            Dedicated To Healing & Patient Wellness
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Text Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 leading-snug">
              Providing modern, compassionate healthcare solutions for patients of all ages at {clinicInfo.name}.
            </h3>
            <p className="text-slate-600 leading-relaxed font-sans">
              At {clinicInfo.name}, we believe healthcare is more than just prescription pads and treatments; it's about building long-term relationships based on mutual trust, pristine clinical hygiene, and genuine human empathy. Our medical staff focuses on preventative screening, early detection, and lifestyle wellness.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50/50 rounded-2xl p-6 border border-slate-100 space-y-3">
              <h4 className="font-bold text-blue-800 text-sm uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                Our Clinical Mission
              </h4>
              <p className="text-slate-700 text-sm italic leading-relaxed">
                "To deliver highly professional, comprehensive, and affordable outpatient medical care to families in our community, fostering a healthier tomorrow through clinical dedication, modern diagnostics, and patient-first values."
              </p>
            </div>
          </div>

          {/* Right Visual Core Values */}
          <div className="lg:col-span-6 space-y-5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Our Core Clinical Values</h4>
            
            <div className="space-y-4">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/40 hover:bg-white hover:shadow-md hover:border-slate-200/60 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${val.colorClass}`}>
                    <val.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-800 text-base">{val.title}</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
