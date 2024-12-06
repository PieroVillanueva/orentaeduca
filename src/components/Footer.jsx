import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-950 px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center py-9 border-b-[0.5px] border-[#82899A] ">
          <Link to="/" className="mb-6 md:mb-0">
            <img
              src="/img/logo.webp"
              alt="Logo"
              className="w-[179.75px] h-[48px]   "
            />
          </Link>

          <div className="text-white flex flex-col md:flex-row items-center gap-6 xl:gap-12 mb-6 md:mb-0">
            <Link
              to="/servicios"
              className="hover:text-secondary transition-all"
            >
              Servicios
            </Link>
            <Link
              to="/nosotros"
              className="hover:text-secondary transition-all"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              className="hover:text-secondary transition-all"
            >
              Contacto
            </Link>
          </div>

          <div className="flex gap-4 mb-6 md:mb-0">
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img src="/icons/whatsapp.svg" alt="Whatsapp" className="h-6  " />
            </a>
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img
                src="/icons/instagram.svg"
                alt="Instagram"
                className="h-6  "
              />
            </a>
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img src="/icons/correo.svg" alt="Correo" className="h-6  " />
            </a>
          </div>
        </div>

        <p className="text-center py-6 text-sm md:text-base text-typography-100">
          Copyright © 2024. Todos los derechos reservados. Images Designed by
          Freepik
        </p>
      </div>
    </footer>
  );
}
