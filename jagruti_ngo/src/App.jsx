import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
     AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;