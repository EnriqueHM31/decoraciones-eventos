import { IoClose } from "react-icons/io5";
import type { PrevisualizacionMensajeWhatsappProps } from "@/types";


export default function Previsualizacion({ mensaje, imagenSeleccionada, handleMensaje, handleClickCloseWhatsapp }: PrevisualizacionMensajeWhatsappProps) {


    const whatsAppLink = `https://wa.me/522731250344?text=${encodeURIComponent(
        mensaje + "\n" + imagenSeleccionada
    )}`;

    return (
        <div className="fixed h-screen w-screen top-0 left-0  backdrop-blur-xl bg-opacity-70 flex justify-center items-center z-100 md:px-0">

            <div className="bg-black md:border md:border-white rounded-lg md:max-w-4xl w-full md:max-h-[90vh] flex overflow-hidden md:flex-row flex-col justify-center h-full md:h-auto">
                {/* Izquierda: Formulario */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start md:justify-start md:order-1 order-2">

                    <h2 className="text-md md:text-xl font-bold mb-4 text-white">Editar mensaje</h2>
                    <textarea
                        className="text-sm md:text-md border rounded p-2 flex-grow resize-none text-white w-full"
                        value={mensaje}
                        onChange={(e) => handleMensaje(e)}
                        rows={10}
                        name="mensaje_usuario"
                        id="mensaje_usuario"
                    />

                    <div className="mt-4 flex justify-between w-full items-center order-1 md:order-2">
                        <button
                            className="md:bg-gray-300 md:px-4 md:py-2 p-1 size-12 md:w-fit fixed md:static md:top-4 md:right-4 flex items-center justify-center md:rounded rounded-full hover:bg-gray-400 cursor-pointer z-60"
                            onClick={handleClickCloseWhatsapp}
                            name="cancelar"
                            id="cancelar"
                            aria-label="Cancelar modal"
                            title="Cancelar modal"
                            type="button"
                        >
                            <span className="md:flex hidden">Cancelar</span>
                            <IoClose className="md:hidden text-white w-full size-12" />
                        </button>
                        <a
                            href={whatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 w-full text-center md:w-fit text-white px-4 py-2 rounded hover:bg-green-700"
                            onClick={handleClickCloseWhatsapp}
                            id="enviar"
                            aria-label="Enviar modal"
                            title="Enviar modal"
                            type="button"
                        >
                            Enviar WhatsApp
                        </a>
                    </div>
                </div>

                {/* Derecha: Previsualización imagen */}
                <div className="md:w-1/2 bg-black backdrop-blur-3xl flex w-full items-center justify-center md:p-6 md:order-2 order-1">
                    <img
                        src={imagenSeleccionada}
                        alt="Previsualización del arreglo"
                        className="md:max-h-[70vh] max-h-[25dvh] object-contain rounded w-full h-full"
                    />
                </div>
            </div>
        </div>
    )
}