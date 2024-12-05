export default function ChateaConNosotros() {
  return (
    <div className="container mt-12 pb-16 xl:pb-24 mx-auto flex justify-center border-b border-[#82899a8d]">
      <div className="rounded-2xl xl:bg-contacto1 bg-cover bg-none w-full px-4 mid:px-0">
        <div className="px-8 py-16 bg-white rounded-2xl shadow-2xl max-w-[464px] mx-auto my-12 sm:my-24 md:my-32 xl:ml-24 xl:mr-24">
          <h1 className="mb-4 text-center sm:text-left text-3xl xl:text-4xl">
            Chatea Con Nosotros
          </h1>
          <p className="mb-4 text-center sm:text-left">
            Todas tus preguntas y requerimientos especiales son siempre
            bienvenidas. Estamos aquí para ayudarte.
          </p>
          <a href="https://api.whatsapp.com/send?phone=51952734506&text=Go%20lolcito?">
            <button
              type="submit"
              className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl mt-2 w-full
                    hover:scale-105 transition-all flex justify-center gap-4 "
            >
              ENVIAR UN MENSAJE
              <img src="/icons/whatsapp.svg" alt="Whatsapp" className="h-6  " />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
