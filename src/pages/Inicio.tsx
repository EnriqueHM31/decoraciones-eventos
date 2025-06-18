import Navegacion from "@/components/Navegacion";
import IMAGENEVENTO from "@/assets/img/fondo.jpg";
import { useState } from "react";
import ModalEventos from "@/components/ModalEventos";

export default function Inicio() {

    const [eventos, setEventos] = useState(false);

    const handleViewEventos = () => {
        setEventos(true);
    }

    const handleNotViewEventos = () => {
        setEventos(false);
    }

    return (
        <>
            {
                eventos && (
                    <ModalEventos onClose={handleNotViewEventos} />
                )
            }
            <div className="grid grid-rows-[auto_1fr] h-screen relative ">

                <Navegacion />

                <section className="flex xl:flex-row flex-col items-center justify-center gap-6 mx-auto h-full pt-6 xl:pt-0">
                    <div className="flex-1 flex gap-6 flex-col xl:px-16 xl:items-start items-center px-4">
                        <h1 className="text-black xl:text-5xl lg:text-2xl font-bold text-3xl xl:text-start text-center">Decoraciones y Eventos</h1>
                        <p className="text-black xl:text-lg text-sm">
                            Nos especializamos en decoración con entelado elegante y el uso creativo de series de luces LED para crear ambientes mágicos y sofisticados. Desde bodas y XV años, cuidamos cada detalle para que tu celebración brille con estilo propio.
                        </p>
                        <p className="text-black text-sm xl:text-lg">
                            Combinamos telas finas, iluminación ambiental y estructuras personalizadas para lograr un diseño único que refleje tu personalidad y haga de tu evento un recuerdo inolvidable.
                        </p>
                        <button onClick={handleViewEventos} className="bg-primary px-8 py-3 text-white rounded-2xl w-fit xl:text-md font-bold">
                            Ver Eventos
                        </button>
                    </div>
                    <picture className="flex-1 h-full">
                        <img src={IMAGENEVENTO} alt="logo" className="w-full h-full object-cover object-right" />
                    </picture>
                </section>
            </div>

        </>
    )
}