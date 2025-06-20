import { ALTARESJSON } from "@/assets/mooks/altares";
import { useGaleriaStore } from "@/store/useGaleriaStore";
import type { EstructuraImagenProps, GrupoAltaresProps } from "@/types";

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

    const chunked = chunkArray(imagenesConAltar, 4);

    const EstructuraImagen = ({ groupIndex, index, countPares, countImpares }: EstructuraImagenProps) => {

        const isEvenGroup = groupIndex % 2 === 0;
        const use20vh = (index % 2 === 0 && isEvenGroup) || (index % 2 !== 0 && !isEvenGroup);
        const heightClass = use20vh ? "sm:h-[20vh] h-[40vh]" : "sm:h-[60vh] h-[40vh]";
        const isLazy = (index % 2 === 0 ? countPares : countImpares) >= 2;
        return {
            heightClass,
            isLazy
        }
    }

    const DividirSeccionesGaleria = (grupo: GrupoAltaresProps[]) => {
        const countPares = grupo.filter((_, i) => i % 2 === 0).length;
        const countImpares = grupo.filter((_, i) => i % 2 !== 0).length;
        return {
            countPares,
            countImpares
        }
    }

    return {
        chunked,
        EstructuraImagen,
        DividirSeccionesGaleria
    }
}


function chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}