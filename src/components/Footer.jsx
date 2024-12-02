export default function Footer() {
  return (
    <footer className="bg-primary-950 min-h-36 ">
      <div className="container  mx-auto">
        <div className="flex  justify-between mx-auto  py-9 border-b-[0.5px] border-[#82899A]">
          <a href="">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-12 mix-blend-screen "
            />
          </a>
          <div className="flex justify-center items-center gap-12">
            <div className="text-white flex gap-12">
              <a href="#" className="hover:text-secondary transition-all">
                Servicios
              </a>
              <a href="#" className="hover:text-secondary transition-all">
                Sobre Nosotros
              </a>
              <a href="#" className="hover:text-secondary transition-all">
                Contacto
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center  items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img src="/icons/whatsapp.svg" alt="Whatsapp" className="h-6" />
            </a>
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center  items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
            </a>
            <a className="bg-primary-500 rounded-full min-w-12 h-12 flex justify-center  items-center hover:bg-primary-600 transition-all cursor-pointer">
              <img src="/icons/correo.svg" alt="Correo" className="h-6" />
            </a>
          </div>
        </div>
        <p className="py-9 ">
          Copyright © 2024. Todos los derechos reservados.{" "}
        </p>
      </div>
    </footer>
  );
}
