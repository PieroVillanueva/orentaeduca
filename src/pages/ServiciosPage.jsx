import Servicios from "../components/Servicios";
import Expertos from "../components/Expertos";
import Consultanos from "../components/Consultanos";

export default function ServiciosPage() {
  return (
    <>
      <Servicios />
      <div className="bg-gradiente1">
        <Expertos />
      </div>
      <Consultanos />
    </>
  );
}
