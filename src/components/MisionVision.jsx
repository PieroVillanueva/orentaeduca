import { misiones } from "../utils/Constantes";
export default function MisionVision() {
  return (
    <div className="bg-pattern bg-cover">
      <div className="mx-auto container pt-12 pb-12 mb-12 mt-12">
        <div className="flex justify-center gap-16 mb-16">
          <img
            src="/img/misionVision.webp"
            alt="Mision Visión"
            className="rounded-2xl"
          />
          <div className="max-w-md flex justify-center flex-col gap-4 ">
            <h3 className="">Nuestro Alcance</h3>
            <h2>
              Contacte con Nuestros Especialistas Desde{" "}
              <span className="text-primary-500">Cualquier Parte del Perú</span>
            </h2>
          </div>
        </div>

        <div className="flex gap-8">
          {misiones.map((dMision) => (
            <div key={dMision.titulo} className="flex gap-4">
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
