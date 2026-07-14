import { useState } from "react";
import { useClinic } from "./ClinicContext";
import { DEFAULT_SERVICES } from "../data";
import { LucideIcon } from "./LucideIcon";
import { Search, Phone, MessageSquare, Sparkles } from "lucide-react";

export function Services() {
  const { clinicInfo } = useClinic();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "general" | "specialized" | "wellness">("all");

  const filterTabs = [
    { label: "All Services", id: "all" },
    { label: "General Care", id: "general" },
    { label: "Specialized Care", id: "specialized" },
    { label: "Wellness & Prevention", id: "wellness" },
  ];

  const filteredServices = DEFAULT_SERVICES.filter((srv) => {
    const matchesSearch =
      srv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      srv.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || srv.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            Clinic Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            Comprehensive Care Tailored For You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Explore our professional outpatient medical offerings. Tap any service to initiate a direct query with our front-desk.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-12 bg-slate-50 p-4 rounded-2xl border border-slate-100">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all shadow-2xs"
            />
          </div>

        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="flex flex-col justify-between bg-white border border-slate-100 rounded-2xl p-6.5 shadow-2xs hover:shadow-md hover:border-slate-200/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Icon Card */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-50 to-green-50/50 border border-blue-100/40 text-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:shadow-md transition-all duration-300">
                    <LucideIcon name={srv.iconName} className="w-5.5 h-5.5" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {srv.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight leading-tight pt-1">
                      {srv.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Inquiry CTAs (strictly WhatsApp or Call) */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    id={`srv-call-${srv.id}`}
                    href={`tel:${clinicInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 fill-blue-700/10" />
                    Call
                  </a>
                  <a
                    id={`srv-wa-${srv.id}`}
                    href={`https://wa.me/${clinicInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20${encodeURIComponent(srv.title)}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold text-green-700 bg-green-50 hover:bg-green-100 rounded-xl transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-green-600 fill-green-600/10" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 text-sm">No services match your search query or filter selection.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveTab("all");
              }}
              className="mt-3.5 text-xs font-bold text-blue-600 hover:underline"
            >
              Clear filters & search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
