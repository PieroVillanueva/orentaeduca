import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </>
  );
}
