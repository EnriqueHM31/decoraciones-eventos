import { useGaleriaStore } from "@/store/useGaleriaStore";
import { textoDisponible } from "@/assets/ts/filtros";

export default function SinImagenes() {
    const { filtroGenero, filtroColores } = useGaleriaStore();

    return (
        <div className="flex flex-col items-center  gap-4 text-center h-screen w-full  px-4 xl:px-0
                    ">
            <h2 className="text-lg lg:text-4xl font-bold text-black text-center">
                {
                    textoDisponible({ filtroGenero, filtroColores })
                }

            </h2>
            <p className="text-xs xl:text-lg text-black">
                No hay altares disponibles para este filtro, intenta cambiar el filtro
            </p>
        </div>
    )
}