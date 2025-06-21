import { useGaleriaStore } from "@/store/useGaleriaStore";
import { generosDisponibles } from "@/assets/ts/filtros";
import { IoMdMan, IoMdWoman } from "react-icons/io";
import { GiChurch } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import type { FiltroGenero } from "@/types";

const iconMap = {
    IoMdMan: <IoMdMan className="xl:size-7" />,
    IoMdWoman: <IoMdWoman className="xl:size-7" />,
    GiChurch: <GiChurch className="xl:size-7" />,
    FaUserFriends: <FaUserFriends className="xl:size-7" />,

};

export default function FiltroGenero() {

    const { setFiltroGenero, filtroGenero } = useGaleriaStore();
    return (
        <div className=" flex flex-col gap-2">
            <h3 className="font-semibold mb-2 px-4 py-2 bg-white text-black w-fit rounded-2xl">Para</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-4 mb-5">
                {generosDisponibles.map(({ genero, color, icono }, index) => (
                    <button
                        key={index}
                        onClick={() => setFiltroGenero(genero as FiltroGenero)} // ya no hay error
                        className={`px-4 py-2 rounded flex gap-4 items-center border ${filtroGenero === genero
                            ? `${color} text-white`
                            : "bg-black border-white text-white"
                            }`}
                        aria-label={`Cambiar filtro de género ${genero}`}
                        title={`Cambiar filtro de género ${genero}`}
                        type="button"
                        aria-labelledby={`filtro-genero-${genero}-title`}
                    >
                        {iconMap[icono]}
                        {genero.toLocaleUpperCase()}
                    </button>
                ))}
            </div>
        </div>

    )
}