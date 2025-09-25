import { useCallback, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import ProposalSection from "@/components/ProposalSection";

const Index = () => {

  const musicRef = useRef<HTMLIFrameElement>(null);
  const musicStarted = useRef(false);

  const startMusic = useCallback(() => {
    if (!musicStarted.current && musicRef.current) {
      musicStarted.current = true;
      const iframe = musicRef.current;
      iframe.src = "https://www.youtube.com/embed/r73ANL4ecnE?autoplay=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0";
    }
  }, []);
  useEffect(() => {
    // Update document title for SEO
    document.title = "Nossa História de Amor";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Um pedido de namoro especial contando nossa linda história de amor, família e momentos únicos juntos.');
    }
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Photo Gallery */}
      <PhotoGallery />
      
      {/* Proposal Section */}
      <ProposalSection />
      
      {/* Footer */}
      <footer className="gradient-card py-12 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <p className="font-serif text-lg text-muted-foreground mb-4">
            "A distância faz ao amor aquilo que o vento faz ao fogo: apaga o pequeno, inflama o grande." - Roger Bussy-Rabutin.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com muito amor, carinho e dedicação para a pessoa que me transformou em uma pessoa melhor, e faz isso todos os dias. 💕
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
