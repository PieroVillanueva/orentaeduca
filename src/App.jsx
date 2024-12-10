import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import ServiciosPage from "./pages/ServiciosPage";
import DetalleServicio from "./pages/DetalleServicio";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";

import { Routes, Route } from "react-router-dom";
import { ModalContextProvider } from "./context/ModalContext";

export default function App() {
  return (
    <ModalContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios/:servicio" element={<DetalleServicio />} />
          <Route
            path="/terminos-y-condiciones"
            element={<TerminosYCondiciones />}
          />
          <Route
            path="/politica-de-privacidad"
            element={<PoliticaDePrivacidad />}
          />
        </Route>
      </Routes>
    </ModalContextProvider>
  );
}
