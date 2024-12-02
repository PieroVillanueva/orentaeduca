import { servicios } from "../utils/Constantes";
import CardServicios from "./CardServicios";

export default function Servicios() {
  return (
    <div className="pt-24 pb-12">
      <h2 className="text-center mb-8">Nuestros Servicios</h2>
      <div className="flex gap-8 flex-wrap mx-auto justify-center max-w-7xl">
        {servicios.map((servicio) => (
          <CardServicios key={servicio.id} servicio={servicio} />
        ))}
      </div>
    </div>
  );
}
