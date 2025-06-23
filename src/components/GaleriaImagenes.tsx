import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Galeria/ZonaFiltros";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";
import type { GaleriaProps } from "@/types";
import { DECORACIONESJSON } from "@/assets/mooks/decoraciones";

export default function GaleriaImagenes({ MOOKS, tipo }: GaleriaProps) {
    const { columnas, EstructuraImagen, clasesGrid, esAltar, HAYIMAGENES } = useGaleria({ MOOKS, tipo });

    if (HAYIMAGENES) {
        return (
            <>
                <ZonaFiltros />
                <SinImagenes />
            </>
        );
    }

    return (
        <>
            <ZonaFiltros />

            {
                esAltar(columnas[0][0].galeria) ? (

                    < div className={`grid grid-cols-1 sm:grid-cols-2 ${clasesGrid}  gap-4 md:max-w-11/12 w-full`}>
                        {columnas.map((columna, groupIndex) => (
                            <div key={groupIndex} className="flex flex-col gap-4">
                                {columna.map((item, index) => {
                                    const galeria = item.galeria;
                                    const isAltar = esAltar(galeria);

                                    const { heightClass, isLazy } = EstructuraImagen({
                                        groupIndex,
                                        index,
                                        arrayGaleria: columna,
                                    });


                                    return (
                                        <ImagenGaleria
                                            key={index}
                                            altar={isAltar ? galeria : undefined}
                                            index={index}
                                            heightClass={heightClass}
                                            isLazy={isLazy}
                                        />
                                    );
                                })}
                            </div>
                        ))}
                    </ div>
                ) : (
                    < div className={`grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 md:max-w-11/12 w-full`}>
                        {
                            DECORACIONESJSON.map((decoracion, index) => (
                                <div key={index} className="flex flex-col gap-4">
                                    <ImagenGaleria
                                        key={index}
                                        decoracion={decoracion}
                                        index={index}
                                        heightClass="h-[50dvh]"
                                        isLazy={false}
                                    />
                                </div>
                            ))
                        }

                    </div>

                )
            }
        </>
    );
}
