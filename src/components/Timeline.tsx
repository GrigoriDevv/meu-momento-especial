import { Calendar, Heart, Baby } from "lucide-react";
import casalImg from "@/assets/casal.jpeg";
import intimidadeImg from "@/assets/intimidade.jpeg";

const Timeline = () => {
  const timelineItems = [
    {
      icon: Heart,
      title: "Nossos Primeiros Momentos",
      description: "Quando tudo começou... aqueles primeiros olhares, sorrisos tímidos e a certeza de que algo especial estava nascendo entre nós.",
      image: casalImg,
      date: "O Início"
    },
    {
      icon: Heart,
      title: "Momentos Íntimos",
      description: "Aprendendo a ser nós dois, criando nossa própria linguagem do amor, descobrindo que cada dia juntos era melhor que o anterior.",
      image: intimidadeImg,
      date: "Crescendo Juntos"
    },
    {
      icon: Baby,
      title: "Nossa Família Cresceu",
      description: "E então veio a maior benção das nossas vidas. Nossa família se completou e nosso amor se multiplicou de uma forma que nunca imaginamos ser possível.",
      image: casalImg,
      date: "Família Completa"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Jornada
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada momento foi especial, cada sorriso construiu nossa história, cada abraço fortaleceu nosso amor
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-medium via-primary to-gold-light hidden lg:block"></div>

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-16 lg:mb-24">
              <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="gradient-card p-8 rounded-3xl shadow-card animate-slide-up" style={{ animationDelay: `${index * 0.3}s` }}>
                    {/* Icon and date */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center shadow-glow mr-4">
                        <item.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-semibold text-primary bg-rose-soft px-3 py-1 rounded-full">
                        {item.date}
                      </span>
                    </div>

                    {/* Title and description */}
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className={`lg:w-1/2 mt-8 lg:mt-0 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                  <div className="relative animate-scale-in" style={{ animationDelay: `${index * 0.3 + 0.2}s` }}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-romantic transition-romantic hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 gradient-hero rounded-full shadow-glow border-4 border-background hidden lg:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;