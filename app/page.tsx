import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      {/* Sections will be added one per session as they pass DoD */}
    </main>
  );
}
