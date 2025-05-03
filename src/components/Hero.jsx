import { useState, useEffect } from 'react';
import heroImage1 from '../assets/hero1.jpg';
import heroImage2 from '../assets/hero2.jpg';
import heroImage3 from '../assets/hero3.jpg';
import qrCode from '../assets/scanqr.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDonateOverlay, setShowDonateOverlay] = useState(false);
  
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

  const toggleDonateOverlay = (e) => {
    e.preventDefault();
    setShowDonateOverlay(!showDonateOverlay);
  };

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
          <button 
            onClick={toggleDonateOverlay} 
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-medium text-lg hover:bg-primary-100 transition-colors"
          >
            DONATE NOW
          </button>
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

      {/* Donate Overlay - styled like the image */}
      {showDonateOverlay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={toggleDonateOverlay}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full relative" onClick={(e) => e.stopPropagation()}>
            {/* Close button with X symbol in the corner */}
            <button 
              onClick={toggleDonateOverlay}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close donation popup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Heading */}
            <h3 className="text-xl font-bold text-primary-600 mb-4 text-center">DONATE NOW</h3>
            
            {/* QR Code in a light mint green background */}
            <div className="bg-green-50 p-5 rounded-lg mb-4">
              <img 
                src={qrCode} 
                alt="Donation QR Code" 
                className="w-36 h-36 object-contain mx-auto"
              />
            </div>
            
            {/* Text below QR code */}
            <p className="text-center text-gray-700 text-sm mb-3">Scan to donate via Google Pay</p>
            
            {/* Payment method icons */}
            <div className="flex justify-center space-x-4 mb-4">
              <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="PayTM" className="h-5" />
              <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" alt="Google Pay" className="h-5" />
              <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" alt="UPI" className="h-5" />
            </div>

            {/* Direct GPay Payment Button */}
            <a href="upi://pay?pa=pavithra1958b@okhdfcbank&pn=pavithra%20P&cu=INR" className="block w-full">
              <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-md transition-all">
                Pay with GPay
              </button>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 