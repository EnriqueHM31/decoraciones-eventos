import Navegacion from "@/components/Navegacion";
import GaleriaImagenes from "@/components/GaleriaImagenes";
import Filtros from "@/components/Filtros";
import { ALTARESJSON } from "@/assets/mooks/altares";
import TituloPagina from "@/components/TituloPagina";

export default function Altares() {
    const MOOKS = ALTARESJSON;
    return (
        <>
            <TituloPagina titulo="Altares" />
            <Navegacion />

            <section className="flex flex-col items-center justify-center gap-1 md:gap-7 py-2 px-2 w-full ">
                <Filtros />
                <GaleriaImagenes MOOKS={MOOKS} tipo="altares" />
            </section>
        </>
    );
}