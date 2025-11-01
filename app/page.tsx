import Footer from '@/src/components/layout/Footer';
import Header from '@/src/components/layout/Header';
import Hero from '@/src/components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header /> 
      <Hero />
      <Footer />
    </main>
  );
}
