import SinImagenes from "./Galeria/SinImagenes";
import ZonaFiltros from "./Galeria/ZonaFiltros";
import PlaceholdersGrid from "./Galeria/PlaceholdersGrid";
import { useGaleria } from "@/hooks/Galeria";
import ImagenGaleria from "./Galeria/ImagenGaleria";

export default function GaleriaAltares() {
    const { chunked, EstructuraImagen, DividirSeccionesGaleria } = useGaleria();
    return (
        <>
            {
                chunked.length === 0 && (
                    <SinImagenes />
                )
            }
            <ZonaFiltros />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 md:max-w-11/12 w-full " >
                {
                    chunked.map((grupo, groupIndex) => {
                        const { countPares, countImpares } = DividirSeccionesGaleria(grupo);

                        return (
                            <div key={groupIndex} className="grid gap-8">
                                {grupo.map((altar, index) => {
                                    const { heightClass, isLazy } = EstructuraImagen({ groupIndex, index, countPares, countImpares });

                                    return (
                                        <ImagenGaleria key={index} altar={altar} index={index} isLazy={isLazy} heightClass={heightClass} />
                                    );
                                })}

                                {grupo.length < 4 &&
                                    <PlaceholdersGrid groupIndex={groupIndex} grupo={grupo} />
                                }
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
