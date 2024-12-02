export default function Hero() {
  return (
    <div className="bg-pattern bg-cover">
      <div className="grid grid-cols-2 gap-3 container m-auto px-4">
        <div className="flex  flex-col gap-4 justify-center max-w-[500px]">
          <h3>Dr. Claudeth Smith</h3>
          <h1 className="max-w-[20ch]">
            La Importancia de la{" "}
            <span className="text-primary-500">Salud Mental</span> Para una
            Mejor Vida
          </h1>
          <p className="text-typography-500">
            Al cuidar de nuestra mente mejoramos nuestra calidad de vida y
            nuestras relaciones. Buscar apoyo y adoptar hábitos saludables son
            pasos clave para mantener una mente sana
          </p>
          <button
            onClick={() => {}}
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
                    hover:scale-105 transition-all"
          >
            AGENDAR UNA CITA
            <img src="/icons/flecha.svg" alt="Flecha" />
          </button>
          <div className="flex gap-4">
            <img src="/img/usuarios.webp" className="h-12" alt="Usuarios" />
            <div className="flex items-start flex-col justify-center">
              <img src="/icons/estrellas.svg" className="h-4" alt="Estrellas" />
              <p>250+ Clientes Satisfechos</p>
            </div>
          </div>
        </div>
        <img src="/img/hero.webp" alt="Hero" className="pb-28" />
      </div>
    </div>
  );
}
