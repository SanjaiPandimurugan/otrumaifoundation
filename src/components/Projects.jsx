import { useState } from 'react';
import eventImage from '../assets/Screenshot 2025-04-30 205237.png';

const Projects = () => {
  const [activeAccordion, setActiveAccordion] = useState('accordion1');

  const toggleAccordion = (accordionId) => {
    setActiveAccordion(activeAccordion === accordionId ? null : accordionId);
  };

  const events = [
    {
      id: 'accordion1',
      title: 'Eminence 1.0 Collaboration',
      date: 'November 2023',
      description: 'A major collaboration with educational institutions to provide scholarships and mentoring to underprivileged students.',
    },
    {
      id: 'accordion2',
      title: 'World Bone and Joint Health Day',
      date: 'October 2023',
      description: 'In collaboration with The Aayul Foundation and Tambaram Medical Centre, a rally and health camp were organized to raise awareness about bone and joint health.',
    },
    {
      id: 'accordion3',
      title: 'Social Internship Programme',
      date: 'September 2023',
      description: 'A 3-month program engaging college students in community service and social development projects.',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">OUR IMPACTFUL EVENTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Events Accordion */}
          <div className="bg-primary-50 p-6 rounded-2xl shadow-md">
            {events.map((event) => (
              <div key={event.id} className="mb-4 border-b border-primary-200 pb-4 last:border-b-0 last:pb-0">
                <button
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleAccordion(event.id)}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-primary-700">{event.title}</h3>
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
                  <div className="mt-3 text-gray-600 pl-4 border-l-2 border-secondary-300">
                    <p className="text-primary-500 mb-2">{event.date}</p>
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img 
              src={eventImage} 
              alt="Otrumai Foundation Event" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 