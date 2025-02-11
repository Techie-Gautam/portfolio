import { useEffect, useState } from "react";
import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  // useEffect(() => {
  //   const resizeRatio = () => {
  //     setRatio(window.innerWidth / window.innerHeight)
  //   }

  //   window.addEventListener("resize", resizeRatio)
  
  //   return () => {
  //   window.removeEventListener("resize", resizeRatio)
      
  //   };
  // }, [ratio]);
  
  
  

 return (
    <main className="w-full m-auto text-white font-roboto">
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Contact />
      <Toaster />
      <Footer />
    </main>
 ) 
}

export default App;
