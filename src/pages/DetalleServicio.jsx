import HeroDetalleServicio from "../components/HeroDetalleServicio";
import TextoServicio from "../components/TextoServicio";
import Consultanos from "../components/Consultanos";
import { detallesServicio } from "../utils/Constantes";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function DetalleServicio() {
  const { servicio } = useParams();
  const navigate = useNavigate();

  const [informacion, setInformacion] = useState(null);

  useEffect(() => {
    const opcion = detallesServicio.find((item) => item.id === servicio);
    opcion ? setInformacion(opcion) : navigate("/");
  }, []); //servicio, navigate

  if (!informacion) {
    return null; // O puedes mostrar un "loading" o "404" si lo prefieres
  }

  return (
    <>
      <HeroDetalleServicio
        titulo={informacion.titulo}
        imagen={informacion.id}
      />
      <TextoServicio informacion={informacion} />
      <Consultanos />
    </>
  );
}
