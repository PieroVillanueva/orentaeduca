export default function ChateaConNosotros() {
  return (
    <div className="container mt-12 pb-24 mx-auto flex justify-center border-b border-[#82899a8d]">
      <div className="rounded-2xl bg-contacto1 bg-cover w-full ">
        <div className="px-8 py-16 bg-white rounded-2xl  shadow-2xl max-w-[464px] my-24 ml-24">
          <h1 className="mb-4">Chatea Con Nosotros</h1>
          <p className=" mb-4">
            Todas tus preguntas y requerimientos especiales son siempre
            bienvenidas. Estamos aquí para ayudarte.
          </p>
          <button
            type="submit"
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl mt-2 w-full
                    hover:scale-105 transition-all flex justify-center gap-4 "
          >
            ENVIAR UN MENSAJE
            <img src="/icons/whatsapp.svg" alt="Whatsapp" />
          </button>
        </div>
      </div>
    </div>
  );
}
