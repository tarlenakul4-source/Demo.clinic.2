import { DEFAULT_TESTIMONIALS } from "../data";
import { Star, MessageSquare, Quote, HeartHandshake, Sparkles } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-sky-50/50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Patient Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Hear From Our Recovered Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Nothing makes us happier than hearing stories of recovery and clinical satisfaction. Read reviews from our family clinic community.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
        </div>

        {/* Aggregate trust badge */}
        <div className="max-w-md mx-auto bg-gradient-to-r from-sky-50 to-teal-50/50 rounded-2xl p-4.5 mb-14 text-center border border-slate-100 flex items-center justify-center gap-3 shadow-2xs">
          <div className="flex items-center gap-0.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5.5 h-5.5 fill-amber-500" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-700">
            4.9 / 5.0 Star Rated (Based on 450+ patient surveys)
          </span>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {DEFAULT_TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="relative p-7 sm:p-8 bg-white border border-slate-100 rounded-3xl shadow-2xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Giant decorative Quote sign */}
              <div className="absolute top-6 right-6 text-slate-100 pointer-events-none">
                <Quote className="w-14 h-14 rotate-180 opacity-60 stroke-[1.5]" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic font-sans font-medium">
                  "{test.text}"
                </p>
              </div>

              {/* Patient Meta Block */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100/60 flex items-center justify-center text-sky-600 font-bold text-sm shrink-0 uppercase shadow-2xs">
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">{test.name}</h4>
                    <p className="text-[11px] text-teal-600 font-semibold">{test.relation}</p>
                  </div>
                </div>
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider bg-slate-50 px-2.5 py-1 rounded-md shrink-0 border border-slate-100">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick follow up badge */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500">
            Have you consulted with Dr. Chen recently? We would love to receive your valuable review!{" "}
            <a
              href="#contact"
              className="text-sky-600 font-semibold hover:underline flex inline-flex items-center gap-1.5"
            >
              Contact our nurse desk
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
