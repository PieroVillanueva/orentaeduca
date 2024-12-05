import { contactos } from "../utils/Constantes";
export default function Contactanos() {
  return (
    <div className="flex container justify-center items-center px-8 xl:px-0 mx-auto py-16 xl:py-24 gap-16 flex-wrap xl:flex-nowrap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0784053620027!2d-79.01149219999999!3d-8.093487000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad161885375a0b%3A0xaedfb48c0d66e0cc!2sJulio%20Cesar%20Tello%20329%2C%20Trujillo%2013006!5e0!3m2!1ses-419!2spe!4v1733261287939!5m2!1ses-419!2spe"
        // width="100%"
        // height="100%"
        allowFullScreen
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
        className="w-[400px] h-[504px] rounded-2xl "
      />
      <div className="max-w-lg xl:max-w-3xl flex flex-col gap-4 ">
        <h2 className="text-3xl">Contáctanos Hoy</h2>
        <p className="mb-4">
          Comunícate con nosotros visitándonos en nuestra sede, por WhatsApp o
          envíanos un correo electrónico. ¡Estaremos encantados de atenderte!
        </p>
        <div className="grid xl:grid-cols-2 xl:gap-x-4">
          {contactos.map((dContacto) => (
            <div key={dContacto.titulo} className="flex mb-8">
              <div
                className="bg-primary-500 rounded-full min-w-16 h-16 flex justify-center mr-4
             items-center hover:bg-primary-600 transition-all"
              >
                <img
                  src={`/icons/${dContacto.icono}.svg `}
                  alt={dContacto.icono}
                  className="h-8 w-8  "
                />
              </div>
              <div className=" flex gap-2 flex-col">
                <h3>{dContacto.titulo}</h3>
                <p>{dContacto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
