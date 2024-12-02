import Ventajas from "../components/Ventajas";
import Expertos from "../components/Expertos";
import Consultanos from "../components/Consultanos";
import HeroNosotros from "../components/HeroNosotros";
import AtencionAdaptada from "../components/AtencionAdaptada";
import MisionVision from "../components/MisionVision";

export default function Nosotros() {
  return (
    <>
      <HeroNosotros />
      <AtencionAdaptada />
      <MisionVision />
      <div className="bg-gradiente1">
        <Ventajas />
        <Expertos />
      </div>
      <Consultanos />
    </>
  );
}
