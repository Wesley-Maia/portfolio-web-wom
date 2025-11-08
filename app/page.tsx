import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';
import About from '@/src/components/sections/About';
import AutomationProjects from '@/src/components/sections/AutomationProjects';
import DataProjects from '@/src/components/sections/DataProjects';
import Hero from '@/src/components/sections/Hero';
import WebProjects from '@/src/components/sections/WebProjects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header /> 
      <Hero />
      <About />
      <WebProjects />
      <DataProjects />
      <AutomationProjects />
      <Footer />
    </main>
  );
}
