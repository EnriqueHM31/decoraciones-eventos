import { useGaleriaStore } from "@/store/useGaleriaStore";
import { coloresDisponibles } from "@/assets/ts/filtros";


export default function FiltroColores() {

    const { toggleColor, filtroColores } = useGaleriaStore();
    return (
        <div className=" flex flex-col gap-2 mb-5">
            <h3 className="font-semibold mb-2 px-4 py-2 bg-white text-black w-fit rounded-2xl">Colores</h3>
            <div className="flex flex-wrap gap-3 gap-y-8">
                {coloresDisponibles.map((color) => {
                    const activo = filtroColores.includes(color.nombre);
                    return (
                        <button
                            key={color.nombre}
                            onClick={() => toggleColor(color.nombre)}
                            className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors 
                ${activo ? `${color.clase} ${color.texto}` : "bg-gray-100 text-black"}`}
                        >
                            <div
                                className={`w-4 h-4 rounded-full ${color.clase} ${activo ? `border-2 ${color.bordeCirculo}` : ""
                                    }`}
                            ></div>
                            <span className="capitalize">{color.nombre}</span>
                        </button>
                    );
                })}

            </div>
        </div>
    )
}