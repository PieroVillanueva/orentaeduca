import {
  horarios as horariosbd,
  especialistas as especialistasbd,
  motivos as motivosbd,
} from "../utils/Constantes";

export default function FormCitaConfirmada({ formik }) {
  const { nombre, telefono, especialista, motivo, dia, turno } = formik.values;

  // Función para convertir la fecha a formato "Lunes 9 de diciembre de 2024"
  const convertirFecha = (fechaStr) => {
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [año, mes, dia] = fechaStr.split("-").map(Number);
    const fecha = new Date(año, mes - 1, dia);
    return `${dias[fecha.getDay()]} ${dia} de ${meses[mes - 1]} de ${año}`;
  };

  // Obtener los datos relacionados con especialista, motivo y horario
  const especialistaData = especialistasbd.find(
    (espe) => espe.value === especialista
  );
  const motivoData = motivosbd.find((moti) => moti.value === motivo);
  const horarioData = horariosbd.find((hor) => hor.turno == turno);

  // Construir el enlace de WhatsApp con la información de la cita
  const mensajeWhatsApp = `¡Buenas!%20Deseo%20realizar%20el%20pago%20de%20la%20siguiente%20cita:%0ANombre:%20${nombre}%0ATeléfono:%20${telefono}%0AEspecialista:%20${
    especialistaData?.nombre
  }%0AModalidad:%20${horarioData?.modalidad}%0AMotivo:%20${
    motivoData?.nombre
  }%0AFecha:%20${convertirFecha(dia)}%0AHora:%20${horarioData?.hora}`;

  return (
    <>
      <h2 className="mb-8 text-2xl font-semibold text-center text-primary-500">
        Cita Registrada con Éxito
      </h2>
      <div className="flex flex-col gap-4">
        <h3>Resumen de su Cita Agendada</h3>
        <p className="text-typography-500">
          <strong>Nombre:</strong> {nombre}
        </p>
        <p className="text-typography-500">
          <strong>Teléfono:</strong> {telefono}
        </p>
        <p className="text-typography-500">
          <strong>Especialista:</strong> {especialistaData?.nombre}
        </p>
        <p className="text-typography-500">
          <strong>Motivo:</strong> {motivoData?.nombre}
        </p>
        <p className="text-typography-500">
          <strong>Modalidad:</strong> {horarioData?.modalidad}
        </p>
        <p className="text-typography-500">
          <strong>Fecha:</strong> {convertirFecha(dia)}
        </p>
        <p className="text-typography-500">
          <strong>Hora:</strong> {horarioData?.hora}
        </p>
        <p className="text-typography-500 py-4">
          Para asegurar tu cita, realiza el pago a través de WhatsApp dentro de
          las próximas <strong>2 horas</strong>. Caso contrario,{" "}
          <strong>perderá el derecho a la cita agendada.</strong>
        </p>
        <a
          href={`https://api.whatsapp.com/send?phone=51953921305&text=${mensajeWhatsApp}`}
          target="_blank"
        >
          <button
            type="button"
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl hover:scale-105 transition-all flex gap-4 w-full justify-center"
          >
            Realizar Pago
            <img src="/icons/whatsapp.svg" alt="Whatsapp" className="h-6" />
          </button>
        </a>
      </div>
    </>
  );
}
