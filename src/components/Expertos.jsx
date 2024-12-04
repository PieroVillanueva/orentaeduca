export default function Expertos() {
  return (
    <div className="mx-auto container flex justify-center flex-col pt-12 pb-12 xl:pb-24 text-center px-8 md:px-0">
      <div className=" flex  flex-col gap-4 mb-8">
        <h3 className="text-base">Nuestros Psicólogos</h3>
        <h2>
          Conoce Expertos <span className="text-primary-500">Psicólogos</span>
        </h2>
        <p className="max-w-2xl lg:max-w-3xl mx-auto">
          Con amplia experiencia en diferentes áreas, listos para ayudarte a
          enfrentar desafíos y mejorar tu bienestar emocional. ¡Tu salud mental
          es nuestra prioridad!
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        <div className="hover:scale-105 transition-all hover:drop-shadow-2xl">
          <img
            src="/img/experto1.webp"
            alt="Experto1"
            className="rounded-2xl "
          />
          <h3 className="pt-4 pb-2">Jenniffer Smith</h3>
          <p className="text-typography-500">Psicólogo</p>
        </div>
        <div className="hover:scale-105 transition-all hover:drop-shadow-2xl">
          <img
            src="/img/experto2.webp"
            alt="Experto2"
            className="rounded-2xl "
          />
          <h3 className="pt-4 pb-2">José Alvárez</h3>
          <p className="text-typography-500">Psicólogo</p>
        </div>
      </div>
    </div>
  );
}
