import { atenciones } from "../utils/Constantes";
export default function AtencionAdaptada() {
  return (
    <div className="mx-auto container flex pt-24 pb-12">
      <div className="max-w-2xl">
        <div className="flex gap-4 flex-col mb-8">
          <h3>Nuestra Historia</h3>
          <h2 className="max-w-[25ch]">
            Ofrecemos una Atención{" "}
            <span className="text-primary-500">Adaptada a tus Necesidades</span>
          </h2>
        </div>

        {atenciones.map((dAtencion) => (
          <div key={dAtencion.titulo} className="flex mb-8">
            <div
              className="bg-primary-500 rounded-full min-w-16 h-16 flex justify-center mr-4
         items-center hover:bg-primary-600 transition-all"
            >
              <img
                src={`/icons/${dAtencion.icono}.svg `}
                alt={dAtencion.icono}
                className="w-9"
              />
            </div>
            <div className="max-w-3xl flex gap-2 flex-col">
              <h3>{dAtencion.titulo}</h3>
              <p>{dAtencion.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" mt-12 flex justify-center items-center mx-auto">
        <img
          src="/img/atencionAdaptada.webp"
          alt="Atencion Adaptada"
          className="rounded-2xl shadow-2xl max-w-[600px]"
        />
      </div>
    </div>
  );
}
