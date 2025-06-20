import { useGaleriaStore } from "@/store/useGaleriaStore";
import { coloresDisponibles, generosDisponibles } from "@/assets/ts/filtros";
import ZonaFiltroGenero from "../Filtros/ZonaFiltroGenero";
import ZonaButtonAbrirFiltros from "../Filtros/ZonaButtonAbrirFiltros";
import { useZonaFiltros } from "@/hooks/ZonaFiltros";
import ZonaFiltroColores from "../Filtros/ZonaFiltroColores";
import ZonaButtonQuitarFiltros from "../Filtros/ZonaButtonQuitarFiltros";


export default function ZonaFiltros() {
    const { filtroGenero, filtroColores } = useGaleriaStore();
    const { handleColorActivoArray, handleGeneroLowerCase, abierto } = useZonaFiltros();
    const generoActivo = handleGeneroLowerCase(generosDisponibles, filtroGenero);



    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            {/* Botón toggle sólo visible en móvil */}
            <ZonaButtonAbrirFiltros />

            {/* Contenedor filtros con animación y estilos responsive */}
            <div
                id="zona-filtros-panel"
                className={`transition-[max-height,opacity] duration-500 ease-in-out
                            ${abierto ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                            md:max-h-full md:opacity-100 md:flex md:flex-wrap md:gap-4 md:items-center md:justify-center
                            rounded-md p-4 md:p-0 overflow-hidden gap-2 flex flex-col md:flex-row
                        `}
            >
                {/* Etiqueta Filtros */}
                {(filtroColores.length > 0 || filtroGenero) && (
                    <p className="text-sm text-white font-bold px-4 py-2 rounded-md md:flex block  md:mb-0">
                        Filtros
                    </p>
                )}

                {/* Filtro de género */}
                {filtroGenero && generoActivo && (
                    <ZonaFiltroGenero generoActivo={generoActivo} />
                )}

                {/* Filtros de colores */}
                {filtroColores.map((color) => {
                    const { colorActivo } = handleColorActivoArray(coloresDisponibles, color);
                    if (!colorActivo) return null;
                    const { nombre, clase, texto, bordeCirculo } = colorActivo;

                    return (
                        <ZonaFiltroColores nombre={nombre} clase={clase} texto={texto} bordeCirculo={bordeCirculo} />
                    );
                })}

                {/* Botón limpiar filtros */}
                {(filtroColores.length > 0 || filtroGenero) && (
                    <ZonaButtonQuitarFiltros />
                )}
            </div>
        </div>
    );
}
