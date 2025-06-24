import { useGaleriaStore } from "@/store/useGaleriaStore";
import type { EstructuraImagenProps, GaleriaProps, GaleriaColumnasProps, Altar, Decoracion, AreaPrincipal } from "@/types";

export function useGaleria({ MOOKS, tipo }: GaleriaProps) {
    const { filtroGenero, filtroColores } = useGaleriaStore();
    let imagenesGaleria: GaleriaColumnasProps[] = [];

    // Generar las imágenes filtradas según tipo
    if (tipo === "altares") {
        imagenesGaleria = (MOOKS as Altar[])
            .filter((galeria) => galeria.imagenes.length > 0)
            .filter((galeria) => {
                const cumpleGenero = !filtroGenero || galeria.genero === filtroGenero;
                const cumpleColores =
                    filtroColores.length === 0 ||
                    filtroColores.some((color) => galeria.colores.includes(color));
                return cumpleGenero && cumpleColores;
            })
            .map((galeria) => ({
                galeria,
                img: galeria.imagenes[0],
            }));


    } if (tipo === "decoraciones") {
        imagenesGaleria = (MOOKS as Decoracion[])
            .filter((galeria) => galeria.imagenes.length > 0)
            .map((galeria) => ({
                galeria,
                img: galeria.imagenes[0],
            }));
    } if (tipo === "areas-principales") {
        imagenesGaleria = (MOOKS as AreaPrincipal[])
            .filter((galeria) => galeria.imagenes.length > 0)
            .map((galeria) => ({
                galeria,
                img: galeria.imagenes[0],
            }));
    }

    // Determinar número de columnas dinámicamente
    const numColumnas = imagenesGaleria.length < 8 ? 2 : 4;

    // Dividir en columnas
    const columnas = organizarPorColumnas(imagenesGaleria, numColumnas);

    // Función para determinar estructura visual de cada imagen
    const EstructuraImagen = ({ groupIndex, index, arrayGaleria }: EstructuraImagenProps) => {

        if (!arrayGaleria) return { heightClass: "", isLazy: false };

        if (arrayGaleria.length === 1) return { heightClass: "sm:h-[60vh]", isLazy: false };




        const isEvenGroup = groupIndex % 2 === 0;
        const use20vh = (index % 2 !== 0 && isEvenGroup) || (index % 2 === 0 && !isEvenGroup);
        const heightClass = use20vh ? "sm:h-[20vh] h-[40vh]" : "sm:h-[60vh] h-[40vh]";
        const isLazy = index >= 4;

        return {
            heightClass,
            isLazy,
        };
    };


    function esAltar(obj: Altar | Decoracion | AreaPrincipal | null): obj is Altar {
        return obj !== null && "genero" in obj && "colores" in obj || obj !== null && "imagenes" in obj;
    }

    const totalImagenes = columnas.reduce((total, columna) => total + columna.length, 0);

    const clasesGrid =
        totalImagenes > 0
            ? `${totalImagenes < 9 ? "lg:grid-cols-2" : " lg:grid-cols-4"} ${totalImagenes < 4 ? "min-h-[80dvh]" : ""
            }`
            : "";

    const HAYIMAGENES = columnas.every((columna) => columna.length === 0);

    return {
        columnas,
        EstructuraImagen,
        esAltar,
        clasesGrid,
        HAYIMAGENES
    };
}

// Función auxiliar para dividir en columnas
function organizarPorColumnas<T>(array: T[], columnas: number): T[][] {
    const result: T[][] = Array.from({ length: columnas }, () => []);
    array.forEach((item, index) => {
        result[index % columnas].push(item);
    });
    return result;
}
