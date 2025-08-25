import { Routes, Route } from "react-router-dom";
import Home from "./Home";   // index.jsx wali file ko Home.tsx me daal do
import Pricing from "./pages/Pricing";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
