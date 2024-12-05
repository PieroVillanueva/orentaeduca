import BotonAgendarCita from "./BotonAgendarCita";
export default function Consultanos() {
  return (
    <div className="bg-gradiente-pattern">
      <div className="container  mx-auto text-center flex justify-between ">
        <img
          src="\img\consultanos1.webp"
          alt="Consultanos1"
          className="hidden lg:block w-1/4  "
        />
        <div className="flex flex-col justify-center items-center bg-pattern w-full lg:2/4 px-8 md:px-0 py-16 lg:py-0">
          <div className="max-w-xl flex flex-col ">
            <h2 className="pb-4">
              ¡No Dudes En <span className="text-primary-500">Consultar</span>{" "}
              Tus Problemas Con Nosotros!
            </h2>
            <p className="pb-8">
              Estamos aquí para escucharte y apoyarte en cada paso. Si necesitas
              hablar sobre lo que te preocupa, no dudes en contactarnos.
            </p>
            {/* <button
              onClick={() => {}}
              className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
          hover:scale-105 transition-all mx-auto"
            >
              AGENDAR UNA CITA
            </button> */}
            <BotonAgendarCita icono={"none"} style={"mx-auto"} />
          </div>
        </div>
        <img
          src="\img\consultanos2.webp"
          alt="Consultanos2"
          className="hidden lg:block w-1/4  "
        />
      </div>
    </div>
  );
}
