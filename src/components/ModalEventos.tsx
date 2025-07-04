import { SECCIONES_EVENTOS } from "@/assets/ts/constantes";
import { IoClose } from "react-icons/io5"


export default function ModalEventos({ handleViewEventos }: { handleViewEventos: () => void }) {

    return (
        <>
            {

                <div className="fixed w-full h-full bg-black/70 z-50 flex items-center justify-center">


                    <div className="bg-white rounded-2xl shadow-xl px-6 py-10 w-full max-w-3xl mx-4 relative flex flex-col gap-6 md:gap-10">
                        <h2 className="md:text-xl text-lg font-bold text-center mt-4">Selecciona un tipo de evento</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {SECCIONES_EVENTOS.map((seccion, index) => (
                                <a
                                    key={index}
                                    href={seccion.to}
                                    className="group relative md:h-40 h-24 rounded-xl  shadow-lg transform hover:scale-105 transition-transform duration-300"
                                >
                                    <img src={seccion.img} alt={seccion.label} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/70 group-hover:bg-black/10 transition duration-300 flex items-center justify-center rounded-xl">
                                        <span className="text-white text-lg font-semibold text-center  md:group-hover:-translate-y-20 group-hover:-translate-y-16  px-4 py-2 rounded-3xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:text-sm">{seccion.label}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <button
                            onClick={handleViewEventos}
                            className="size-8 md:size-10 mx-auto bg-primary text-white hover:bg-white hover:text-black hover:border-black border transition absolute rounded-full top-3 right-3 flex items-center justify-center"
                            aria-label="Cerrar modal"
                            title="Cerrar modal"
                            type="button"
                            aria-labelledby="modal-title"
                        >
                            <IoClose className="size-4 md:size-7" />
                        </button>
                    </div>

                </div >
            }

        </>
    )
}