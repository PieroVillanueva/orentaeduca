export default function FormRegistroCita() {
  return (
    <div className="container m-auto pr-12 mt-[-540px] flex justify-end">
      <div className="px-8 py-8 bg-white rounded-2xl max-w-xl shadow-2xl">
        <h2 className="mb-4">Agende su Cita</h2>
        <form action="" className="flex flex-col gap-y-2">
          <p className="text-typography-500 font-bold ">Nombre Completo</p>
          <input
            type="text"
            placeholder="Juan Alvarez Mantinez"
            className="rounded-lg px-4 py-2 border-2 border-gray-300"
          />

          <div className="grid grid-cols-[2fr-1fr] grid-flow-col gap-4 ">
            <div>
              <p className="text-typography-500 font-bold pb-2">
                Motivo de Consulta
              </p>
              <select
                name="motivos"
                id="motivos"
                className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
              >
                <option value="familiar">Terapia Familiar</option>
                <option value="conductual">Terapia Cognitivo Conductual</option>
                <option value="lenguaje">Terapida de Lenguaje</option>
                <option value="neuropsicologica">
                  Evaluación Neuropsicológica
                </option>
                <option value="consejeria">Orientación y Consejería</option>
                <option value="pareja">Terapia de Pareja</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <p className="text-typography-500 font-bold pb-2">Teléfono</p>
              <input
                type="tel"
                placeholder="999 888 777"
                className="rounded-lg px-4 py-2 border-2 border-gray-300 h-11 w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 grid-flow-col gap-4">
            <div>
              <p className="text-typography-500 font-bold pb-2">Especialista</p>
              <select
                name="especialistas"
                id="especialistas"
                className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
              >
                <option value="iparraguirre">Dra. Ana Iparraguirre</option>
                <option value="terrones">Dr. Alán Terrones</option>
              </select>
            </div>
            <div>
              <p className="text-typography-500 font-bold pb-2">Modalidad</p>
              <select
                name="modalidad"
                id="modalidad"
                className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
              >
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-flow-col gap-4">
            <div>
              <p className="text-typography-500 font-bold pb-2">Fecha</p>
              <input
                type="date"
                placeholder="Fecha"
                className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 w-full"
              />
            </div>
            <div>
              <p className="text-typography-500 font-bold pb-2">Hora</p>
              <select
                name="horas"
                id="horas"
                className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 w-full"
              >
                <option value="a9">9:00 a.m.</option>
                <option value="a10">10:00 a.m.</option>
                <option value="a11">11:00 a.m.</option>
                <option value="p2">2:00 p.m.</option>
                <option value="p3">3:00 p.m.</option>
                <option value="p4">4:00 p.m.</option>
                <option value="p5">5:00 p.m.</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="bg-secondary text-white font-bold px-9 py-3 rounded-2xl mt-2
                    hover:scale-105 transition-all "
          >
            AGENDAR
          </button>
        </form>
      </div>
    </div>
  );
}
