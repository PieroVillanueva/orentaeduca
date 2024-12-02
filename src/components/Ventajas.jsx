import { ventajas } from "../utils/Constantes";
export default function Ventajas() {
  return (
    <div className="mx-auto max-w-7xl flex py-12">
      <div className="">
        <h2 className=" mb-14 max-w-[35ch]">
          Habilidades de Fortalecimiento para{" "}
          <span className="text-primary-500">Afrontar Tiempos Difíciles</span>
        </h2>
        {ventajas.map((ventaja) => (
          <div key={ventaja.titulo} className="flex  mb-10">
            <div
              className="bg-primary-500 rounded-full min-w-14 h-14 flex justify-center mr-4
             items-center hover:bg-primary-600 transition-all"
            >
              <img
                src={`/icons/${ventaja.icono}.svg `}
                alt={ventaja.icono}
                className="h-7"
              />
            </div>
            <div className="max-w-3xl">
              <h3>{ventaja.titulo}</h3>
              <p>{ventaja.descripcion}</p>
            </div>
          </div>
        ))}
        <button
          onClick={() => {}}
          className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
          hover:scale-105 transition-all mt-14"
        >
          AGENDAR UNA CITA
        </button>
      </div>
      <div>
        <p className="pl-[175px] pr-24 pb-6">
          Desarrollar estas habilidades nos ayuda a enfrentar crisis y a
          fortalecernos en nuestra vida diaria. Al cultivarlas, creamos una base
          sólida para afrontar cualquier adversidad.
        </p>
        <div
          className="bg-primary-600 mx-auto w-fit py-7 px-12 flex gap-8 justify-center 
        items-center rounded-2xl mb-[-52px] relative z-10 "
        >
          <div className="flex gap-2 font-semibold items-center ">
            <p className="text-4xl text-white">27 +</p>
            <p className="flex w-[97px] text-white">Años de Experiencia</p>
          </div>
          <div className="flex gap-2 font-semibold items-center">
            <p className="text-4xl text-white">250 +</p>
            <p className="flex w-[97px] text-white">Clientes Satisfechos</p>
          </div>
        </div>
        <div className="z-0 flex justify-center">
          <img
            src="/img/ventajas.webp"
            alt="Ventajas"
            className="rounded-2xl shadow-2xl w-[630px]"
          />
        </div>
      </div>
    </div>
  );
}
