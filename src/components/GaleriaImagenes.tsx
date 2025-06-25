import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Filtros/ZonaFiltros";
import { useGaleria } from "@/hooks/useGaleria";
import CardAnimacion from "./Galeria/CardAnimacion";
import type { GaleriaProps } from "@/types";

export default function GaleriaImagenes({ MOOKS, tipo }: GaleriaProps) {
    const { HAYIMAGENES, imagenesGaleria } = useGaleria({ MOOKS, tipo });


    if (!HAYIMAGENES) return <SinImagenes />

    return (
        <>
            <ZonaFiltros />

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto py-10">
                {imagenesGaleria.map(({ galeria }, key) => (
                    <article key={key}>
                        <CardAnimacion galeriaImagenes={galeria} index={key} isLazy={true} />
                    </article>
                ))}
            </section>
            <div className="text-center text-gray-500">No hay más imágenes</div>

        </>
    );
}
