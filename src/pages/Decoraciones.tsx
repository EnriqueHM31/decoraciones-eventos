import GaleriaImagenes from "@/components/GaleriaImagenes";
import Navegacion from "@/components/Navegacion";
import TituloPagina from "@/components/ui/TituloPagina";
import { DECORACIONESJSON } from "@/assets/mooks/decoraciones";
import BotonMenu from "@/components/Filtros/BotonAbrirFiltros";


export default function Eventos() {

    const MOOKS = DECORACIONESJSON;
    return (
        <>
            <TituloPagina titulo="Decoraciones" />
            <Navegacion />
            <BotonMenu tipo="altares" />

            <section className="flex flex-col items-center justify-center gap-1 md:gap-7 py-2 px-2 w-full ">
                <GaleriaImagenes MOOKS={MOOKS} tipo="decoraciones" />
            </section>


        </>
    )
}