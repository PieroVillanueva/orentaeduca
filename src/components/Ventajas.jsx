// import { ventajas } from "../utils/Constantes";
// export default function Ventajas() {
//   return (
//     <div className="mx-auto container flex py-12  px-4">
//       <div>
//         <h2 className=" mb-12 max-w-[25ch]">
//           Habilidades de Fortalecimiento para{" "}
//           <span className="text-primary-500">Afrontar Tiempos Difíciles</span>
//         </h2>
//         {ventajas.map((ventaja) => (
//           <div key={ventaja.titulo} className="flex mb-8">
//             <div
//               className="bg-primary-500 rounded-full min-w-16 h-16 flex justify-center mr-4
//              items-center hover:bg-primary-600 transition-all"
//             >
//               <img
//                 src={`/icons/${ventaja.icono}.svg `}
//                 alt={ventaja.icono}
//                 className="h-9"
//               />
//             </div>
//             <div className="max-w-3xl flex gap-2 flex-col">
//               <h3>{ventaja.titulo}</h3>
//               <p>{ventaja.descripcion}</p>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={() => {}}
//           className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
//           hover:scale-105 transition-all mt-12"
//         >
//           AGENDAR UNA CITA
//         </button>
//       </div>
//       <div>
//         <p className="pl-[175px] pr-24 pb-6">
//           Desarrollar estas habilidades nos ayuda a enfrentar crisis y a
//           fortalecernos en nuestra vida diaria. Al cultivarlas, creamos una base
//           sólida para afrontar cualquier adversidad.
//         </p>
//         <div
//           className="bg-primary-600 mx-auto w-fit py-6 px-12 flex gap-8 justify-center
//         items-center rounded-2xl mb-[-52px] relative z-10 "
//         >
//           <div className="flex gap-2 font-semibold items-center ">
//             <p className="text-4xl text-white">27 +</p>
//             <p className="flex w-[97px] text-white">Años de Experiencia</p>
//           </div>
//           <div className="flex gap-2 font-semibold items-center">
//             <p className="text-4xl text-white">250 +</p>
//             <p className="flex w-[97px] text-white">Clientes Satisfechos</p>
//           </div>
//         </div>
//         <div className="z-0 flex justify-center">
//           <img
//             src="/img/ventajas.webp"
//             alt="Ventajas"
//             className="rounded-2xl shadow-2xl max-w-[650px] "
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
import { ventajas } from "../utils/Constantes";
export default function Ventajas() {
  return (
    <div className="mx-auto container grid xl:grid-cols-2 py-12 px-8 lg:px-0 gap-8 md:gap-0">
      <div className="lg:max-w-lg mx-auto">
        <h2 className=" mb-12 max-w-[25ch]">
          Habilidades de Fortalecimiento para{" "}
          <span className="text-primary-500">Afrontar Tiempos Difíciles</span>
        </h2>
        {ventajas.map((ventaja) => (
          <div key={ventaja.titulo} className="flex mb-8">
            <div
              className="bg-primary-500 rounded-full min-w-16 h-16 flex justify-center mr-4
             items-center hover:bg-primary-600 transition-all"
            >
              <img
                src={`/icons/${ventaja.icono}.svg `}
                alt={ventaja.icono}
                className="h-9"
              />
            </div>
            <div className="max-w-3xl flex gap-2 flex-col">
              <h3>{ventaja.titulo}</h3>
              <p>{ventaja.descripcion}</p>
            </div>
          </div>
        ))}
        <button
          onClick={() => {}}
          className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl items-center max-w-max flex gap-4
          hover:scale-105 transition-all mt-12"
        >
          AGENDAR UNA CITA
        </button>
      </div>
      <div>
        <p className="max-w-lg mx-auto pb-6 pt-8 lg:pt-0 text-typography-100">
          Desarrollar estas habilidades nos ayuda a enfrentar crisis y a
          fortalecernos en nuestra vida diaria. Al cultivarlas, creamos una base
          sólida para afrontar cualquier adversidad.
        </p>
        <div
          className="bg-primary-600 mx-auto w-fit py-6 px-12 grid md:grid-cols-2 gap-8 justify-center 
        items-center rounded-2xl mb-[-52px] relative z-10 "
        >
          <div className="flex gap-2 font-semibold items-center ">
            <p className="text-3xl md:text-4xl text-white">27 +</p>
            <p className=" flex w-[97px] text-white">Años de Experiencia</p>
          </div>
          <div className="flex gap-2 font-semibold items-center">
            <p className="text-3xl md:text-4xl text-white">250 +</p>
            <p className="flex w-[97px] text-white">Clientes Satisfechos</p>
          </div>
        </div>
        <div className="z-0 flex justify-center">
          <img
            src="/img/ventajas.webp"
            alt="Ventajas"
            className="rounded-2xl shadow-2xl xl:max-w-[650px] "
          />
        </div>
      </div>
    </div>
  );
}
