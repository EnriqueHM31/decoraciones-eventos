import { create } from "zustand";

type FiltroGenero = "Hombre" | "Mujer" | "Santos" | null;

interface GaleriaStore {
    filtroGenero: FiltroGenero;
    filtroColores: string[];
    setFiltroGenero: (genero: FiltroGenero) => void;
    toggleColor: (color: string) => void;
    limpiarFiltros: () => void;
}

export const useGaleriaStore = create<GaleriaStore>((set) => ({
    filtroGenero: null,
    filtroColores: [],
    setFiltroGenero: (genero) => set({ filtroGenero: genero }),
    toggleColor: (color) =>
        set((state) => ({
            filtroColores: state.filtroColores.includes(color)
                ? state.filtroColores.filter((c) => c !== color)
                : [...state.filtroColores, color],
        })),
    limpiarFiltros: () => set({ filtroGenero: null, filtroColores: [] }),
}));
