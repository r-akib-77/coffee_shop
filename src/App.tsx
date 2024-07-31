import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./cart/Cart";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <Router>
      <Navbar2 />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
