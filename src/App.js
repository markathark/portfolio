import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
