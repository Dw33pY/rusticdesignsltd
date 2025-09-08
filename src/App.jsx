import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Gallery />
      <Contact />
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
