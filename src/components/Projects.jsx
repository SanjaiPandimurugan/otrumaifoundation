import { useState, useEffect } from 'react';
import eventImage1 from '../assets/20250426_104353.jpg';
import eventImage2 from '../assets/20250426_105949.jpg';
import eventImage3 from '../assets/20250426_110431.jpg';
import eventImage4 from '../assets/20250426_112517.jpg';

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState('accordion1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const events = [
    {
      id: 'accordion1',
      title: 'Eminence 1.0 Collaboration',
      date: 'November 2023',
      description: 'A major collaboration with educational institutions to provide scholarships and mentoring to underprivileged students.',
      images: [eventImage1, eventImage4],
    },
    {
      id: 'accordion2',
      title: 'World Bone and Joint Health Day',
      date: 'October 2023',
      description: 'In collaboration with The Aayul Foundation and Tambaram Medical Centre, a rally and health camp were organized to raise awareness about bone and joint health.',
      images: [eventImage2, eventImage3],
    },
    {
      id: 'accordion3',
      title: 'Social Internship Programme',
      date: 'September 2023',
      description: 'A 3-month program engaging college students in community service and social development projects.',
      images: [eventImage3, eventImage1],
    },
    {
      id: 'accordion4',
      title: 'Children\'s Art & Creative Workshop',
      date: 'August 2023',
      description: 'A week-long creative workshop for children from marginalized communities, focusing on artistic expression, storytelling, and building confidence through creative activities.',
      images: [eventImage4, eventImage2],
    },
    {
      id: 'accordion5',
      title: 'Rural Health Initiative',
      date: 'July 2023',
      description: 'Mobile healthcare clinics that visited five remote villages, providing basic health screenings, vaccinations, and health education to over 500 residents with limited access to medical services.',
      images: [eventImage1, eventImage3],
    },
  ];

  // Find the active event
  const activeEvent = events.find(event => event.id === activeAccordion) || events[0];

  const toggleAccordion = (accordionId) => {
    // When manually selecting an accordion, pause the auto-rotation temporarily
    setAutoRotate(false);
    setActiveAccordion(accordionId);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setAutoRotate(true);
    }, 10000);
  };

  // Auto-rotate through events
  useEffect(() => {
    if (!autoRotate) return;

    const eventInterval = setInterval(() => {
      setActiveAccordion(prevId => {
        const currentIndex = events.findIndex(event => event.id === prevId);
        const nextIndex = (currentIndex + 1) % events.length;
        return events[nextIndex].id;
      });
    }, 3000);
    
    return () => clearInterval(eventInterval);
  }, [autoRotate, events]);

  // Auto-rotate images for the active event
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => 
        (prevIndex + 1) % activeEvent.images.length
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [activeEvent]);

  // Reset image index when active accordion changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeAccordion]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR IMPACTFUL EVENTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Events Accordion */}
          <div className="bg-primary-50 p-6 rounded-2xl shadow-md">
            {events.map((event) => (
              <div key={event.id} className="mb-4 border-b border-primary-200 pb-4 last:border-b-0 last:pb-0">
                <button
                  className={`flex justify-between items-center w-full text-left focus:outline-none transition-all duration-300 ${
                    activeAccordion === event.id ? 'bg-primary-100/50 p-2 rounded-lg' : ''
                  }`}
                  onClick={() => toggleAccordion(event.id)}
                >
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      activeAccordion === event.id ? 'text-primary-700' : 'text-primary-600'
                    }`}>{event.title}</h3>
                    {activeAccordion !== event.id && (
                      <p className="text-primary-500">{event.date}</p>
                    )}
                  </div>
                  <span className={`transition-transform duration-300 ${activeAccordion === event.id ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeAccordion === event.id && (
                  <div className="mt-3 text-gray-600 pl-4 border-l-2 border-secondary-300 animate-fadeIn">
                    <p className="text-primary-500 mb-2">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image with automatic rotation - Center aligned container */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl relative w-full h-96 max-w-md mx-auto">
              {activeEvent.images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${activeEvent.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 pointer-events-none"></div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {activeEvent.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Event title overlay */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                <h3 className="text-white font-bold text-lg">{activeEvent.title}</h3>
                <p className="text-white/90 text-sm">{activeEvent.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 