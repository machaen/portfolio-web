import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import ParticleBackground from './components/ui/ParticleBackground';

export default function Site() {
  return (
    <div className="bg-grid relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-content px-6">
        <Hero />
        <Timeline />
        <Skills />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
