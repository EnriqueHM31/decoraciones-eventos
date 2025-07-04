import { useGaleriaStore } from "@/store/useGaleriaStore";
import { IoMdMan, IoMdWoman } from "react-icons/io";
import { GiChurch } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useZonaFiltros } from "@/hooks/useZonaFiltros";
import type { GeneroProps } from "@/types";

const iconosGenero = {
    IoMdMan: <IoMdMan className="xl:size-8 lg:size-6 size-6" />,
    IoMdWoman: <IoMdWoman className="xl:size-8 lg:size-6 size-6" />,
    GiChurch: <GiChurch className="xl:size-8 lg:size-6 size-6" />,
    FaUserFriends: <FaUserFriends className="xl:size-8 lg:size-6 size-6" />,
};




export default function EtiquetaFiltroGenero({ generoActivo }: { generoActivo: GeneroProps }) {

    const { color, genero, icono } = generoActivo;
    const { handleTamaño } = useZonaFiltros();
    const { removeGenero } = useGaleriaStore();

    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 justify-between text-md text-white md:rounded-md ${color}`}
        >
            <div className="flex items-center gap-2">
                <span className="size-6 text-white flex items-center justify-center ">
                    {iconosGenero[icono]}
                </span>
                <span className="capitalize">{genero}</span>
            </div>
            <button
                onClick={() => {
                    removeGenero();
                    handleTamaño();
                }}
                className="hover:text-black text-white/80"
                aria-label={`Quitar filtro género ${genero}`}
                type="button"
                aria-labelledby={`filtro-genero-${genero}-title`}
                title={`Quitar filtro género ${genero}`}
            >
                <IoClose className="w-4 h-4" />
            </button>
        </div>
    )
}