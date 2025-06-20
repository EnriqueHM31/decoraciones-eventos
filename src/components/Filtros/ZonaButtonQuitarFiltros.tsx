import { useZonaFiltros } from "@/hooks/ZonaFiltros";
import { useGaleriaStore } from "@/store/useGaleriaStore";

export default function ZonaButtonQuitarFiltros() {

    const { limpiarFiltros } = useGaleriaStore();
    const { handleTamaño } = useZonaFiltros();
    return (
        <button
            onClick={() => {
                limpiarFiltros();
                handleTamaño();
            }}
            className="flex items-center gap-2 mt-4 xl:mt-0 px-4 py-2 rounded-md text-sm border border-black/70 text-white bg-primary hover:bg-gray-500 transition-colors duration-500 ease-in-out"
            title="Quitar filtros"
            aria-label="Quitar filtros"
            type="button"
        >
            Quitar filtros
        </button>
    )
}