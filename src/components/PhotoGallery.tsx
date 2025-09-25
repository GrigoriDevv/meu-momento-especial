import { useState } from "react";
import { X } from "lucide-react";
import intimidadeImg from "@/assets/intimidade.jpeg";
import noiteImg from "@/assets/noite.jpeg";
import casualImg from "@/assets/casual.jpeg";
import casalImg from "@/assets/casal.jpeg";
import sorrisoImg from "@/assets/sorriso.jpeg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: noiteImg,
      title: "Momentos juntos",
      description: "Sorrisos mais sinceros, que iluminam até as noites mais escuras"
    },
    {
      src: casualImg,
      title: "Nosso Dia a Dia",
      description: "A beleza está nos momentos mais simples com você"
    },
    {
      src: sorrisoImg,
      title: "Sorrisos Sinceros",
      description: "Quando os corações estão felizes, os sorrisos são impossivelmente contidos"
    },
    {
      src: intimidadeImg,
      title: "Momentos Íntimos",
      description: "A cumplicidade e confidência que só o amor verdadeiro traz"
    },
    {
      src: casalImg,
      title: "Juntos Sempre",
      description: "De mãos dadas, enfrentamos tudo juntos, sendo maiores que tudo."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-romantic">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Momentos Especiais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada foto conta uma história, cada sorriso guarda uma memória preciosa
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index} 
              className="group cursor-pointer animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-card transition-romantic hover:shadow-romantic">
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-80 object-cover transition-romantic group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-romantic">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl font-bold text-white mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {photo.description}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 gradient-card rounded-full opacity-0 group-hover:opacity-80 transition-romantic"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gold-light rounded-full opacity-0 group-hover:opacity-70 transition-romantic"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Enlarged photo"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-glow"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-romantic"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;