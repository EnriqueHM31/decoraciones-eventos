import Navegacion from "@/components/Navegacion";
import GaleriaAltares from "@/components/GaleriaImagenes";
import Filtros from "@/components/Filtros";

export default function Altares() {
    return (
        <>
            <Navegacion />

            <section className="flex flex-col items-center justify-center gap-1 xl:gap-7 py-2 px-2 w-full ">
                <Filtros />
                <GaleriaAltares />
            </section>

        </>
    );
}