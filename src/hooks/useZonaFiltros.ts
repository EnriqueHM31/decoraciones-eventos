import { useState } from "react";

import type { ColorProps, GeneroProps } from "@/types";

export function useZonaFiltros() {
    const [abierto, setAbierto] = useState(false);

    const handleTamaño = () => {
        if (window.innerWidth < 768) setAbierto(false);
    }

    const handleAbrirVistaFiltros = () => {
        setAbierto((v) => !v);
    }

    function handleColorActivoArray(
        lista: ColorProps[],
        nombre: string
    ): { colorActivo?: ColorProps } {
        const colorActivo = lista.find(
            (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
        );
        return { colorActivo };
    }

    const handleGeneroLowerCase = (generosDisponibles: GeneroProps[], filtroGenero: string | null) => {
        return generosDisponibles.find(
            (g) => g.genero.toLowerCase() === filtroGenero?.toLowerCase()
        );
    }

    return {
        abierto,
        setAbierto,
        handleTamaño,
        handleAbrirVistaFiltros,
        handleColorActivoArray,
        handleGeneroLowerCase
    }

}