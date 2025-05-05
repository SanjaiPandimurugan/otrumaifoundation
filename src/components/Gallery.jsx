import { useState, useEffect } from 'react';
import image1 from '../assets/gallery1.jpg';
import image2 from '../assets/gallery2.jpg';
import image3 from '../assets/gallery3.jpg';
import image4 from '../assets/gallery4.jpg';
import image5 from '../assets/gallery5.jpg';
import image6 from '../assets/gallery6.jpg';
import image7 from '../assets/gallery7.jpg';
import image8 from '../assets/gallery8.jpg';

const Gallery = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  // Enhanced gallery images with event details
  const galleryImages = [
    { 
      src: image1, 
      alt: "World Health Day – Food Distribution Drive ",
      title: "World Health Day – Food Distribution Drive ",
      date: "7th April 2024",
      description: "Everybody can be great, because everybody can serve. Embracing this spirit, Otrumai Foundation marked its first contribution on World Health Day by distributing 100 food packets to those in need around Tambaram. This small act of kindness brought immense joy—not just to the recipients, but to every volunteer who witnessed their smiles and heartfelt blessings. At Otrumai, we believe that no one should go hungry. Our mission is to serve the underserved and spread hope through meaningful action. Together, let's feed the hungry and create a world rooted in empathy and unity." 
    },
    { 
      src: image5, 
      alt: "Distributing supplies to those in need",
      title: "Children's Home Visit",
      date: "16th June 2024",
      description: "As part of our commitment to nurturing young minds, Otrumai Foundation volunteers visited a children's home, creating a joyful space filled with creativity and encouragement. A variety of engaging activities were organized, allowing the children to express themselves and showcase their unique talents. From art and dance to storytelling and more, each child shone in their own beautiful way. The day was a celebration of individuality, potential, and the joy of being seen and heard. It reminded us that with love, support, and opportunity, every child can thrive and inspire."
    },
    { 
      src: image3, 
      alt: "Old Age Home Visit",
      title: "Old Age Home Visit",
      date: "19th August 2024",
      description: "Otrumai Foundation volunteers visited an old age home, spending quality time with the senior residents through heartfelt conversations and meaningful interaction. As a small gesture of care, we distributed notebooks and pens, encouraging them to write, reflect, or simply engage in creative expression. The visit was a reminder of the wisdom, stories, and warmth our elders hold—and the joy that comes from simply being present with them."
    },
    { 
      src: image4, 
      alt: "Blanket & Clothes ",
      title: "Blanket & Clothes Donation Drive – Spreading Warmth During Crisis 2024",
      date: "27th October 2024",
      description: "In times of hardship, even the smallest act of kindness can bring immense comfort. During a recent crisis, Otrumai Foundation volunteers came together in solidarity to support individuals living without shelter. Understanding the urgent need, we distributed blankets and clothes nearly 50+ blankets and cloths to help them stay warm and protected. This drive was not just about material aid—it was about restoring dignity, offering hope, and standing with those who are often overlooked. Through compassion and collective effort, we aimed to bring a little warmth to those facing the coldest nights. Together, we serve. Together, we care."
    },
    { 
      src: image2, 
      alt: "Community outreach programs",
      title: "Food Donation Drive ",
      date: "3rd November 2024",
      description: "In a world where many still struggle to afford even a single meal, Otrumai Foundation took a heartfelt step toward change. With the vision to combat poverty and hunger, our dedicated volunteers distributed nutritious food to those who cannot afford three meals a day. This initiative wasn't just about feeding the hungry—it was a call to action, a reminder that no one deserves to go to bed hungry. Every meal served carried a message of hope, dignity, and solidarity. At Otrumai, we believe in a future where basic needs aren't a privilege but a right. Let's stand together to feed lives and fight hunger."
    },
    { 
      src: image6, 
      alt: "Christmas Celebration Drive",
      title: "Christmas Celebration Drive",
      date: "25th December 2024)", 
      description: "Otrumai Foundation embraced the spirit of Christmas by celebrating the festival of joy with the public, turning the day into a beautiful memory of shared happiness and unity. Volunteers came together to distribute chocolates, small gifts, and festive cheer, lighting up faces young and old alike. The celebration ended with a joyful cake-cutting ceremony that brought everyone closer in the warmth of the season. This initiative was more than a celebration—it was about spreading love, kindness, and a sense of belonging to those who need it most. Because joy grows when shared—and Christmas is the perfect time to give from the heart."
    },
    { 
      src: image7, 
      alt: "Beach Cleaning Drive – A Step Toward a Greener Tomorrow ",
      title: "Beach Cleaning Drive – A Step Toward a Greener Tomorrow",
      date: " 2nd April 2025",
      description: "Career counseling and skill development workshop for high school students.Volunteers from Otrumai Foundation joined hands to clean the beach, removing waste and restoring its natural beauty. This drive aimed to raise awareness about pollution and its impact on marine life. The event reflected our commitment to sustainability and community-driven environmental care. Each act of cleanup was a step toward a healthier, greener planet. Let's protect our earth—because change begins with us. "
    },
    { 
      src: image8, 
      alt: "Children's Home Visit Drive ",
      title: "Children's Home Visit Drive ",
      date: "27th April 2025",
      description: "Otrumai Foundation recently visited a children's home, where we organized a series of fun and creative activities to encourage self-expression and build confidence. The children took part in a dance competition, showcasing their energy and creativity. Additionally, many expressed their talents through writing stories, drawing beautiful artworks, and participating in other activities. At Otrumai, we believe in empowering children and fostering an environment where they can grow, create, and dream. Together, we nurture hope and creativity in the next generation."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer"
              onClick={() => openEventDetails(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-56 md:h-72 object-cover"
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
            className="bg-white rounded-lg shadow-xl w-full max-w-sm md:max-w-3xl overflow-hidden my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with larger image */}
            <div className="relative">
              <img 
                src={selectedEvent.src} 
                alt={selectedEvent.alt} 
                className="w-full h-56 md:h-80 object-contain bg-gray-100"
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