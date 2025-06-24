import type {
    GaleriaProps,
    GaleriaColumnasProps,
    Altar,
    Decoracion,
    AreaPrincipal,
} from "@/types";
import { useGaleriaStore } from "@/store/useGaleriaStore";

export function useGaleria({ MOOKS, tipo }: GaleriaProps) {
    const { filtroGenero, filtroColores } = useGaleriaStore();

    let imagenesGaleria: GaleriaColumnasProps[] = [];

    if (tipo === "altares") {
        imagenesGaleria = (MOOKS as Altar[])
            .filter((item) => item.imagenes.length > 0)
            .filter((item) => {
                const generoOk = !filtroGenero || item.genero === filtroGenero;
                const coloresOk =
                    filtroColores.length === 0 ||
                    filtroColores.some((color) => item.colores.includes(color));
                return generoOk && coloresOk;
            })
            .map((item) => ({
                galeria: item,
                img: item.imagenes[0],
            }));
    } else {
        imagenesGaleria = (MOOKS as (Decoracion | AreaPrincipal)[])
            .filter((item) => item.imagenes.length > 0)
            .map((item) => ({
                galeria: item,
                img: item.imagenes[0],
            }));
    }

    const HAYIMAGENES = imagenesGaleria.length > 0;

    return {
        imagenesGaleria,
        HAYIMAGENES,
    };
}
