import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Writing } from '@/components/Writing';
import { Certifications } from '@/components/Certifications';
import { Testimonials } from '@/components/Testimonials';
import { Education } from '@/components/Education';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Certifications />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
