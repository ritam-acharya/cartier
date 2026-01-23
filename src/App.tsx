import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname}>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/projects" element={<Projects />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/expertise" element={<Expertise />} ></Route>
        <Route path="/careers" element={<Careers />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App