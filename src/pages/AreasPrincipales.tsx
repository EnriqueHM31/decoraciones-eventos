import GaleriaImagenes from "@/components/GaleriaImagenes";
import Navegacion from "@/components/Navegacion";
import TituloPagina from "@/components/TituloPagina";
import { AREASPRINCIPALESJSON } from "@/assets/mooks/Areas-principales";

export default function AreasPrincipales() {
    return (
        <>
            <TituloPagina titulo="Areas Principales" />

            <Navegacion />

            <section className="flex flex-col items-center justify-center gap-1 md:gap-7 py-2 px-2 w-full ">
                <GaleriaImagenes MOOKS={AREASPRINCIPALESJSON} tipo="areas-principales" />
            </section>



        </>
    );
}