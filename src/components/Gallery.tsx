import { useState } from "react";
import { DEFAULT_GALLERY } from "../data";
import { Plus, X, Image as ImageIcon, Sparkles } from "lucide-react";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<"all" | "clinic" | "equipment" | "staff">("all");
  const [lightboxImage, setLightboxImage] = useState<typeof DEFAULT_GALLERY[0] | null>(null);

  const categories = [
    { label: "All Photos", id: "all" },
    { label: "Clinic Environment", id: "clinic" },
    { label: "Medical Equipment", id: "equipment" },
    { label: "Our Staff", id: "staff" },
  ];

  const filteredItems = DEFAULT_GALLERY.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Clinic Photo Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            A Glimpse Inside Our Modern Facility
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Take a visual tour of our clean environment, advanced diagnostics suites, and dedicated medical team.
          </p>
          <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 max-w-md mx-auto bg-slate-50 p-1.5 rounded-2xl border border-slate-100/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex-1 min-w-[100px] text-center px-4.5 py-2 text-xs font-bold rounded-xl transition-all ${
                activeCategory === cat.id
                  ? "bg-sky-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-sky-600 hover:bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2.5rem overflow-hidden border border-slate-100/60 shadow-2xs hover:shadow-lg transition-all duration-350 cursor-pointer bg-slate-50 hover:-translate-y-1"
              style={{ borderRadius: "24px" }}
            >
              {/* Image box */}
              <div className="aspect-4/3 overflow-hidden bg-slate-200">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay info card */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5.5 text-white">
                <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold tracking-widest text-teal-300 uppercase block">
                    {item.category}
                  </span>
                  <h4 className="font-bold text-base tracking-tight">{item.title}</h4>
                  <p className="text-slate-200 text-xs font-sans leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-200">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          id="gallery-lightbox"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh] animate-scale-up"
          >
            {/* Left Column: Image */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[50vh] md:max-h-[80vh] object-contain"
              />
            </div>

            {/* Right Column: Copy Details */}
            <div className="w-full md:w-80 p-6 md:p-8 bg-white flex flex-col justify-between shrink-0 space-y-6">
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">
                  {lightboxImage.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 leading-tight">{lightboxImage.title}</h3>
                <p className="text-slate-600 text-sm font-sans leading-relaxed">{lightboxImage.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <p className="text-[10px] text-slate-400 font-medium">To visit our facility or speak with us:</p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="tel:1"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `tel:${DEFAULT_GALLERY[0] ? lightboxImage.category : ""}`; // let context handle it
                    }}
                    className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-xl transition-all text-center"
                  >
                    Call Clinic
                  </a>
                  <button
                    onClick={() => setLightboxImage(null)}
                    className="py-2 px-3 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
