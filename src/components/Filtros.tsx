import { useGaleriaStore } from "@/store/useGaleriaStore";
import { IoClose } from "react-icons/io5";
import FiltroColores from "./Filtros/FiltroColores";
import FiltroGenero from "./Filtros/FiltroGenero";
import BotonAbrirFiltros from "./Filtros/BotonAbrirFiltros";
import useFiltros from "@/hooks/Filtros";



export default function Filtros() {

    const { limpiarFiltros } = useGaleriaStore();
    const { asideVisible, toggleAside, cerrarAside } = useFiltros();

    return (
        <>
            {/* BOTÓN para mostrar aside en desktop/tablet */}
            <BotonAbrirFiltros toggleAside={toggleAside} />

            {/* ASIDE LATERAL FIJO */}
            <aside
                className={`
                            fixed top-0 right-0 h-screen w-full xl:w-96 bg-black xl:shadow-lg xl:border-l px-3 xl:p-6
                            transform transition-transform duration-300 ease-in-out flex flex-col gap-4 py-10
                            ${asideVisible ? "translate-x-0" : "translate-x-full"}
                            z-50
                            overflow-y-auto
                `}
            >
                <button
                    onClick={cerrarAside}
                    className="mb-4 text-right w-full text-white hover:text-gray-400 flex justify-end cursor-pointer"
                >
                    <IoClose className="xl:size-10 size-7" />
                </button>

                <h2 className="text-3xl font-semibold mb-4 text-white">Filtros</h2>

                <FiltroGenero />
                <FiltroColores />
                <button
                    onClick={() => {
                        limpiarFiltros();
                    }}
                    className="w-full py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-400 transition-colors duration-500 ease-in-out "
                >
                    Limpiar filtros
                </button>
            </aside>

            {asideVisible && (
                <div
                    onClick={cerrarAside}
                    className="fixed inset-0 bg-black/60 bg-opacity-30 z-40 "
                />
            )}

        </>
    );
}
