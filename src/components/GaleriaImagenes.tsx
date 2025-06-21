import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Galeria/ZonaFiltros";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";


export default function GaleriaAltares() {
    const { columnas, EstructuraImagen } = useGaleria();
    const totalImagenes = columnas.reduce((total, columna) => total + columna.length, 0);
    const GridLaptopMax8 = totalImagenes < 9 && totalImagenes > 0 ? "lg:grid-cols-2" : "lg:grid-cols-4"
    const GridAltoMax4 = totalImagenes < 4 && totalImagenes > 0 ? "min-h-[80dvh]" : ""

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
                        {columna.map((altarData, index) => {
                            const { heightClass, isLazy } = EstructuraImagen({ groupIndex, index });
                            return (
                                <ImagenGaleria
                                    key={index}
                                    altar={altarData}
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
