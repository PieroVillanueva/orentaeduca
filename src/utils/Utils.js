export const obtenerFechaConDias = (dias = 0) => {
    const fecha = new Date();

    // Sumar o restar los días a la fecha actual
    fecha.setDate(fecha.getDate() + dias);

    // Formateamos la fecha en formato 'YYYY-MM-DD'
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexed
    const dia = String(fecha.getDate()).padStart(2, "0");

    return `${año}-${mes}-${dia}`;
};
export const compararFechasIguales = (fecha1, fecha2) => {
    // Convertir ambas fechas a objetos Date
    const d1 = new Date(fecha1);
    const d2 = new Date(fecha2);

    // Normalizar ambas fechas a medianoche (00:00:00)
    d1.setHours(0, 0, 0, 0);
    d2.setHours(0, 0, 0, 0);

    // Comparar las fechas
    return d1.getTime() === d2.getTime()
};

export const compararFechasHoy = (date2Str) => {
    if (date2Str == "") return false
    console.log("datestring", date2Str)
    const year2 = parseInt(date2Str.slice(0, 4));  // Los primeros 4 caracteres (año)
    const month2 = parseInt(date2Str.slice(5, 7)); // Los caracteres del índice 5 al 7 (mes)
    const day2 = parseInt(date2Str.slice(8, 10));  // Los caracteres del índice 8 al 10 (día)

    const date1 = new Date();
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth() + 1;
    const day1 = date1.getDate();

    // console.log("soniguales???", (year1 === year2) && (month1 === month2) && (day1 === day2))
    return (year1 === year2) && (month1 === month2) && (day1 === day2)
};