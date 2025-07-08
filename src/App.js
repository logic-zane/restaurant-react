// App.js
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
    <Router>
      <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <CartModal />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <GallerySlider />
              </>
            }
          />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
