import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import familiaImg from "@/assets/anel.jpeg";
import confetti from "canvas-confetti";
import { useToast } from "@/hooks/use-toast";

const ProposalSection = () => {
  const { toast } = useToast();

  const celebrateAcceptance = () => {
    // Show congratulatory toast
    toast({
      title: "🎉 Que alegria! 🎉",
      description: "Sabia que você diria sim! Nosso amor é realmente especial e agora é oficial! ❤️✨",
      duration: 5000,
    });

    // Multiple confetti bursts for extra celebration
    const duration = 3000;
    const end = Date.now() + duration;

    // Romantic colors - pink, red, gold
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ff6b9d', '#c44569'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    // Heart-shaped confetti burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2
      });
    }, 500);
  };

  const celebrateObviousChoice = () => {
    // Show playful toast
    toast({
      title: "😄 Óbvio que sim! 😄",
      description: "Haha, eu sabia que você não teria escolha! Afinal, somos perfeitos um para o outro! 💕",
      duration: 5000,
    });

    // Same confetti effect
    const duration = 3000;
    const end = Date.now() + duration;
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#ff6b9d', '#c44569'];

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors,
        shapes: ['circle'],
        scalar: 1.2
      });
    }, 500);
  };
  return (
    <section className="relative py-32 px-4 gradient-hero overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 border border-rose-medium rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border border-gold-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 border border-rose-soft rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Sparkles decoration */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Sparkles className="w-8 h-8 text-gold-light mr-4 animate-pulse" />
          <Heart className="w-12 h-12 text-rose-deep animate-pulse" fill="currentColor" />
          <Sparkles className="w-8 h-8 text-gold-light ml-4 animate-pulse" />
        </div>

        {/* Main proposal text */}
        <div className="mb-12 animate-slide-up">
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Quer Namorar
            <span className="block text-primary text-5xl md:text-7xl lg:text-8xl mt-4">
              Comigo?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Depois de todos esses momentos mágicos, de viver tantas aventuras juntos e compartilhar tantos sonhos...
          </p>
          
          <p className="text-2xl md:text-3xl font-serif text-foreground font-medium">
            Eu quero declarar mais uma vez o nosso amor! 💕
          </p>
        </div>

        {/* Special photo */}
        <div className="relative max-w-md mx-auto mb-12 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative overflow-hidden rounded-full shadow-glow">
            <img 
              src={familiaImg} 
              alt="Nosso momento especial" 
              className="w-full h-full object-cover transition-romantic hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/20 to-transparent"></div>
          </div>
          
          {/* Decorative rings around the photo */}
          <div className="absolute inset-0 border-4 border-rose-medium rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute inset-4 border-2 border-gold-light rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Call to action */}
        <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground italic">
            "Porque com você, cada dia é uma nova aventura e cada momento é um presente"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="romantic"
              size="lg" 
              className="font-semibold px-12 py-4 rounded-full text-lg"
              onClick={celebrateAcceptance}
            >
              SIM! Eu aceito! 💖
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-rose-deep text-rose-deep hover:bg-rose-soft px-8 py-4 rounded-full transition-romantic text-lg hover:scale-105"
              onClick={celebrateObviousChoice}
            >
              Claro que sim! 💖
            </Button>
          </div>
        </div>

        {/* Final romantic message */}
        <div className="mt-16 p-8 gradient-card rounded-3xl shadow-romantic animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <p className="font-serif text-xl md:text-2xl text-foreground font-medium leading-relaxed">
            "Nosso amor cresceu de uma forma tão especial, superou desafios e nos deu os momentos mais felizes das nossas vidas. 
            Agora eu quero que ele seja marcado por está data, eterno e celebrado por todos que nos amam."
          </p>
          <div className="flex justify-center mt-6">
            <Heart className="w-8 h-8 text-rose-deep" fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalSection;