import { DEFAULT_WHY_CHOOSE_US } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Sparkles } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-gradient-to-b from-white to-blue-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            Why Choose Our Clinic
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            A Patient-First Experience At Every Touchpoint
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            We are dedicated to establishing a supportive environment that prioritizes your comfort, swift diagnostics, and precise clinical standards.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Features Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6.5 lg:gap-8">
          {DEFAULT_WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6.5 bg-white border border-slate-100 rounded-2xl shadow-2xs hover:shadow-md transition-all duration-300 hover:border-slate-200 group flex gap-4 items-start"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-600 rounded-l-2xl scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
              
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100/50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs">
                <LucideIcon name={item.iconName} className="w-5.5 h-5.5" />
              </div>

              {/* Text Description */}
              <div className="space-y-1.5 pt-0.5">
                <h3 className="font-bold text-slate-800 text-base group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
