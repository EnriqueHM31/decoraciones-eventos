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
        nombre: "azul cielo",
        clase: "bg-[#9bcafe]",
        texto: "text-black",
        bordeCirculo: "border-black",
    },

    {
        nombre: "azul rey",
        clase: "bg-[#084a93]",
        texto: "text-white",
        bordeCirculo: "border-black",
    },

    {
        nombre: "verde",
        clase: "bg-green-800",
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
        clase: "bg-white border border-black",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "rosa",
        clase: "bg-[#ff6bb5]",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "rosa pastel",
        clase: "bg-[#ed0579]",
        texto: "text-white",
        bordeCirculo: "border-white",
    },
    {
        nombre: "palo rosa",
        clase: "bg-[#ff659d]",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "dorado",
        clase: "bg-[#d38600]",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "lila",
        clase: "bg-[#c97cff]",
        texto: "text-black",
        bordeCirculo: "border-black",
    },
    {
        nombre: "verde jade",
        clase: "bg-[#005435]",
        texto: "text-white",
        bordeCirculo: "border-white",
    },
    {
        nombre: "vino",
        clase: "bg-[#5c1212]",
        texto: "text-white",
        bordeCirculo: "border-white",
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

    {
        genero: "Mixto",
        color: "bg-gradient-to-r from-blue-800 to-pink-600",
        icono: "FaUserFriends",
    }
] as GeneroProps[];

export const textoDisponible = ({ filtroColores, filtroGenero }: { filtroGenero: string | null, filtroColores: string[] }) => {
    if (filtroGenero === null && filtroColores.length === 0) return "No hay altares disponibles";
    if (filtroGenero === null && filtroColores.length > 0) return `No hay altares disponibles en ${filtroColores.join(", ")}`;
    if (filtroGenero !== null && filtroColores.length === 0) return `No hay altares disponibles que se para ${filtroGenero}`;
    if (filtroGenero !== null && filtroColores.length > 0) return `No hay altares disponibles en ${filtroColores.join(", ")} y que se para ${filtroGenero}`;
}