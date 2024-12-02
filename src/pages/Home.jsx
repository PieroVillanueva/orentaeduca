import Hero from "../components/Hero";
import FormRegistroCita from "../components/FormRegistroCita";
import Servicios from "../components/Servicios";
import Ventajas from "../components/Ventajas";
import Expertos from "../components/Expertos";
import Consultanos from "../components/Consultanos";

export default function Home() {
  return (
    <>
      <Hero />
      <FormRegistroCita />
      <Servicios />
      <div className="bg-gradiente1">
        <Ventajas />
        <Expertos />
      </div>
      <Consultanos />
    </>
  );
}
