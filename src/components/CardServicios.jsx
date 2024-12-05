import { useNavigate } from "react-router-dom";

export default function CardServicios({ servicio }) {
  const navigate = useNavigate();
  const { titulo, imagen, idServicio } = servicio;
  return (
    <div className="max-w-xs h-96 w-80 rounded-2xl shadow-2xl hover:scale-105 transition-all">
      <div className={`${imagen} max-w-xs h-96 rounded-2xl shadow-interno`}>
        <div className=" w-full h-full flex justify-end flex-col items-end">
          <h3 className="text-white px-6 pb-6 text-xl w-full font-normal">
            {titulo}
          </h3>
          <button
            onClick={() => {
              navigate(`/servicios/${idServicio}`);
            }}
            className="bg-white px-8 py-2 rounded-br-2xl rounded-tl-2xl text-typography-100 h-12 flex items-center gap-2 font-semibold
             hover:bg-secondary hover:text-white transition-all  "
          >
            Saber más
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0433 1.28342L11.0431 1.28364C10.8558 1.47114 10.7507 1.72531 10.7507 1.99031C10.7507 2.25531 10.8558 2.50947 11.0431 2.69697L11.0432 2.69708L15.3364 6.99031H1.75C1.48478 6.99031 1.23043 7.09566 1.04289 7.2832C0.855357 7.47074 0.75 7.72509 0.75 7.99031C0.75 8.25552 0.855357 8.50988 1.04289 8.69741C1.23043 8.88495 1.48478 8.99031 1.75 8.99031H15.3364L11.0461 13.2806C10.9495 13.3715 10.8719 13.4808 10.8179 13.602C10.7632 13.7247 10.7338 13.8571 10.7314 13.9914C10.7291 14.1256 10.7538 14.259 10.8041 14.3835C10.8544 14.5081 10.9292 14.6212 11.0242 14.7161C11.1191 14.8111 11.2323 14.8859 11.3568 14.9362C11.4813 14.9865 11.6147 15.0112 11.7489 15.0089C11.8832 15.0065 12.0156 14.9771 12.1383 14.9224C12.2595 14.8684 12.3688 14.7908 12.4597 14.6942L18.4568 8.69708L18.4569 8.69697C18.6442 8.50947 18.7493 8.25531 18.7493 7.99031C18.7493 7.72531 18.6442 7.47114 18.4569 7.28364L18.4568 7.28353L12.4568 1.28353L12.4567 1.28342C12.2692 1.09615 12.015 0.990967 11.75 0.990967C11.485 0.990967 11.2308 1.09615 11.0433 1.28342Z"
                fill="currentColor"
                stroke="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
