import { useZonaFiltros } from "@/hooks/ZonaFiltros";
import { useGaleriaStore } from "@/store/useGaleriaStore";
import { IoClose } from "react-icons/io5";
import type { ColorProps } from "@/types";

export default function EtiquetaFiltroColor({ nombre, clase, texto, bordeCirculo, }: ColorProps) {

    const { removeColor } = useGaleriaStore();
    const { handleTamaño } = useZonaFiltros();
    return (
        <div
            key={nombre}
            className={`flex items-center gap-2 px-4 py-2 justify-between md:rounded-md text-sm border border-black/70 ${texto}`}
        >
            <div className="flex gap-4 items-center">

                <div
                    className={`xl:size-4 md:rounded-full ${clase} ${bordeCirculo} size-6`}
                    aria-hidden="true"
                ></div>
                <span className="capitalize text-black text-md">{nombre}</span>
            </div>

            <button
                onClick={() => {
                    removeColor(nombre);
                    handleTamaño();
                }}
                className="hover:text-black text-black/80"
                aria-label={`Quitar filtro color ${nombre}`}
                type="button"
            >
                <IoClose className="w-4 h-4" />
            </button>
        </div>
    )
}