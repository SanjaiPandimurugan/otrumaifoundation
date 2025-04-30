const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-primary-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary-600">Empowering</span> Communities, 
            <span className="text-secondary-500"> Transforming</span> Lives
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-md transform transition-transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary-600 mb-4">OUR VISION</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              To create a compassionate and inclusive society where every individual, especially the
              vulnerable and marginalized, lives with dignity, security, and purpose.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-md transform transition-transform hover:scale-105">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-500 mb-4">OUR MISSION</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-center">
              To empower communities and transform lives by providing holistic support and sustainable
              solutions in areas such as elder care, education, healthcare, and social welfare. Through
              strategic partnerships, innovative initiatives, and a dedicated network of volunteers, we strive
              to make a lasting impact on society and foster a culture of empathy and solidarity.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-6xl mx-auto">
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">1500</p>
            <p className="text-gray-600 mt-2">Volunteers</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">11</p>
            <p className="text-gray-600 mt-2">Local Chapters</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">12500</p>
            <p className="text-gray-600 mt-2">Families Helped</p>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">200</p>
            <p className="text-gray-600 mt-2">Overseas Volunteers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 