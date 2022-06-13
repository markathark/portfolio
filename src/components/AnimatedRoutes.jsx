import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import Sweetist from "../pages/projects/Sweetist";
import TheDailyMind from "../pages/projects/TheDailyMind";
import Whatch from "../pages/projects/Whatch";
import PhoXicLo from "../pages/projects/PhoXicLo";
import MyAdvice from "../pages/projects/MyAdvice";
import Menzies from "../pages/designs/Menzies";
import Logos from "../pages/designs/Logos";
import WhoWeAre from "../pages/designs/WhoWeAre";
import SweetistDesign from "../pages/designs/SweetistDesign";
import AccentEmbroidery from "../pages/designs/AccentEmbroidery";
import ASWE from "../pages/designs/ASWE";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/sweetist" element={<Sweetist />} />
        <Route path="/myadvice" element={<MyAdvice />} />
        <Route path="/thedailymind" element={<TheDailyMind />} />
        <Route path="/whatch" element={<Whatch />} />
        <Route path="/phoxiclo" element={<PhoXicLo />} />

        <Route path="/menzies" element={<Menzies />} />
        <Route path="/logos" element={<Logos />} />
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/sweetistdesign" element={<SweetistDesign />} />
        <Route path="/accentembroidery" element={<AccentEmbroidery />} />
        <Route path="/aswe" element={<ASWE />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
