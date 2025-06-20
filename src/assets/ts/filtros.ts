import type { GeneroProps } from "@/types";

export const coloresDisponibles = [
    {
        nombre: "rojo",
        clase: "bg-red-500",
        texto: "text-white",
        bordeCirculo: "border-black",
    },
    {
        nombre: "azul",
        clase: "bg-blue-500",
        texto: "text-white",
        bordeCirculo: "border-black",
    },
    {
        nombre: "verde",
        clase: "bg-green-500",
        texto: "text-white",
        bordeCirculo: "border-black",
    },
    {
        nombre: "amarillo",
        clase: "bg-yellow-400",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "negro",
        clase: "bg-black",
        texto: "text-white",
        bordeCirculo: "border-white", // para que se vea
    },
    {
        nombre: "blanco",
        clase: "bg-white border border-gray-300",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "morado",
        clase: "bg-purple-500",
        texto: "text-white",
        bordeCirculo: "border-black",
    },
];


export const generosDisponibles = [
    {
        genero: "Hombre",
        color: "bg-blue-500",
        icono: "IoMdMan",
    },
    {
        genero: "Mujer",
        color: "bg-pink-500",
        icono: "IoMdWoman",
    },
    {
        genero: "Santos",
        color: "bg-purple-700",
        icono: "GiChurch",
    },
] as GeneroProps[];

export const textoDisponible = ({ filtroColores, filtroGenero }: { filtroGenero: string | null, filtroColores: string[] }) => {
    if (filtroGenero === null && filtroColores.length === 0) return "No hay altares disponibles";
    if (filtroGenero === null && filtroColores.length > 0) return `No hay altares disponibles en ${filtroColores.join(", ")}`;
    if (filtroGenero !== null && filtroColores.length === 0) return `No hay altares disponibles que se para ${filtroGenero}`;
    if (filtroGenero !== null && filtroColores.length > 0) return `No hay altares disponibles en ${filtroColores.join(", ")} y que se para ${filtroGenero}`;
}