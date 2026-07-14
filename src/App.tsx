/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClinicProvider } from "./components/ClinicContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Doctor } from "./components/Doctor";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { Customizer } from "./components/Customizer";

export default function App() {
  return (
    <ClinicProvider>
      <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white antialiased">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Doctor />
          <Services />
          <WhyChooseUs />
          <Gallery />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        
        <Footer />
        
        {/* Floating Triage Calls & Customization Panel */}
        <FloatingActions />
        <Customizer />
      </div>
    </ClinicProvider>
  );
}

