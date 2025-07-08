import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GallerySlider from "./components/GallerySlider";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import CartModal from "./components/CartModal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySlider />
      <Menu />
      <About />
      <Contact />
      <CartModal />
      <Footer />
    </div>
  );
}

export default App;
