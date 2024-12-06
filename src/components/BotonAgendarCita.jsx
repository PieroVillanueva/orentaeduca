import { useModal } from "../context/ModalContext";

export default function BotonAgendarCita({ icono, style }) {
  const { openModal } = useModal();
  return (
    <button
      onClick={openModal}
      className={`bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
                  hover:scale-105 transition-all ${style}`}
    >
      AGENDAR UNA CITA
      {icono === "flecha" && (
        <img
          src="/icons/flecha.svg"
          alt="Flecha"
          className="w-[19px] h-[16px] object-contain"
        />
      )}
    </button>
  );
}
