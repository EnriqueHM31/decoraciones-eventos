import GaleriaImagenes from "@/components/GaleriaImagenes";
import Navegacion from "@/components/Navegacion";
import TituloPagina from "@/components/TituloPagina";
import { DECORACIONESJSON } from "@/assets/mooks/decoraciones";
import BotonMenu from "@/components/Buttons/BotonMenu";


export default function Eventos() {

    const MOOKS = DECORACIONESJSON;
    return (
        <>
            <TituloPagina titulo="Decoraciones" />
            <Navegacion />
            <BotonMenu tipo="altares" />

            <section className="flex flex-col items-center justify-center gap-1 md:gap-7 py-8 md:py-10 px-2 w-full ">
                <GaleriaImagenes MOOKS={MOOKS} tipo="decoraciones" />
            </section>


        </>
    )
}