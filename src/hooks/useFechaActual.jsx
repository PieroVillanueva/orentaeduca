export default function useFechaActual() {
  const fechaActual = new Date();
  const obtenerFechaUTC = (diasSumar = 0) =>
    new Date(
      Date.UTC(
        fechaActual.getFullYear(),
        fechaActual.getMonth(),
        fechaActual.getDate() + diasSumar,
        0,
        0,
        0,
        0
      )
    )
      .toISOString()
      .replace("T", " ")
      .toString();

  return {
    fechaInicio: obtenerFechaUTC(),
    fechaFin: obtenerFechaUTC(7),
  };
}
