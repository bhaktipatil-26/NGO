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
function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
