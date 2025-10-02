import "./App.css";
import Header from "./components/header_section/Header";

// pages
import Home from "./components/home_section/Home";
import ProductsDetails from "./components/product_details_section/ProductDetails";
import Benefits from "./components/benefits_section/Benefits";
import About from "./components/about_us_section/AboutUs";
import Contact from "./components/contact_us_section/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* stays on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/benefits" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
