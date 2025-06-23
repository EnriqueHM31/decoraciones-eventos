import type { FormularioEmailProps } from "@/types";
import IMAGENLOGO from "@/assets/img/Logo.webp";
import { FaUserCircle } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import ImagenOptimizada from "../Galeria/ImagenOptimizada";

export default function FormularioEmail({ handleSubmit, handleClickFormulario }: FormularioEmailProps) {
    return (
        <div className="fixed w-screen h-screen inset-0 z-70 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
            <form className=" p-4 rounded-2xl lg:max-w-1/4 w-full bg-primary border border-white relative" onSubmit={(e) => handleSubmit(e)}>
                <ImagenOptimizada url={IMAGENLOGO} alt="logo" clases="max-w-20 mx-auto" />
                <h2 className="text-center text-md lg:text-lg font-bold text-black/80 bg-white px-4 py-1 rounded-2xl w-fit mx-auto mb-3">Enviar un comentario</h2>

                <label htmlFor="nombre_usuario" className="flex flex-col gap-2 mb-2 text-sm font-medium ">
                    <div className="flex">
                        <span className="inline-flex items-center text-sm rounded-s-md bg-primary">
                            <FaUserCircle className="size-6 text-white" />
                        </span>
                        <span className="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-xs 2xl:text-xs p-2.5  placeholder:text-gray-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            Nombre
                        </span>
                    </div>

                    <input type="text" name="nombre_usuario" id="nombre_usuario" className="block w-full rounded-md text-white  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border border-white px-3 py-2" placeholder="Nombre" />
                </label>

                <label htmlFor="mensaje_usuario" className="flex flex-col gap-2 mb-2 text-sm font-medium ">
                    <div className="flex">
                        <span className="inline-flex items-center text-sm rounded-s-md bg-primary">
                            <SiGooglemessages className="size-6 text-white" />
                        </span>
                        <span className="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-xs 2xl:text-xs p-2.5  placeholder:text-gray-500 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            Comentario
                        </span>
                    </div>

                    <textarea name="mensaje_usuario" id="mensaje_usuario" rows={3} className="block w-full rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border border-white px-3 py-2 text-white " placeholder="Comentario"></textarea>
                </label>
                <button type="submit" className="bg-white text-primary px-8 py-2 rounded-2xl mt-8 cursor-pointer text-xs mx-auto block">Enviar comentario</button>

                <button type="button" className="absolute top-0 right-0 text-white text-4xl z-50 cursor-pointer" title="Cerrar"
                    aria-label="Cerrar modal"
                    aria-labelledby="modal-title"
                    onClick={handleClickFormulario}
                >
                    <IoClose className="xl:size-12 lg:size-14  size-12 bg-primary rounded-full p-2" />
                </button>
            </form >
        </div >

    )
}