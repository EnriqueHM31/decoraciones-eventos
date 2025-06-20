import { create, type StateCreator } from "zustand";
import type { GaleriaStore, FiltroGenero } from "@/types";

// Define el tipo correcto para `set`
type Set = Parameters<StateCreator<GaleriaStore>>[0];

// Acciones
const setFiltroGenero = (set: Set) => (genero: FiltroGenero) => {
    set({ filtroGenero: genero });
};

const toggleColor = (set: Set) => (color: string) => {
    set((state) => ({
        filtroColores: state.filtroColores.includes(color)
            ? state.filtroColores.filter((c) => c !== color)
            : [...state.filtroColores, color],
    }));
};

const limpiarFiltros = (set: Set) => () => {
    set({ filtroGenero: null, filtroColores: [] });
};

const removeGenero = (set: Set) => () => {
    set({ filtroGenero: null });
};

const removeColor = (set: Set) => (color: string) => {
    set((state) => ({
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
