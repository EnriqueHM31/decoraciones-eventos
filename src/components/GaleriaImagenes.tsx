import { useEffect, useRef, useState } from "react";
import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Filtros/ZonaFiltros";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";
import type { GaleriaProps } from "@/types";

export default function GaleriaImagenes({ MOOKS, tipo }: GaleriaProps) {
    const { HAYIMAGENES, imagenesGaleria } = useGaleria({ MOOKS, tipo });

    const [visibleCount, setVisibleCount] = useState(20);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleCount((prev) => prev + 20);
                }
            },
            {
                rootMargin: "100px",
            }
        );

        const current = loadMoreRef.current;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, []);

    if (!HAYIMAGENES) {
        console.log("sin imagenes");
        return (
            <>
                <ZonaFiltros />
                <SinImagenes />
            </>
        );
    }

    const imagenesVisibles = imagenesGaleria.slice(0, visibleCount);

    return (
        <>
            <ZonaFiltros />

            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 max-w-11/12s md:max-w-10/12 mx-auto py-10">
                {imagenesVisibles.map(({ galeria }, index) => (
                    <article key={index}>
                        <ImagenGaleria galeriaImagenes={galeria} index={index} isLazy={false} />
                    </article>
                ))}
            </section>

            {/* Punto de referencia para cargar más */}
            <div ref={loadMoreRef} className="h-10" />
        </>
    );
}
