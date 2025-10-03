import "./App.css";
import Header from "./components/header_section/Header";

// pages
import Home from "./components/home_section/Home";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
