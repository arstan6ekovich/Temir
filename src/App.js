import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Contack from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contack />} />
      </Routes>
    </div>
  );
}

export default App;
