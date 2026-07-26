// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MainNavbar from "./Pages/MainNavbar";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Navbar/>
//       <Home/>
//       <About/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
// export default App

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
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
      <Footer/>
    </>
  );
}

export default App;