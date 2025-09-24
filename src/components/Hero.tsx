import { Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-rose-medium rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-24 h-24 border-2 border-gold-light rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-rose-soft rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heart icon */}
          <div className="mb-8 animate-fade-in">
            <Heart className="w-16 h-16 mx-auto text-rose-deep animate-pulse" fill="currentColor" />
          </div>

          {/* Main title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-slide-up">
            Nossa História
            <span className="block text-primary font-script text-4xl md:text-5xl lg:text-6xl mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              de Amor
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
            Uma jornada de momentos especiais, sorrisos compartilhados e um amor que cresceu de forma única e verdadeira
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rose-deep rounded-full">
          <div className="w-1 h-3 bg-rose-deep rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;