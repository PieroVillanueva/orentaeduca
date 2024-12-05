export default function TextoServicio({ informacion }) {
  const {
    queEs,
    queEsContenido,
    comoFuncionaSubTexto,
    comoFunciona,
    cuandoEsUtilSubTexto,
    cuandoEsUtil,
    beneficios,
    participanParrafos,
    participan,
    comenzar,
  } = informacion;
  return (
    <div className="container flex flex-col pt-12 pb-12 gap-4 mx-auto px-8 lg:px-0 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">¿Qué es {queEs}?</h1>
      {queEsContenido.map((parrafo, index) => (
        <p className="text-lg mb-6" key={index}>
          {parrafo}
        </p>
      ))}

      <h2 className="text-2xl font-semibold mb-4">¿Cómo Funciona?</h2>
      <p className="text-lg mb-6">{comoFuncionaSubTexto}</p>

      <ul className="list-disc pl-8 mb-6 flex flex-col gap-2">
        {comoFunciona.map((item, index) => (
          <li className="text-lg" key={index}>
            <strong>{item.titulo}</strong> {item.texto}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">¿Cuándo es Útil {queEs}?</h2>
      <p className="text-lg mb-6">{cuandoEsUtilSubTexto}</p>
      <ul className="list-disc pl-8 mb-6 flex flex-col gap-2">
        {cuandoEsUtil.map((item, index) => (
          <li className="text-lg" key={index}>
            <strong>{item.titulo}</strong> {item.texto}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Beneficios de {queEs}</h2>
      <ul className="list-disc pl-8 mb-6 flex flex-col gap-2">
        {beneficios.map((item, index) => (
          <li className="text-lg" key={index}>
            <strong>{item.titulo}</strong> {item.texto}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        ¿Quiénes Pueden Beneficiarse de {queEs}?
      </h2>
      {participanParrafos.map((parrafo, index) => (
        <p className="text-lg mb-6" key={index}>
          {parrafo}
        </p>
      ))}

      <ul
        className={`${
          participan.length == 0 && "hidden"
        } list-disc pl-8 mb-6 flex flex-col gap-2`}
      >
        {participan.map((item, index) => (
          <li className="text-lg" key={index}>
            <strong>{item.titulo}</strong> {item.texto}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">¿Cómo Comenzar?</h2>
      {comenzar.map((parrafo, index) => (
        <p className="text-lg mb-6" key={index}>
          {parrafo}
        </p>
      ))}
    </div>
  );
}
