import { useState, useEffect } from 'react';
import eventImage1 from '../assets/periodpride.jpg';
import eventImage2 from '../assets/cworkshop.jpg';
import eventImage3 from '../assets/volunteer1.jpg';
import eventImage4 from '../assets/volunteer2.jpg';
import eventImage5 from '../assets/education1.jpg';
import eventImage6 from '../assets/education2.jpg';
import eventImage7 from '../assets/environment1.jpg';
import eventImage8 from '../assets/environment2.jpg';
import pythonWorkshop from '../assets/workshop.jpg';

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState('accordion1');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const events = [
    {
      id: 'accordion1',
      title: 'Period Pride – Awareness Session',
      date: 'April 18th 2024',
      description: 'An educational initiative focused on menstrual health and hygiene, featuring expert insights and open conversations. The session aimed to break taboos, spread awareness, and empower participants with knowledge about menstrual cycles, common myths, and when to seek help.',
      images: [eventImage1],
      aspectRatio: 'portrait' // Special flag for portrait-oriented images like flyers
    },
    {
      id: 'accordion2',
      title: 'Python Programming Workshop',
      date: 'May 11th 2025',
      description: 'An online workshop focused on Python programming fundamentals. Conducted by Pradhosh KM, this workshop provides hands-on learning experience in Python programming. Designed for beginners, the session covers essential concepts and practical applications in a supportive environment.',
      images: [pythonWorkshop],
      aspectRatio: 'poster' // For poster-style images
    },
    {
      id: 'accordion3',
      title: 'Skill-Building Workshop – C Language',
      date: 'April 26th 2025',
      description: 'An interactive online workshop designed to introduce participants to the fundamentals of the C programming language. Led by keynote speaker Kavyadharshini S M, the session aimed to unlock the magic of C—where coding truly begins—offering practical knowledge to beginners at no cost',
      images: [eventImage2],
      aspectRatio: 'portrait'
    },
    {
      id: 'accordion4',
      title: 'Volunteer Drive – Food Donation Campaign',
      date: 'April 7th 2024',
      description: 'As part of our commitment to community welfare, volunteers from Otrumai Foundation organized food donation drives across multiple locations. Nutritious meals were distributed to residents of old age homes and underserved communities, spreading compassion and support to those in need. The initiative reflected our mission to serve with empathy and build a more caring society.',
      images: [eventImage3, eventImage4],
      aspectRatio: 'landscape'
    },
    {
      id: 'accordion5',
      title: 'Educational Events – Volunteer Project Showcase',
      date: 'April 12th 2025',
      description: 'Volunteers from the Otrumai Foundation organized a series of educational events where they showcased their innovative projects and talents. These events featured hands-on demonstrations and insightful presentations across various fields, including technology, sustainability, and social impact. Volunteers shared their expertise, inspiring attendees with practical knowledge and real-world applications. The initiative reflected our commitment to fostering creativity, collaboration, and knowledge-sharing within the community.',
      images: [eventImage5, eventImage6],
      aspectRatio: 'landscape'
    },
    {
      id: 'accordion6',
      title: 'Environmental Initiative – Beach Cleaning Drive',
      date: 'April 2nd 2025',
      description: 'Volunteers from Otrumai Foundation took part in a beach cleaning drive to promote a cleaner and healthier environment. The effort highlighted our commitment to sustainability and community-driven ecological care. Through such actions, we continue to advocate for sustainable living and environmental stewardship.',
      images: [eventImage7, eventImage8],
      aspectRatio: 'portrait'
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

  // Get image styling based on the aspect ratio
  const getImageContainerStyle = (isMobile = false) => {
    const { aspectRatio } = activeEvent;
    
    if (aspectRatio === 'portrait') {
      return isMobile 
        ? 'w-full max-w-[300px] h-auto aspect-[3/4]' 
        : 'w-full max-w-md h-auto aspect-[3/4]';
    } else if (aspectRatio === 'poster') {
      return isMobile 
        ? 'w-full max-w-[300px] h-auto aspect-[3/4]'
        : 'w-full max-w-md h-auto aspect-[3/4]';
    } else {
      return isMobile 
        ? 'w-full h-64 max-w-xs' 
        : 'w-full h-96 max-w-md';
    }
  };

  // Determine if the image needs a special display treatment
  const isSpecialImage = activeEvent.aspectRatio === 'portrait' || activeEvent.aspectRatio === 'poster';

  // Get proper CSS class for image content fitting
  const getImageFitClass = () => {
    if (isSpecialImage) {
      return 'object-contain bg-white';
    }
    return 'object-cover';
  };

  return (
    <section id="projects" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">OUR IMPACTFUL EVENTS</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
        </div>

        {/* Mobile Image - Shown above accordion on small screens */}
        <div className="md:hidden flex justify-center mb-6">
          <div className={`rounded-xl overflow-hidden shadow-md transition-all duration-300 relative ${getImageContainerStyle(true)} mx-auto`}>
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
                  className={`w-full h-full ${getImageFitClass()}`}
                />
                
                {/* Title and date overlay for all images */}
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-3 text-left">
                  <h3 className="text-white font-bold text-base">{activeEvent.title}</h3>
                  <p className="text-white/90 text-xs">{activeEvent.date}</p>
                </div>
              </div>
            ))}
            
            {/* Only show content overlay for non-special images */}
            {!isSpecialImage && (
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 pointer-events-none"></div>
            )}
            
            {/* Image Navigation Dots - Only show if there are multiple images */}
            {activeEvent.images.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
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
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Events Accordion */}
          <div className="bg-primary-50 p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md">
            {events.map((event) => (
              <div key={event.id} className="mb-3 md:mb-4 border-b border-primary-200 pb-3 md:pb-4 last:border-b-0 last:pb-0">
                <button
                  className={`flex justify-between items-center w-full text-left focus:outline-none transition-all duration-300 ${
                    activeAccordion === event.id ? 'bg-primary-100/50 p-2 rounded-lg' : ''
                  }`}
                  onClick={() => toggleAccordion(event.id)}
                >
                  <div>
                    <h3 className={`text-base md:text-xl font-semibold ${
                      activeAccordion === event.id ? 'text-primary-700' : 'text-primary-600'
                    }`}>{event.title}</h3>
                    {activeAccordion !== event.id && (
                      <p className="text-primary-500 text-sm">{event.date}</p>
                    )}
                  </div>
                  <span className={`transition-transform duration-300 flex-shrink-0 ml-2 ${activeAccordion === event.id ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {activeAccordion === event.id && (
                  <div className="mt-2 md:mt-3 text-gray-600 pl-3 md:pl-4 border-l-2 border-secondary-300 animate-fadeIn text-sm md:text-base">
                    <p className="text-primary-500 mb-1 md:mb-2">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Image - Hidden on small screens */}
          <div className="hidden md:flex justify-center">
            <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl relative ${getImageContainerStyle(false)} mx-auto`}>
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
                    className={`w-full h-full ${getImageFitClass()}`}
                  />
                  
                  {/* Title and date overlay for all images */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 text-left">
                    <h3 className="text-white font-bold text-lg">{activeEvent.title}</h3>
                    <p className="text-white/90 text-sm">{activeEvent.date}</p>
                  </div>
                </div>
              ))}
              
              {/* Only show content overlay for non-special images */}
              {!isSpecialImage && (
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 pointer-events-none"></div>
              )}
              
              {/* Image Navigation Dots - Only show if there are multiple images */}
              {activeEvent.images.length > 1 && (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 