import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Galeria/ZonaFiltros";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";


export default function GaleriaAltares() {
    const { columnas, EstructuraImagen } = useGaleria();


    return (
        <>
            {
                columnas.some((columna) => columna.length === 0) && (
                    <SinImagenes />
                )
            }
            <ZonaFiltros />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-11/12">
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
