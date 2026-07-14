import { useState } from "react";
import { useClinic } from "./ClinicContext";
import { motion, AnimatePresence } from "motion/react";
import { Settings, X, RotateCcw, Save, Sparkles, Check } from "lucide-react";

export function Customizer() {
  const { clinicInfo, updateClinicInfo, resetToDefault } = useClinic();
  const [isOpen, setIsOpen] = useState(false);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  const handleChange = (key: keyof typeof clinicInfo, value: string) => {
    updateClinicInfo({ [key]: value });
    setShowSavedFeedback(true);
    const timer = setTimeout(() => setShowSavedFeedback(false), 2000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* Floating Customize Toggle Button */}
      <button
        id="btn-customizer-toggle"
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-0 z-40 flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 text-white pl-4 pr-3 py-2.5 rounded-l-xl shadow-lg border border-r-0 border-sky-400 hover:scale-105 transition-all duration-200 group"
        title="Customize Clinic Info"
      >
        <Settings className="w-5 h-5 animate-spin-slow group-hover:rotate-45 transition-transform duration-500" />
        <span className="text-xs font-semibold uppercase tracking-wider hidden sm:inline">Customize Live</span>
      </button>

      {/* Sidebar Overlay & Content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="customizer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-xs"
            />

            {/* Panel */}
            <motion.div
              id="customizer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl border-l border-slate-100 flex flex-col h-full overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-sky-50 to-teal-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-base flex items-center gap-1.5">
                      Customize Info <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                    </h3>
                    <p className="text-xs text-slate-500">Live website updates</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                <div className="bg-sky-50/60 rounded-xl p-4 border border-sky-100/50">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modify the clinical variables below to instantly replace the clinical placeholders in the website with your actual details.
                  </p>
                </div>

                {/* Clinic Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">Clinic Name</label>
                  <input
                    type="text"
                    value={clinicInfo.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    placeholder="Enter Clinic Name"
                  />
                </div>

                {/* Doctor Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">Doctor Name</label>
                  <input
                    type="text"
                    value={clinicInfo.doctorName}
                    onChange={(e) => handleChange("doctorName", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    placeholder="Enter Doctor Name"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">Phone Number</label>
                  <input
                    type="text"
                    value={clinicInfo.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    placeholder="Enter Phone Number"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">WhatsApp Number</label>
                  <input
                    type="text"
                    value={clinicInfo.whatsapp}
                    onChange={(e) => handleChange("whatsapp", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    placeholder="Enter WhatsApp Number"
                  />
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">Clinic Address</label>
                  <textarea
                    rows={3}
                    value={clinicInfo.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all resize-none"
                    placeholder="Enter Clinic Address"
                  />
                </div>

                {/* Timings */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider block">Clinic Timings</label>
                  <input
                    type="text"
                    value={clinicInfo.timings}
                    onChange={(e) => handleChange("timings", e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
                    placeholder="Enter Clinic Timings"
                  />
                </div>
              </div>

              {/* Saved Indicator and Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
                <button
                  onClick={resetToDefault}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restore Defaults
                </button>

                <div className="flex-1 flex justify-end">
                  {showSavedFeedback ? (
                    <span className="flex items-center gap-1.5 text-teal-600 text-xs font-medium bg-teal-50 px-3 py-2 rounded-lg border border-teal-100 animate-fade-in">
                      <Check className="w-3.5 h-3.5" />
                      Saved & Applied
                    </span>
                  ) : (
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors shadow-sm"
                    >
                      Done Editing
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
