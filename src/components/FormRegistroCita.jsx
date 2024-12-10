import { useModal } from "../context/ModalContext";
import {
  horarios as horariosbd,
  especialistas as especialistasbd,
  motivos as motivosbd,
} from "../utils/Constantes";
import { pb } from "../lib/pocketbase";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  obtenerFechaConDias,
  compararFechasIguales,
  compararFechasHoy,
} from "../utils/Utils";
import FormCitaConfirmada from "./FormCitaConfirmada";

export default function FormRegistroCita() {
  const { isModalOpen, openModal, closeModal } = useModal();

  const [horariosDisponibles, setHorariosDisponibles] = useState(horariosbd);
  const [loading, setLoading] = useState(false);
  const [citas, setCitas] = useState([]);
  const [modalidad, setModalidad] = useState("presencial");
  const [registroCorrecto, setRegistroCorrecto] = useState(false);

  // Usamos Formik para manejar el estado y las validaciones del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      especialista: "carmen",
      motivo: "familiar",
      hora: "seleccionar",
      dia: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Solo se permiten letras.")
        .trim()
        .min(10, "El nombre debe tener al menos 10 caracteres.")
        .required("El nombre es obligatorio."),
      telefono: Yup.string()
        .matches(/^\d{9}$/, "El teléfono debe tener 9 dígitos.")
        .required("El teléfono es obligatorio."),
      dia: Yup.date().required("Debe seleccionar un día."),
      hora: Yup.string().notOneOf(
        ["seleccionar"],
        "Debe seleccionar una hora."
      ),
    }),
    onSubmit: async (values) => {
      try {
        // Ejecuta las dos funciones de manera paralela
        setLoading(true);
        const [existeCita, existeEnListaNegra] = await Promise.all([
          buscarExisteCita(values),
          buscarExisteEnListaNegra(values),
        ]);

        // Verifica los resultados
        if (existeCita) {
          setLoading(false);
          alert("Ya existe una cita en ese horario, actualice la página.");
        } else if (existeEnListaNegra) {
          setLoading(false);
          alert("Ha ocurrido un error."); // Lista negra
        } else {
          enviarCita(values); // Enviar la cita
        }
      } catch (error) {
        console.error("Error", error);
        alert(
          "Ha ocurrido un error inesperado, por favor actualice la página."
        );
      }
    },
  });

  const enviarCita = async (data) => {
    try {
      console.log(data);
      data.turno = parseInt(data.hora);
      data.nombre = data.nombre.trim();
      const record = await pb.collection("citas").create(data);
      console.log(record); // Agregar la cita a la lista de citas
      setCitas([...citas, record]);
      // alert("Cita agendada correctamente");
      setRegistroCorrecto(true);
      // closeModal();
      // formik.resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const buscarExisteCita = async (data) => {
    try {
      data.turno = parseInt(data.hora);

      const fechaConvertida = new Date(data.dia + "T00:00:00.000Z")
        .toISOString()
        .replace("T", " ")
        .toString();

      const respuestaa = await pb
        .collection("vCitas")
        .getFirstListItem(
          `dia="${fechaConvertida}" && turno="${data.turno}" && especialista="${data.especialista}"`,
          {}
        );
      return respuestaa ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  const buscarExisteEnListaNegra = async (data) => {
    try {
      const respuestaa = await pb
        .collection("listaNegra")
        .getFirstListItem(`telefono=${data.telefono}`, {});
      console.log(respuestaa);
      return respuestaa ? true : false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    let nuevosHorarios = horariosbd;
    // Filtrar los horarios disponibles de acuerdo al día y las citas
    if (citas && formik.values.dia) {
      nuevosHorarios = nuevosHorarios.filter(
        (horario) =>
          !citas.some(
            (cita) =>
              compararFechasIguales(cita.dia, formik.values.dia) &&
              cita.turno === horario.turno
          )
      );
    }

    // Filtrar los horarios disponibles de acuerdo a la modalidad
    if (modalidad === "presencial") {
      nuevosHorarios = nuevosHorarios.filter(
        (horario) => parseInt(horario.turno) <= 10
      );
    } else {
      nuevosHorarios = nuevosHorarios.filter(
        (horario) => parseInt(horario.turno) > 10
      );
    }
    console.log(new Date(), new Date().getHours(), new Date().getMinutes());

    const diaActual = new Date();
    if (compararFechasHoy(formik.values.dia)) {
      const horaActual = diaActual.getHours(),
        minutoActual = diaActual.getMinutes();

      nuevosHorarios = nuevosHorarios.filter(
        (horario) =>
          (horario.turno != "12" && horario.inicio > horaActual) ||
          (horario.turno == "12" &&
            (20 > horaActual || (20 == horaActual && minutoActual < 30)))
      );
    }

    setHorariosDisponibles(nuevosHorarios);
    formik.setFieldValue("hora", "seleccionar");
  }, [modalidad, formik.values.dia, citas]);

  const getCitas = async () => {
    try {
      const data = await pb.collection("vCitas").getFullList({});
      console.log(data);
      setCitas(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCitas();
    setRegistroCorrecto(false);
  }, []);

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <>
          {/* Fondo oscuro */}
          <div className="fixed inset-0 bg-black opacity-50 z-20" />
          {/* Contenedor del modal */}
          <div className="fixed inset-0 flex justify-center items-center z-30 mx-4 md:mx-0">
            <div className="px-8 py-8 bg-white rounded-2xl max-w-xl w-full shadow-2xl relative">
              {!registroCorrecto && (
                <>
                  <h2 className="mb-4 text-2xl font-semibold text-center">
                    Agende su Cita
                  </h2>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="flex flex-col gap-y-4"
                  >
                    <p className="text-typography-500 font-bold">
                      Nombre Completo
                    </p>
                    <input
                      type="text"
                      placeholder="Juan Alvarez Mantinez"
                      disabled={loading}
                      className="rounded-lg px-4 py-2 border-2 border-gray-300 w-full"
                      {...formik.getFieldProps("nombre")}
                      onChange={(e) => {
                        // Filtrar solo letras
                        let value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                        if (value.length > 50) {
                          value = value.substring(0, 50);
                        }
                        formik.setFieldValue("nombre", value);
                      }}
                    />
                    {formik.touched.nombre && formik.errors.nombre && (
                      <p className="text-red-500 text-sm">
                        {formik.errors.nombre}
                      </p>
                    )}

                    {/* Especialista y Modalidad */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Especialista
                        </p>
                        <select
                          {...formik.getFieldProps("especialista")}
                          disabled={loading}
                          className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
                        >
                          {especialistasbd.map((dEspecialista, index) => (
                            <option value={dEspecialista.value} key={index}>
                              {dEspecialista.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Modalidad
                        </p>
                        <select
                          onChange={(e) => setModalidad(e.target.value)}
                          value={modalidad}
                          disabled={loading}
                          className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
                        >
                          <option value="presencial">Presencial</option>
                          <option value="virtual">Virtual</option>
                        </select>
                      </div>
                    </div>

                    {/* Motivo de Consulta y Teléfono */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Motivo de Consulta
                        </p>
                        <select
                          {...formik.getFieldProps("motivo")}
                          disabled={loading}
                          className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 h-11 w-full"
                        >
                          {motivosbd.map((dMotivo, index) => (
                            <option value={dMotivo.value} key={index}>
                              {dMotivo.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Teléfono
                        </p>
                        <input
                          type="tel"
                          placeholder="999 888 777"
                          disabled={loading}
                          className="rounded-lg px-4 py-2 border-2 border-gray-300 h-11 w-full"
                          {...formik.getFieldProps("telefono")}
                          onChange={(e) => {
                            // Filtrar solo dígitos numéricos y limitar a 9 caracteres
                            const value = e.target.value
                              .replace(/[^0-9]/g, "")
                              .slice(0, 9); // Solo números, máximo 9 dígitos
                            formik.setFieldValue("telefono", value);
                          }}
                        />
                        {formik.touched.telefono && formik.errors.telefono && (
                          <p className="text-red-500 text-sm">
                            {formik.errors.telefono}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Día y Hora */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Día
                        </p>
                        <input
                          type="date"
                          className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 w-full"
                          {...formik.getFieldProps("dia")}
                          min={obtenerFechaConDias()}
                          max={obtenerFechaConDias(7)}
                          disabled={loading}
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            if (selectedDate.getDay() === 6) {
                              formik.setFieldValue("dia", "");
                              formik.setFieldError(
                                "dia",
                                "No se puede seleccionar un domingo."
                              );
                            } else {
                              formik.setFieldValue("dia", e.target.value);
                              formik.setFieldError("dia", "");
                            }
                          }}
                        />
                        {formik.touched.dia && formik.errors.dia && (
                          <p className="text-red-500 text-sm">
                            {formik.errors.dia}{" "}
                            {/* Cambiado de 'fecha' a 'dia' */}
                          </p>
                        )}
                      </div>

                      <div>
                        <p className="text-typography-500 font-bold pb-2">
                          Hora
                        </p>
                        <select
                          {...formik.getFieldProps("hora")}
                          className="text-typography-500 rounded-lg px-3 py-2 border-2 border-gray-300 w-full"
                          disabled={!formik.values.dia || loading}
                        >
                          <option value="seleccionar">Seleccionar</option>
                          {horariosDisponibles.map((horario) => (
                            <option key={horario.turno} value={horario.turno}>
                              {horario.hora}
                            </option>
                          ))}
                        </select>
                        {formik.touched.hora && formik.errors.hora && (
                          <p className="text-red-500 text-sm">
                            {formik.errors.hora}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Botón de Enviar */}
                    {/* <button
                      type="submit"
                      disabled={loading}
                      className={` bg-secondary text-white font-bold px-9 py-3 rounded-2xl mt-4 hover:scale-105 transition-all`}
                    >
                      AGENDAR
                    </button> */}
                    <button
                      type="submit"
                      disabled={loading}
                      className={` text-white font-bold px-9 py-3 rounded-2xl mt-4  transition-all 
                        ${
                          loading
                            ? "bg-gray-400 cursor-default "
                            : "bg-secondary hover:scale-105"
                        }`}
                    >
                      {loading ? (
                        <div className="flex items-center justify-center gap-4">
                          <span className="loader" />
                          Registrando...
                        </div>
                      ) : (
                        "AGENDAR"
                      )}
                    </button>
                  </form>
                </>
              )}
              {registroCorrecto && <FormCitaConfirmada formik={formik} />}

              {/* Botón de Cerrar Modal */}
              <button
                onClick={() => {
                  closeModal();
                  setRegistroCorrecto(false);
                  formik.resetForm(); // Resetear el formulario al cerrar
                }}
                disabled={loading}
                className="absolute top-4 right-4 text-black rounded-full p-4"
              >
                <img src="/icons/cerrar.svg" alt="Cerrar" className="w-4" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
