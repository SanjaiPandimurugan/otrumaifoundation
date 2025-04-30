import { useState, useEffect } from 'react';
import heroImage1 from '../assets/Screenshot 2025-04-30 205031.png';
import heroImage2 from '../assets/Screenshot 2025-04-30 205154.png';
import heroImage3 from '../assets/Screenshot 2025-04-30 205203.png';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { src: heroImage1, alt: "Volunteers helping communities" },
    { src: heroImage2, alt: "Community outreach programs" },
    { src: heroImage3, alt: "Distributing supplies to those in need" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section id="home" className="relative h-screen pt-10">
      {/* Background Image with Overlay - Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/80 to-secondary-600/80"></div>
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            IGNITING HOPE,<br />
            BUILDING<br />
            TOMORROW
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white">
            Otrumai Foundation is dedicated to empowering marginalized communities 
            through education, healthcare, and sustainable development.
          </p>
          <p className="text-lg md:text-xl mb-10 text-white">
            JOIN US IN CREATING A BRIGHTER FUTURE.
          </p>
          <a 
            href="#donate" 
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-primary-100 transition-colors"
          >
            DONATE NOW
          </a>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 