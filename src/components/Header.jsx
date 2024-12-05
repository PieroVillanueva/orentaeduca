import { NavLink } from "react-router-dom";
import { useState } from "react";
import BotonAgendarCita from "./BotonAgendarCita";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-950">
      <div className="flex container w-full justify-between py-6 px-4 mx-auto">
        <NavLink to="/">
          <img
            src="/img/logo.webp"
            alt="Logo"
            className="h-12 pl-2 lg:px-0  "
          />
        </NavLink>

        {/* Ícono de menú en dispositivos pequeños */}
        <img
          src="/icons/menu.svg"
          alt="Menu"
          className="lg:hidden cursor-pointer px-4 py-4 lg:px-0  "
          onClick={() => setMenuOpen((prevValue) => !prevValue)}
        />

        {/* Menú en pantallas grandes */}
        <div className="hidden lg:flex justify-center items-center gap-12">
          <div className="text-white flex gap-12">
            <NavLink
              to="/servicios"
              className="hover:text-secondary transition-all p-2"
            >
              Servicios
            </NavLink>
            <NavLink
              to="/nosotros"
              className="hover:text-secondary transition-all p-2"
            >
              Sobre Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="hover:text-secondary transition-all p-2"
            >
              Contacto
            </NavLink>
          </div>

          <BotonAgendarCita icono={"none"} style={""} />
        </div>
      </div>

      {/* Filtro de fondo cuando el menú está abierto en móviles */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar móvil */}
      <div
        className={`${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/2 h-full bg-primary-950 shadow-2xl text-white flex flex-col items-center pt-12 gap-8 transition-transform duration-300 ease-in-out z-20`}
      >
        <NavLink to="/">
          <img src="/img/logo.webp" alt="Logo" className="h-12  " />
        </NavLink>
        <NavLink
          to="/servicios"
          className="hover:text-secondary transition-all mb-4"
        >
          Servicios
        </NavLink>
        <NavLink
          to="/nosotros"
          className="hover:text-secondary transition-all mb-4"
        >
          Sobre Nosotros
        </NavLink>
        <NavLink
          to="/contacto"
          className="hover:text-secondary transition-all mb-4"
        >
          Contacto
        </NavLink>
        {/* <button
          onClick={() => {}}
          className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl hover:scale-105 transition-all"
        >
          AGENDAR UNA CITA
        </button> */}
        <BotonAgendarCita icono={"none"} style={""} />
      </div>
    </nav>
  );
}
