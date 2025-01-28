import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue"
import Red from "./components/Red"
import Green from "./components/Green";
import Home from "./components/Home"
import Navigation from "./components/Navigation"

function App() {
  return (
    <div id="container">
      <Navigation />
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/green" element={<Green />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
