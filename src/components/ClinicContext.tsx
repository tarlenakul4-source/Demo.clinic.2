import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ClinicInfo } from "../types";
import { DEFAULT_CLINIC_INFO } from "../data";

interface ClinicContextType {
  clinicInfo: ClinicInfo;
  updateClinicInfo: (newInfo: Partial<ClinicInfo>) => void;
  resetToDefault: () => void;
}

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export function ClinicProvider({ children }: { children: ReactNode }) {
  const [clinicInfo, setClinicInfo] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem("apex_clinic_info");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Error reading clinic info from localStorage", e);
    }
    return DEFAULT_CLINIC_INFO;
  });

  useEffect(() => {
    try {
      localStorage.setItem("apex_clinic_info", JSON.stringify(clinicInfo));
    } catch (e) {
      console.error("Error writing clinic info to localStorage", e);
    }
  }, [clinicInfo]);

  const updateClinicInfo = (newInfo: Partial<ClinicInfo>) => {
    setClinicInfo((prev) => ({ ...prev, ...newInfo }));
  };

  const resetToDefault = () => {
    setClinicInfo(DEFAULT_CLINIC_INFO);
  };

  return (
    <ClinicContext.Provider value={{ clinicInfo, updateClinicInfo, resetToDefault }}>
      {children}
    </ClinicContext.Provider>
  );
}

export function useClinic() {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error("useClinic must be used within a ClinicProvider");
  }
  return context;
}
