import { useState } from "react";
import { useGaleriaStore } from "@/store/useGaleriaStore";
import { IoClose } from "react-icons/io5";
import { IoMdMan, IoMdWoman } from "react-icons/io";
import { GiChurch } from "react-icons/gi";



const coloresDisponibles = [
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


const generosDisponibles = [
    {
        genero: "Hombre",
        color: "bg-blue-500",
        icono: <IoMdMan className="xl:size-7 " />

    },
    {
        genero: "Mujer",
        color: "bg-pink-500",
        icono: <IoMdWoman className="xl:size-7" />
    },
    {
        genero: "Santos",
        color: "bg-purple-700",
        icono: <GiChurch className="xl:size-7 " />
    }
] as const;

export default function Filtros() {

    const { filtroGenero, filtroColores, setFiltroGenero, toggleColor, limpiarFiltros } = useGaleriaStore();
    const [asideVisible, setAsideVisible] = useState(false);

    const toggleAside = () => setAsideVisible((v) => !v);
    const cerrarAside = () => setAsideVisible(false);

    return (
        <>
            {/* BOTÓN para mostrar aside en desktop/tablet */}
            <div className="flex justify-end mb-2 w-full max-w-11/12 cursor-pointer">
                <button
                    onClick={toggleAside}
                    className="px-6 py-2 bg-primary text-white rounded"
                >
                    {asideVisible ? "Cerrar filtros" : "Mostrar filtros"}
                </button>
            </div>

            {/* ASIDE LATERAL FIJO */}
            <aside
                className={`
          fixed top-0 right-0 min-h-screen w-full xl:w-96 bg-black shadow-lg border-l  p-6
          transform transition-transform duration-300 ease-in-out flex flex-col gap-4 
          ${asideVisible ? "translate-x-0" : "translate-x-full"}
          z-50
        `}
            >
                <button
                    onClick={cerrarAside}
                    className="mb-4 text-right w-full text-white hover:text-gray-400 flex justify-end cursor-pointer"
                >
                    <IoClose className="xl:size-10" />
                </button>

                <h2 className="text-3xl font-semibold mb-4 text-white">Filtros</h2>

                {/* Género */}
                <div className=" flex flex-col gap-2">
                    <h3 className="font-semibold mb-2 px-4 py-2 bg-white text-black w-fit rounded-2xl">Para</h3>
                    <div className="flex flex-col gap-2 mb-5">
                        {generosDisponibles.map(({ genero, color, icono }, index) => (
                            <button
                                key={index}
                                onClick={() => setFiltroGenero(genero)}
                                className={`px-4 py-2 rounded w-fit min-w-1/2 flex gap-4 items-center border ${filtroGenero === genero
                                    ? `${color} text-white`
                                    : "bg-black border-white text-white"
                                    }`}
                            >
                                {icono}
                                {genero.toLocaleUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Colores */}
                <div className=" flex flex-col gap-2 mb-5">
                    <h3 className="font-semibold mb-2 px-4 py-2 bg-white text-black w-fit rounded-2xl">Colores</h3>
                    <div className="flex flex-wrap gap-3 gap-y-8">
                        {coloresDisponibles.map((color) => {
                            const activo = filtroColores.includes(color.nombre);
                            return (
                                <button
                                    key={color.nombre}
                                    onClick={() => toggleColor(color.nombre)}
                                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors 
        ${activo ? `${color.clase} ${color.texto}` : "bg-gray-100 text-black"}`}
                                >
                                    <div
                                        className={`w-4 h-4 rounded-full ${color.clase} ${activo ? `border-2 ${color.bordeCirculo}` : ""
                                            }`}
                                    ></div>
                                    <span className="capitalize">{color.nombre}</span>
                                </button>
                            );
                        })}

                    </div>
                </div>

                <button
                    onClick={() => {
                        limpiarFiltros();
                    }}
                    className="w-full py-2 bg-red-500 text-white rounded cursor-pointer hover:bg-red-400 transition-colors duration-500 ease-in-out "
                >
                    Limpiar filtros
                </button>
            </aside>

            {/* Opcional: fondo semitransparente cuando el aside está abierto */}
            {asideVisible && (
                <div
                    onClick={cerrarAside}
                    className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
                />
            )}

        </>
    );
}
