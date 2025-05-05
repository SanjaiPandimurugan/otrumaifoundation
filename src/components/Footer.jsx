import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold uppercase">Otrumai Foundation</h3>
              <p className="text-sm text-white/80 mt-2">Together, We Build. Together, We Serve</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <h4 className="font-medium mb-3 text-white text-lg">Connect With Us</h4>
              <div className="flex space-x-5">
                <a 
                  href="https://www.linkedin.com/in/%E0%AE%92%E0%AE%B1%E0%AF%8D%E0%AE%B1%E0%AF%81%E0%AE%AE%E0%AF%88-foundation-77609b322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors" 
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/otrumai_foundation?igsh=MW50NGc1d3B0aGRoZA==" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors" 
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:: otrumaifoundation@gmail.com" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors" 
                  aria-label="Email"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.7l-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors">Events</a>
            <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
            <a href="#donate" className="text-white/80 hover:text-white transition-colors">Donate</a>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center">
            <p className="text-sm text-white/70">&copy; {currentYear} Otrumai Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 