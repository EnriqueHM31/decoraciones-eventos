import GaleriaImagenes from "@/components/GaleriaImagenes";
import Navegacion from "@/components/Navegacion";
import TituloPagina from "@/components/ui/TituloPagina";
import { DECORACIONESJSON } from "@/assets/mooks/decoraciones";

export default function Eventos() {

    const MOOKS = DECORACIONESJSON;
    return (
        <>
            <TituloPagina titulo="Decoraciones" />
            <Navegacion />

            <section className="min-h-[90dvh] flex flex-col items-center justify-center">
                <GaleriaImagenes MOOKS={MOOKS} tipo="decoraciones" />
            </section>
        </>
    )
}