import type { PrevisualizacionMensajeWhatsappProps } from "@/types";
import ImagenOptimizada from "../Galeria/ImagenOptimizada";


export default function Previsualizacion({ mensaje, imagenSeleccionada, handleMensaje, handleClickCloseWhatsapp }: PrevisualizacionMensajeWhatsappProps) {


    const whatsAppLink = `https://wa.me/522731250344?text=${encodeURIComponent(
        mensaje + "\n" + imagenSeleccionada
    )}`;

    return (
        <div className="fixed h-screen w-screen top-0 left-0 justify-center backdrop-blur-xl flex items-center z-120 bg-black/70">

            <div className=" md:border md:border-white rounded-lg md:max-w-4xl w-full flex overflow-hidden md:flex-row flex-col  h-full md:max-h-[50dvh] justify-center overflow-y-auto">
                {/* Izquierda: Formulario */}
                <div className="md:w-1/2 p-6 flex flex-col justify-center items-center md:items-start md:justify-start md:order-1 order-2 bg-black">

                    <h2 className="text-md md:text-xl font-bold mb-4 text-white">Editar mensaje</h2>
                    <textarea
                        className="text-sm md:text-md border rounded p-2 flex-grow resize-none text-white w-full h-full min-h-34 "
                        value={mensaje}
                        onChange={(e) => handleMensaje(e)}
                        name="mensaje_usuario"
                        id="mensaje_usuario"
                    />

                    <div className="mt-4 flex flex-col md:flex-row gap-3 md:gap-0 justify-between w-full items-center order-1 md:order-2">
                        <button
                            className="bg-gray-300 px-4 py-2 w-full md:w-fit  md:static md:top-4 md:right-4 flex items-center justify-center rounded hover:bg-gray-400 order-2 md:order-1 cursor-pointer z-60"
                            onClick={handleClickCloseWhatsapp}
                            name="cancelar"
                            id="cancelar"
                            aria-label="Cancelar modal"
                            title="Cancelar modal"
                            type="button"
                        >
                            <span className="">Cancelar</span>
                        </button>
                        <a
                            href={whatsAppLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-600 w-full text-center md:w-fit text-white px-4 py-2 rounded hover:bg-green-700 order-1 md:order-2"
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
                <div className="md:w-1/2 h-2/6 md:h-full flex w-full items-center justify-center md:p-6 md:order-2 order-1 bg-black ">
                    <ImagenOptimizada url={imagenSeleccionada} alt="Previsualización del arreglo" clases="md:max-h-[70vh] object-contain rounded w-full h-full" />
                </div>
            </div>
        </div>
    )
}