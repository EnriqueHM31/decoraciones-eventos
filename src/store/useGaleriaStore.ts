import { create } from "zustand";
import type { GaleriaStore, FiltroGenero } from "@/types";


const setFiltroGenero = (set: any) => (genero: FiltroGenero) => {
    set({ filtroGenero: genero });
};

const toggleColor = (set: any) => (color: string) => {
    set((state: GaleriaStore) => ({
        filtroColores: state.filtroColores.includes(color)
            ? state.filtroColores.filter((c) => c !== color)
            : [...state.filtroColores, color],
    }));
};

const limpiarFiltros = (set: any) => () => {
    set({ filtroGenero: null, filtroColores: [] });
};

const removeGenero = (set: any) => () => {
    set({ filtroGenero: null });
};

const removeColor = (set: any) => (color: string) => {
    set((state: GaleriaStore) => ({
        filtroColores: state.filtroColores.filter((c) => c !== color),
    }));
};

// 👉 Store principal
export const useGaleriaStore = create<GaleriaStore>((set) => ({
    filtroGenero: null,
    filtroColores: [],
    setFiltroGenero: setFiltroGenero(set),
    toggleColor: toggleColor(set),
    limpiarFiltros: limpiarFiltros(set),
    removeGenero: removeGenero(set),
    removeColor: removeColor(set),
}));