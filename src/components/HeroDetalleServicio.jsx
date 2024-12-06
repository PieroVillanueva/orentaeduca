export default function HeroDetalleServicio({ titulo, imagen }) {
  return (
    <div className="bg-pattern w-full bg-cover px-8 xl:px-0">
      <div className="container flex flex-col justify-center items-center mx-auto pt-12 pb-12 gap-4 text-center">
        <h3 className="text-base md:text-xl">Nuestros Servicios</h3>
        <h1 className="pb-4 text-primary-500">{titulo}</h1>
        <div className="relative w-full aspect-[1032/550] max-w-[1031px]">
          <img
            src={`/img/${imagen}.webp`}
            alt={`${imagen}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
