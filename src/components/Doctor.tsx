import { useClinic } from "./ClinicContext";
import { Award, GraduationCap, Heart, Stethoscope, Clock, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import { motion } from "motion/react";
import doctorImg from "../assets/images/doctor_portrait_1784005628471.jpg";

export function Doctor() {
  const { clinicInfo } = useClinic();

  const specializations = [
    "General Medicine & Consultations",
    "Fever & Viral Disease Management",
    "Diabetes & Metabolic Disorders",
    "Hypertension & Blood Pressure Care",
    "Pediatrics & Childhood Immunizations",
    "Preventative Wellness & Health Screening",
  ];

  const qualifications = [
    { degree: "M.D. in Internal Medicine", school: "Johns Hopkins University School of Medicine" },
    { degree: "M.B.B.S. (Bachelor of Medicine, Bachelor of Surgery)", school: "University of Health Sciences" },
    { degree: "Post Graduate Fellowship in Family Healthcare", school: "Academy of Family Physicians" },
  ];

  return (
    <section id="doctor" className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-blue-600" />
            Our Chief Medical Officer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            Meet Our Experienced Doctor
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Image & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto">
              {/* Backglow element */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500 via-emerald-400 to-green-500 rounded-[2rem] opacity-25 blur-lg" />
              
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-xl aspect-square bg-slate-100">
                <img
                  src={doctorImg}
                  alt={clinicInfo.doctorName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-955/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Years Experience Badge */}
              <div className="absolute -bottom-6 right-6 bg-white border border-slate-150 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  15+
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide">Years Experience</h4>
                  <p className="text-[10px] text-slate-500">Post-graduate clinical service</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -top-4 -left-4 bg-emerald-500 text-white px-4 py-1.5 rounded-full shadow-lg border border-emerald-400 flex items-center gap-1.5 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 fill-emerald-400/25" />
                Board Certified Specialist
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Qualifications, Specializations */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">{clinicInfo.doctorName}</h3>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                <Award className="w-4.5 h-4.5 text-blue-600" />
                Senior Consultant & Family Physician
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-sans pt-2">
                {clinicInfo.doctorName} is a compassionate family physician with extensive training in comprehensive general medicine. He specializes in preventative medicine, metabolic disorders, and children's health. He is highly praised by patients for taking the time to explain diagnoses clearly and building long-lasting treatment partnerships.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-4.5 h-4.5 text-blue-600" />
                Education & Credentials
              </h4>
              <div className="space-y-3.5">
                {qualifications.map((qual, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                      <span className="text-[9px] font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-800 text-sm leading-tight">{qual.degree}</h5>
                      <p className="text-slate-500 text-xs mt-0.5">{qual.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations Grid */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Heart className="w-4.5 h-4.5 text-emerald-500" />
                Clinical Specialization
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {specializations.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-white border border-slate-100 p-2.5 rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/10 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Contact Quick CTA */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-4">
              <a
                id="doc-chat-whatsapp"
                href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-colors shadow-md shadow-emerald-50"
              >
                <MessageSquare className="w-4 h-4" />
                Consult via WhatsApp
              </a>
              <a
                id="doc-call-now"
                href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Dr.'s Desk
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
