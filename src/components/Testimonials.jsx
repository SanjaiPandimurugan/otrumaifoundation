import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Divya Ravi",
      text: "The Otrumai Foundation stands out as one of the most dedicated and compassionate organizations I've come across. Being a part of this mission has been an incredibly rewarding experience. Hats off to the entire team for the amazing work they do, and I'm eager to see what more they'll achieve in the future."
    },
    {
      id: 2,
      name: "Santhosh Kumar",
      text: "I've volunteered with many organizations, but none compare to the genuine impact Otrumai Foundation creates. Their approach to community development is holistic and sustainable. The team works tirelessly to ensure every project makes a meaningful difference in people's lives."
    },
    {
      id: 3,
      name: "Priya Makhija",
      text: "As a donor to Otrumai Foundation for the past two years, I'm consistently impressed by their transparency and the tangible results they achieve. Every rupee donated is used efficiently to create maximum impact. Their regular updates keep me connected to the cause."
    },
    {
      id: 4,
      name: "Rajesh Sharma",
      text: "The healthcare camp organized by Otrumai Foundation in our village was life-changing for many families. Not only did they provide medical care, but they also educated us about preventive healthcare measures. Their commitment to community wellbeing is remarkable."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle swipe gestures for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - next testimonial
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right - previous testimonial
      setActiveIndex((current) => 
        current === 0 ? testimonials.length - 1 : current - 1
      );
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">FEEDBACK THAT FUELS OUR PASSION</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-primary-50 rounded-xl md:rounded-2xl p-5 md:p-10 shadow-lg">
          <div 
            className="relative min-h-[260px] md:h-64"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0' 
                    : index < activeIndex 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 md:mb-6">
                    <span className="text-white text-lg md:text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <blockquote className="text-center">
                    <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6 italic max-h-[160px] md:max-h-none overflow-y-auto px-2 md:px-0 scrollbar-thin">
                      "{testimonial.text}"
                    </p>
                    <footer className="font-medium">
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent text-sm md:text-base">{testimonial.name}</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 md:mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation arrows */}
          <div className="flex justify-between items-center mt-4 md:hidden px-2">
            <button 
              onClick={() => setActiveIndex(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1)}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => setActiveIndex(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1)}
              className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-primary-600 focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 