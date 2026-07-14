export interface ClinicInfo {
  name: string;
  doctorName: string;
  phone: string;
  whatsapp: string;
  address: string;
  timings: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "general" | "specialized" | "wellness";
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: "clinic" | "equipment" | "staff";
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  text: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
