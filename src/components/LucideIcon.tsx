import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function LucideIcon({ name, className = "", size = 24 }: LucideIconProps) {
  // Safe lookup for the icon component
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a fallback activity icon if the specific one is missing
    return <Icons.Activity className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
