import { ClinicInfo, ServiceItem, WhyChooseUsItem, GalleryItem, Testimonial, FAQItem } from "./types";

export const DEFAULT_CLINIC_INFO: ClinicInfo = {
  name: "Apex Family Clinic",
  doctorName: "Dr. Robert Chen",
  phone: "+1 (555) 234-5678",
  whatsapp: "+1 (555) 987-6543",
  address: "786 Medial Plaza Way, Suite 120, Westwood",
  timings: "Mon - Sat: 8:00 AM - 8:00 PM | Sun: 9:00 AM - 2:00 PM"
};

export const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    title: "General Consultation",
    description: "Comprehensive medical evaluations, physical exams, and personalized wellness plans for patients of all ages.",
    iconName: "ClipboardList",
    category: "general"
  },
  {
    id: "serv-2",
    title: "Fever Treatment",
    description: "Expert diagnosis and treatment for acute infectious fevers, flu, and seasonal viral illnesses with rapid recovery protocols.",
    iconName: "Activity",
    category: "general"
  },
  {
    id: "serv-3",
    title: "Diabetes Care",
    description: "Long-term management of Type 1 and Type 2 diabetes, blood sugar tracking, nutritional guidance, and complication prevention.",
    iconName: "Activity",
    category: "specialized"
  },
  {
    id: "serv-4",
    title: "Blood Pressure Management",
    description: "Continuous monitoring, medical management, and lifestyle modification strategies to maintain optimal hypertension control.",
    iconName: "HeartPulse",
    category: "specialized"
  },
  {
    id: "serv-5",
    title: "Child Care & Pediatrics",
    description: "Developmental tracking, pediatric illness management, growth monitoring, and compassionate care for infants, toddlers, and teens.",
    iconName: "Baby",
    category: "general"
  },
  {
    id: "serv-6",
    title: "Women's Health",
    description: "Gynecological screenings, prenatal consultation, hormone management, and customized health programs tailored for every life stage.",
    iconName: "Venus",
    category: "specialized"
  },
  {
    id: "serv-7",
    title: "Executive Health Checkups",
    description: "Preventative diagnostic profiles including kidney, liver, cholesterol, and cardiovascular risk assessment screening.",
    iconName: "Shield",
    category: "wellness"
  },
  {
    id: "serv-8",
    title: "Immunization & Vaccination",
    description: "Complete vaccination schedules for travel health, seasonal flu shots, pediatric immunizations, and booster vaccines.",
    iconName: "Stethoscope",
    category: "wellness"
  },
  {
    id: "serv-9",
    title: "Emergency Care (Outpatient)",
    description: "Immediate non-life-threatening urgent care, minor wound dressing, nebulization therapy, and acute illness stabilization.",
    iconName: "ShieldAlert",
    category: "general"
  },
  {
    id: "serv-10",
    title: "Telehealth Consultations",
    description: "Secure, remote video and audio doctor consultation services from the comfort and privacy of your home.",
    iconName: "MessageSquare",
    category: "wellness"
  }
];

export const DEFAULT_WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: "Experienced Doctor",
    description: "Under the clinical leadership of a trusted specialist with over 15 years of hospital and clinical experience.",
    iconName: "Award"
  },
  {
    title: "Modern Diagnostics",
    description: "Equipped with state-of-the-art diagnostic tools for highly precise, reliable, and swift laboratory screenings.",
    iconName: "Sliders"
  },
  {
    title: "Affordable Care",
    description: "Transparent pricing models, flexible packages, and accessible medical services without compromising on premium quality.",
    iconName: "Heart"
  },
  {
    title: "Friendly & Caring Staff",
    description: "A highly trained, compassionate medical and administrative team dedicated to patient comfort and stress-free service.",
    iconName: "Users"
  },
  {
    title: "Pristine Environment",
    description: "Strict hygiene control protocols, fully sanitized waiting lounges, and private treatment rooms for ultimate safety.",
    iconName: "Smile"
  },
  {
    title: "Streamlined Service",
    description: "Minimised waiting periods, digitized prescription management, and prompt patient turnaround times.",
    iconName: "Clock"
  }
];

export const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Reception Lounge",
    description: "Comfortable and sanitized waiting area with high-speed Wi-Fi and pleasant ambient styling.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    category: "clinic"
  },
  {
    id: "gal-2",
    title: "Consultation Suite",
    description: "Dr. Chen's main desk configured for private, relaxed clinical patient discussions.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    category: "clinic"
  },
  {
    id: "gal-3",
    title: "Advanced Medical Equipment",
    description: "Modern vitals stations, digital BP monitors, and accurate rapid blood analyzers.",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    category: "equipment"
  },
  {
    id: "gal-4",
    title: "Diagnostic Lab Area",
    description: "Highly sanitized in-house specimen screening area featuring strict quality assurance.",
    imageUrl: "https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=800&q=80",
    category: "equipment"
  },
  {
    id: "gal-5",
    title: "Pediatric Play Corner",
    description: "A warm, engaging space designed to keep child patients comfortable and happy.",
    imageUrl: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    category: "clinic"
  },
  {
    id: "gal-6",
    title: "Friendly Medical Team",
    description: "Our certified nurse practitioners and front office managers working with dedication.",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    category: "staff"
  }
];

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Arthur Pendelton",
    relation: "Diabetes Patient",
    text: "Dr. Chen has been monitoring my blood sugar for the last 2 years. His custom-tailored diet chart and scientific medication management lowered my HbA1c from 8.2 to 5.9. His patience is unmatched!",
    rating: 5,
    date: "June 2026"
  },
  {
    id: "test-2",
    name: "Melissa Vance",
    relation: "Mother of 4-year-old Toby",
    text: "Finding a clinic where children don't cry during doctor visits is extremely rare. The pediatric care here is incredibly warm and friendly. Toby actually enjoys visiting the medical checkup corner!",
    rating: 5,
    date: "May 2026"
  },
  {
    id: "test-3",
    name: "Marcus Aurelius Diaz",
    relation: "Corporate Health Checkup Patient",
    text: "Extremely streamlined service. I booked a health checkup package, got all blood draws and diagnostics finished in under an hour, and received a comprehensive digital report the next morning.",
    rating: 5,
    date: "July 2026"
  },
  {
    id: "test-4",
    name: "Prisha Patel",
    relation: "Hypertension Patient",
    text: "The clinical team is professional, friendly, and very detailed. They explained the mechanism of blood pressure medication clearly. The WhatsApp follow-up support is also a lifesaver.",
    rating: 5,
    date: "April 2026"
  }
];

export const DEFAULT_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do I need a prior appointment for consultations?",
    answer: "Walk-ins are always welcome! However, to minimize your waiting time, we highly recommend calling us or sending a WhatsApp message beforehand to confirm current clinic doctor availability."
  },
  {
    id: "faq-2",
    question: "How long does it take to get laboratory test results?",
    answer: "Most routine diagnostic results (such as complete blood counts, glucose screenings, and lipid profiles) are delivered digitally within 12 to 24 hours. Specialized screenings may require 48 to 72 hours."
  },
  {
    id: "faq-3",
    question: "Can I consult the doctor online via video call?",
    answer: "Yes, we offer comprehensive Telehealth consultation options for follow-ups, minor symptoms, and report reviews. You can ping us on WhatsApp to set up a secure remote video consult."
  },
  {
    id: "faq-4",
    question: "Do you offer vaccination packages for pediatric and travel purposes?",
    answer: "Absolutely. We stock a full inventory of pediatric vaccines, annual influenza shots, travel vaccinations, and adult boosters. Contact our nurse desk to receive our current vaccination catalog."
  },
  {
    id: "faq-5",
    question: "What should I do in case of a late-night emergency?",
    answer: "We provide outpatient clinical management during our listed hours. If you experience a severe life-threatening medical emergency after hours, please proceed directly to the nearest tertiary care hospital's trauma unit or call national emergency numbers."
  }
];
