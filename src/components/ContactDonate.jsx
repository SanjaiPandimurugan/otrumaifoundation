import qrCode from '../assets/scanqr.jpg';
import finalImage from '../assets/Final.jpg';

const ContactDonate = () => {
  return (
    <section id="contact" className="py-10 md:py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div id="donate" className="max-w-4xl mx-auto text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-600 mb-4 md:mb-6">
            JOIN US IN MAKING A LASTING IMPACT
          </h2>
          
          <div className="relative mb-6 md:mb-8 overflow-hidden rounded-xl shadow-lg">
            <img 
              src={finalImage} 
              alt="Join our mission" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent flex items-end justify-center">
              <div className="p-4 md:p-6 text-center w-full"> 
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-4">
            Every contribution matters. As we continue our mission to uplift communities and provide
            essential resources, we invite you to be a part of this transformative journey.
          </p>
          
          <p className="text-base md:text-lg font-medium text-gray-800 mb-4 md:mb-6">
            TOGETHER, WE CAN MAKE A DIFFERENCE.
          </p>
        </div>
      
        <div className="w-full max-w-xs md:max-w-sm mx-auto">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-secondary-600 mb-3 md:mb-4">DONATE NOW</h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6">
                Every donation plants a seed of hope. Your generosity fuels our mission to create lasting 
                positive change in communities that need it most.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-3 md:p-4 rounded-lg mb-3 md:mb-4 shadow-inner">
                <img 
                  src={qrCode} 
                  alt="Donation QR Code" 
                  className="w-28 h-28 md:w-32 md:h-32 object-contain mx-auto"
                />
              </div>
              <p className="text-center text-gray-700 text-xs md:text-sm mb-2">Scan to donate via Google Pay</p>
              <div className="flex space-x-4 justify-center mb-4 md:mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" alt="Google Pay" className="h-5 md:h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="PayTM" className="h-5 md:h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" alt="UPI" className="h-5 md:h-6" />
              </div>
              
              <button className="w-full bg-gradient-to-r from-accent to-secondary-500 text-white px-4 md:px-5 py-2 rounded-md hover:shadow-md transition-all font-medium text-xs md:text-sm">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdtdzluVTXEBBOvoK-1jyz-3h7eaZLDrsvVxMpD6RjxBy3qpA/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Volunteer Now</a>
              </button>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-4 md:mt-6">
            © 2025 OTrumai Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDonate; 