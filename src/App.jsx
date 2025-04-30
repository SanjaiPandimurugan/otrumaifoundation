import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactDonate from './components/ContactDonate';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Projects />
        <Gallery />
        <Testimonials />
        <ContactDonate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
