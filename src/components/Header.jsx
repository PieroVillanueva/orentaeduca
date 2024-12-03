export default function Header() {
  return (
    <nav className="bg-primary-950 flex justify-center">
      <div className="flex container w-full justify-between py-6 px-4">
        <a href="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="h-12 mix-blend-screen"
          />
        </a>

        <div className="flex justify-center items-center gap-12">
          <div className="text-white flex gap-12">
            <a href="#" className="hover:text-secondary transition-all">
              Servicios
            </a>
            <a href="/nosotros" className="hover:text-secondary transition-all">
              Sobre Nosotros
            </a>
            <a href="/contacto" className="hover:text-secondary transition-all">
              Contacto
            </a>
          </div>
          <button
            onClick={() => {}}
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl 
            hover:scale-105 transition-all"
          >
            AGENDAR UNA CITA
          </button>
        </div>
      </div>
    </nav>
  );
}
