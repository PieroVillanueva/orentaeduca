import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
