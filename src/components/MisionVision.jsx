import { misiones } from "../utils/Constantes";

export default function MisionVision() {
  return (
    <div className="bg-pattern bg-cover ">
      <div className="mx-auto container py-16 px-8 xl:px-0 ">
        <div className="flex flex-col xl:flex-row gap-16 mb-16 justify-center">
          <div className="flex justify-center order-2 xl:order-1 ">
            <img
              src="/img/misionVision.webp"
              alt="Mision Visión"
              className="rounded-2xl md:max-w-[600px]  "
            />
          </div>

          <div className="max-w-md flex justify-center mx-auto xl:mx-0 flex-col gap-4 order-1 xl:order-2">
            <h3 className="text-center xl:text-left">Nuestro Alcance</h3>
            <h2 className="text-center xl:text-left">
              Contacte con Nuestros Especialistas Desde{" "}
              <span className="text-primary-500">Cualquier Parte del Perú</span>
            </h2>
          </div>
        </div>

        <div className="flex gap-8 flex-wrap justify-center">
          {misiones.map((dMision) => (
            <div key={dMision.titulo} className="flex gap-4 xl:max-w-xs">
              <div className="min-h-3 min-w-3 w-3 h-3 bg-secondary mt-2" />
              <div className="max-w-lg flex gap-2 flex-col">
                <h3>{dMision.titulo}</h3>
                <p>{dMision.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
