import qrCode from '../assets/Screenshot 2025-04-30 205220.png';

const ContactDonate = () => {
  return (
    <section id="contact" className="py-16 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-600 mb-6">
            JOIN US IN MAKING A LASTING IMPACT
          </h2>
          
          <p className="text-gray-700 text-base mb-4">
            Every contribution matters. As we continue our mission to uplift communities and provide
            essential resources, we invite you to be a part of this transformative journey.
          </p>
          
          <p className="text-lg font-medium text-gray-800 mb-6">
            TOGETHER, WE CAN MAKE A DIFFERENCE.
          </p>
        </div>
      
        <div className="max-w-sm mx-auto">
          {/* Donate */}
          <div id="donate" className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-center">
              <h3 className="text-xl font-bold text-secondary-600 mb-4">DONATE NOW</h3>
              <p className="text-gray-600 text-sm mb-6">
                Every donation plants a seed of hope. Your generosity fuels our mission to create lasting 
                positive change in communities that need it most.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-primary-100 to-secondary-100 p-4 rounded-lg mb-4 shadow-inner">
                <img 
                  src={qrCode} 
                  alt="Donation QR Code" 
                  className="w-32 h-32 object-contain mx-auto"
                />
              </div>
              <p className="text-center text-gray-700 text-sm mb-2">Scan to donate via Google Pay</p>
              <div className="flex space-x-4 justify-center mb-6">
                <img src="https://cdn-icons-png.flaticon.com/512/888/888870.png" alt="Google Pay" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/6124/6124998.png" alt="PayTM" className="h-6" />
                <img src="https://cdn-icons-png.flaticon.com/512/825/825454.png" alt="UPI" className="h-6" />
              </div>
              
              <button className="w-full bg-gradient-to-r from-accent to-secondary-500 text-white px-5 py-2 rounded-md hover:shadow-md transition-all font-medium text-sm">
                Volunteer Now
              </button>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-6">
            © 2025 OTrumai Foundation. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDonate; 