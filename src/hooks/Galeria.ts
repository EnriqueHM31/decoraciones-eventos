import { ALTARESJSON } from "@/assets/mooks/altares";
import { useGaleriaStore } from "@/store/useGaleriaStore";
import type { EstructuraImagenProps } from "@/types";
export function useGaleria() {
    const { filtroGenero, filtroColores } = useGaleriaStore();

    const imagenesConAltar = ALTARESJSON
        .filter((altar) => altar.imagenes.length > 0)
        .filter((altar) => {
            const cumpleGenero = !filtroGenero || altar.genero === filtroGenero;
            const cumpleColores =
                filtroColores.length === 0 ||
                filtroColores.some((color) => altar.colores.includes(color));
            return cumpleGenero && cumpleColores;
        })
        .map((altar) => ({ altar, img: altar.imagenes[0] }));

    // 🧠 Detectar cantidad de columnas dinámicamente
    const numColumnas = imagenesConAltar.length < 8 ? 2 : 4;

    const columnas = organizarPorColumnas(imagenesConAltar, numColumnas);

    const EstructuraImagen = ({ groupIndex, index }: EstructuraImagenProps & { groupIndex: number }) => {

        if (imagenesConAltar.length === 2) {
            return {
                heightClass: "sm:h-[60vh]",
                isLazy: false
            }
        };

        const isEvenGroup = groupIndex % 2 === 0;
        const use20vh = (index % 2 !== 0 && isEvenGroup) || (index % 2 === 0 && !isEvenGroup);
        const heightClass = use20vh ? "sm:h-[20vh] h-[40vh]" : "sm:h-[60vh] h-[40vh]";
        const isLazy = index >= 4;
        return {
            heightClass,
            isLazy,
        };
    };

    return {
        columnas,
        EstructuraImagen,
    };
}

function organizarPorColumnas<T>(array: T[], columnas: number): T[][] {
    const result: T[][] = Array.from({ length: columnas }, () => []);
    array.forEach((item, index) => {
        result[index % columnas].push(item);
    });
    return result;
}
