import { useState, useEffect } from 'react';
import image1 from '../assets/20250426_104353.jpg';
import image2 from '../assets/20250426_105949.jpg';
import image3 from '../assets/20250426_110431.jpg';
import image4 from '../assets/20250426_112517.jpg';

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Enhanced gallery images with event details
  const galleryImages = [
    { 
      src: image1, 
      alt: "Volunteers working with community members",
      title: "Education Outreach Program",
      date: "April 26, 2025",
      description: "Our volunteers conducted educational workshops for underprivileged children, focusing on basic literacy and mathematics skills.",
      participants: ["Sanjay Kumar", "Priya Sharma", "Arjun Reddy", "Meera Patel"]
    },
    { 
      src: image2, 
      alt: "Distributing supplies to those in need",
      title: "Medical Supply Distribution",
      date: "April 26, 2025",
      description: "Distribution of essential medical supplies to rural communities with limited access to healthcare facilities.",
      participants: ["Dr. Ravi Mehta", "Aisha Khan", "Vikram Singh", "Leela Nair"]
    },
    { 
      src: image3, 
      alt: "Healthcare support services",
      title: "Community Health Camp",
      date: "April 26, 2025",
      description: "Free health check-ups and consultations provided to over 200 individuals in underserved communities.",
      participants: ["Dr. Sunita Reddy", "Karthik Iyer", "Divya Menon", "Rajiv Bose"]
    },
    { 
      src: image4, 
      alt: "Education programs for children",
      title: "Art Therapy Workshop",
      date: "April 26, 2025",
      description: "Art therapy sessions designed to help children express themselves and develop creative skills.",
      participants: ["Anita Desai", "Rohan Sharma", "Neha Gupta", "Vishal Malhotra"]
    },
    { 
      src: image1, 
      alt: "Community outreach programs",
      title: "Community Awareness Drive",
      date: "April 26, 2025",
      description: "Awareness campaign addressing local environmental issues and sustainable practices.",
      participants: ["Mohan Krishnan", "Leela Nair", "Suresh Patel", "Ananya Mehta"]
    },
    { 
      src: image2, 
      alt: "Food distribution event",
      title: "Food Relief Program",
      date: "April 26, 2025",
      description: "Distribution of food packages to families affected by economic hardship.",
      participants: ["Kiran Sharma", "Aditi Roy", "Raj Kumar", "Fathima Begum"]
    },
    { 
      src: image3, 
      alt: "Medical camp",
      title: "Vision Care Initiative",
      date: "April 26, 2025", 
      description: "Free eye examinations and distribution of prescription glasses to school children.",
      participants: ["Dr. Anil Kapoor", "Sameera Khan", "Vihaan Mehta", "Deepika Nair"]
    },
    { 
      src: image4, 
      alt: "Educational workshop",
      title: "Career Guidance Seminar",
      date: "April 26, 2025",
      description: "Career counseling and skill development workshop for high school students.",
      participants: ["Prof. Srinivas Rao", "Jaya Lakshmi", "Rahul Kapoor", "Maya Iyer"]
    },
    { 
      src: image1, 
      alt: "Volunteer training session",
      title: "Volunteer Training Workshop",
      date: "April 26, 2025",
      description: "Training session to prepare new volunteers for community service projects.",
      participants: ["Amit Verma", "Sarita Pillai", "Naveen Kumar", "Divya Sharma"]
    }
  ];

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
      setIsScrollLocked(true);
    } else if (isScrollLocked) {
      document.body.style.overflow = '';
      setIsScrollLocked(false);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedEvent, isScrollLocked]);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Gallery</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3 md:mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 md:mt-6 text-sm md:text-base">
            Explore our work through these images that capture our dedication to empowering communities and creating lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer"
              onClick={() => openEventDetails(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-secondary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-3 md:p-4 w-full">
                  <h3 className="text-white font-bold text-sm md:text-base">{image.title}</h3>
                  <p className="text-white text-xs md:text-sm opacity-90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="#contact" 
            className="inline-block px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 text-sm md:text-base"
          >
            Get Involved
          </a>
        </div>
      </div>

      {/* Event Details Popup */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 overflow-y-auto"
          onClick={closeEventDetails}
        >
          <div 
            className="bg-white rounded-lg shadow-xl w-full max-w-xs md:max-w-2xl overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative">
              <img 
                src={selectedEvent.src} 
                alt={selectedEvent.alt} 
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 md:p-6">
                <h2 className="text-white text-xl md:text-2xl font-bold">{selectedEvent.title}</h2>
                <p className="text-white/90 text-xs md:text-sm">{selectedEvent.date}</p>
              </div>
              <button 
                className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/20 hover:bg-white/40 rounded-full p-1.5 text-white"
                onClick={closeEventDetails}
                aria-label="Close popup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            {/* Content */}
            <div className="p-4 md:p-6">
              <p className="text-gray-700 mb-4 md:mb-5 text-sm md:text-base">{selectedEvent.description}</p>
              
              <h3 className="font-bold text-primary-600 mb-2 text-sm md:text-base">Participants</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
                {selectedEvent.participants.map((participant, idx) => (
                  <span 
                    key={idx} 
                    className="bg-primary-100 text-primary-700 text-xs md:text-sm px-2 md:px-3 py-1 rounded-full"
                  >
                    {participant}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="border-t border-gray-200 p-3 md:p-4 bg-gray-50 flex justify-end">
              <button 
                className="px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg hover:shadow-md transition-all duration-200 text-sm md:text-base"
                onClick={closeEventDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 