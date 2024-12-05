import BotonAgendarCita from "./BotonAgendarCita";
export default function Hero() {
  return (
    <div className="bg-pattern bg-cover">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-8 lg:px-4  pb-12 pt-4  ">
        {/* Contenedor de texto */}
        <div className="flex flex-col gap-4 justify-center max-w-xl mx-auto md:mx-0 pt-10">
          <h3 className="font-semibold">Dr. Claudeth Smith</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-[20ch]">
            La Importancia de la{" "}
            <span className="text-primary-500">Salud Mental</span> Para una
            Mejor Vida
          </h1>
          <p className="text-typography-100 ">
            Al cuidar de nuestra mente mejoramos nuestra calidad de vida y
            nuestras relaciones. Buscar apoyo y adoptar hábitos saludables son
            pasos clave para mantener una mente sana.
          </p>
          {/* <button
            onClick={() => {}}
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
                    hover:scale-105 transition-all"
          >
            AGENDAR UNA CITA
            <img src="/icons/flecha.svg" alt="Flecha" />
          </button> */}

          <BotonAgendarCita icono={"flecha"} style={""} />

          <div className="flex gap-4 mt-4 mb-8 md:mb-0">
            <img src="/img/usuarios.webp" className="h-12" alt="Usuarios" />
            <div className="flex items-start flex-col justify-center">
              <img src="/icons/estrellas.svg" className="h-4" alt="Estrellas" />
              <p className="text-sm">250+ Clientes Satisfechos</p>
            </div>
          </div>
        </div>

        {/* Imagen Hero */}
        <div className="flex justify-center items-center lg:justify-start lg:items-start md:pt-8  ">
          <img
            src="/img/hero.webp"
            alt="Hero"
            className=" md:pb-0 rounded-2xl "
          />
        </div>
      </div>
    </div>
  );
}
