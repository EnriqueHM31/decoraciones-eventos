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

    const columnas = organizarPorColumnas(imagenesConAltar, 4);

    const EstructuraImagen = ({ groupIndex, index, }: EstructuraImagenProps & { groupIndex: number }) => {
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
