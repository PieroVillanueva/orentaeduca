export default function HeroNosotros() {
  return (
    <div className="bg-pattern w-full bg-cover  px-8 lg:px-0">
      <div className="container flex flex-col justify-center items-center mx-auto pt-12 pb-12 gap-4 text-center">
        <h3 className="text-base md:text-xl">Sobre Nosotros</h3>
        <h1 className="pb-4">
          Somos <span className="text-primary-500">Orentaeduca</span>
        </h1>
        <img
          src="/img/nosotrosHero.webp"
          alt="Somos Orentaeduca"
          className="rounded-2xl "
        />
      </div>
    </div>
  );
}
