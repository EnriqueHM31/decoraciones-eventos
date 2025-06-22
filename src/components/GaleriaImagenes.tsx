import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Galeria/ZonaFiltros";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";
import type { GaleriaProps } from "@/types";




export default function GaleriaImagenes({ MOOKS, tipo }: GaleriaProps) {
    const { columnas, EstructuraImagen, esAltar } = useGaleria({ MOOKS, tipo });
    const esAltarArray = Array.isArray(MOOKS) && MOOKS.length > 0 && "genero" in MOOKS[0];

    // Total de imágenes
    const totalImagenes = columnas.reduce((total, columna) => total + columna.length, 0);

    // Clases dinámicas de grid
    const GridLaptopMax8 =
        esAltarArray
            ? totalImagenes < 9 && totalImagenes > 0
                ? "lg:grid-cols-2"
                : "lg:grid-cols-4"
            : "lg:grid-cols-2"; // decoraciones siempre con 2 columnas

    const GridAltoMax4 =
        esAltarArray && totalImagenes < 4 && totalImagenes > 0
            ? "min-h-[80dvh]"
            : "";

    return (
        <>
            <ZonaFiltros />
            {
                columnas.every((columna) => columna.length === 0) && (
                    <SinImagenes />
                )

            }

            <div className={`grid grid-cols-1 sm:grid-cols-2 ${GridLaptopMax8}  ${GridAltoMax4} gap-4 md:max-w-11/12 w-full`}>
                {columnas.map((columna, groupIndex) => (
                    <div key={groupIndex} className="flex flex-col gap-4">
                        {columna.map((item, index) => {
                            let { heightClass, isLazy } = EstructuraImagen({
                                groupIndex,
                                index,
                                arrayGaleria: columna,
                            });

                            const galeria = item.galeria; // item debe ser de tipo GaleriaColumnasProps

                            if (!esAltar(galeria)) {
                                heightClass = "h-[50dvh]";
                            }
                            return (
                                <ImagenGaleria
                                    key={index}
                                    altar={esAltar(galeria) ? galeria : undefined}
                                    decoracion={!esAltar(galeria) ? galeria : undefined}
                                    index={index}
                                    heightClass={heightClass}
                                    isLazy={isLazy}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
        </>
    );
}
