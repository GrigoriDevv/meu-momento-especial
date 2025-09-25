import { useCallback, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import ProposalSection from "@/components/ProposalSection";

const Index = () => {

   const musicStarted = useRef(false);
   const musicRef = useRef<HTMLIFrameElement>(null);
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
      metaDescription.setAttribute('content', 'Um pedido de namoro especial contando nossa linda história de amor e momentos únicos juntos.');
    }

    // Try to start music after 5 seconds
    const musicTimer = setTimeout(startMusic, 5000);

    // Also try to start music on first user interaction
    const handleInteraction = () => {
      startMusic();
      
      document.addEventListener('scroll', handleInteraction);
      document.addEventListener('keydown', handleInteraction);
    };

    return () => {
      clearTimeout(musicTimer);
     
    };
  }, [startMusic]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
       {/* Hidden YouTube music player */}
      <iframe
        ref={musicRef}
        width="0"
        height="0"
        style={{ opacity: 0, position: 'absolute', left: '-9999px' }}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Background Music"
      />
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
