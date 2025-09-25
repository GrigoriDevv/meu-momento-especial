import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import PhotoGallery from "@/components/PhotoGallery";
import ProposalSection from "@/components/ProposalSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const musicRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Update document title for SEO
    document.title = "Nossa História de Amor";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Um pedido de namoro especial contando nossa linda história de amor, família e momentos únicos juntos.');
    }

    // Start background music after 5 seconds
    const musicTimer = setTimeout(() => {
      if (musicRef.current) {
        // Enable audio by changing src to trigger autoplay
        const iframe = musicRef.current;
        iframe.src = "https://www.youtube.com/embed/r73ANL4ecnE?autoplay=1&loop=1&playlist=r73ANL4ecnE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&start=0&end=0";
      }
    }, 5000);

    return () => clearTimeout(musicTimer);
  }, []);

  return (
    <main className="min-h-screen">
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
      
      {/* Toast notifications */}
      <Toaster />
    </main>
  );
};

export default Index;
