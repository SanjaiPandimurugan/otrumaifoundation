import image1 from '../assets/Screenshot 2025-04-30 205154.png';
import image2 from '../assets/Screenshot 2025-04-30 205203.png';
import image3 from '../assets/Screenshot 2025-04-30 205212.png';
import image4 from '../assets/Screenshot 2025-04-30 205220.png';

const Gallery = () => {
  // Create an array of images for the gallery grid
  const galleryImages = [
    { src: image1, alt: "Volunteers working with community members" },
    { src: image2, alt: "Distributing supplies to those in need" },
    { src: image3, alt: "Healthcare support services" },
    { src: image4, alt: "Education programs for children" },
    // Using repeated images to fill the grid
    { src: image1, alt: "Community outreach programs" },
    { src: image2, alt: "Food distribution event" },
    { src: image3, alt: "Medical camp" },
    { src: image4, alt: "Educational workshop" },
    { src: image1, alt: "Volunteer training session" }
  ];

  return (
    <section id="gallery" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto mt-6">
            Explore our work through these images that capture our dedication to empowering communities and creating lasting positive change.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-secondary-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 