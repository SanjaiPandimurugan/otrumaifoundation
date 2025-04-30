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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">FEEDBACK THAT FUELS OUR PASSION</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-primary-50 rounded-2xl p-10 shadow-lg">
          <div className="relative h-64">
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
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-2xl font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <blockquote className="text-center">
                    <p className="text-lg text-gray-700 mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <footer className="font-medium">
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">{testimonial.name}</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 