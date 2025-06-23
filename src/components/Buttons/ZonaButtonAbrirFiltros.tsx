
export default function ZonaButtonAbrirFiltros({ abierto, handleAbrirVistaFiltros }: { abierto: boolean, handleAbrirVistaFiltros: () => void }) {


    return (
        <div className="w-full flex justify-end md:hidden ">
            <button
                onClick={handleAbrirVistaFiltros}
                className="bg-primary text-white px-4 py-2 rounded-md"
                aria-expanded={abierto}
                aria-controls="zona-filtros-panel"
                aria-label={abierto ? "Cerrar filtros" : "Ver filtros"}
                type="button"
            >
                {abierto ? "Cerrar filtros" : "Ver filtros"}
            </button>
        </div>
    )
}