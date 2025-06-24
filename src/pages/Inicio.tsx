import Navegacion from "@/components/Navegacion";
import IMAGENEVENTO from "@/assets/img/Hero.webp";
import ModalEventos from "@/components/ModalEventos";
import { useModalEventos } from "@/hooks/ModalEventos";
import TituloPagina from "@/components/TituloPagina";
import ImagenOptimizada from "@/components/Galeria/ImagenOptimizada";

export default function Inicio() {

    const { visible, handleViewEventos } = useModalEventos();

    return (
        <>
            <TituloPagina titulo="Decoraciones para Eventos JJ" />
            {
                visible && (
                    <ModalEventos handleViewEventos={handleViewEventos} />
                )
            }
            <div className=" relative  ">

                <Navegacion />

                <section className="flex xl:flex-row flex-col items-center justify-center gap-6 mx-auto h-full pt-6 xl:pt-0">
                    <div className="flex-1 flex gap-6 flex-col xl:px-16 xl:items-start items-center px-4">
                        <h1 className="text-black xl:text-5xl lg:text-2xl font-bold text-3xl xl:text-start text-center">Decoraciones para Eventos JJ</h1>
                        <p className="text-black xl:text-lg text-sm">
                            Nos especializamos en decoración con entelado elegante y el uso creativo de series de luces LED para crear ambientes mágicos y sofisticados. Desde bodas y XV años, cuidamos cada detalle para que tu celebración brille con estilo propio.
                        </p>
                        <p className="text-black text-sm xl:text-lg">
                            Combinamos telas finas, iluminación ambiental y estructuras personalizadas para lograr un diseño único que refleje tu personalidad y haga de tu evento un recuerdo inolvidable.
                        </p>
                        <button onClick={handleViewEventos} className="bg-primary px-8 py-3 text-white rounded-2xl w-fit xl:text-md font-bold"
                            title="Ver Eventos"
                            aria-label="Ver Eventos"
                            aria-labelledby="eventos-title"
                            type="button"
                        >
                            Ver Eventos
                        </button>
                    </div>
                    <picture className="flex-1 h-full">
                        <ImagenOptimizada url={IMAGENEVENTO} alt={"Imagen de un evento"} clases="mt-0 rounded-none w-screen md:w-full  h-[50dvh] xl:h-screen object-center object-cover" />
                    </picture>
                </section>
            </div >

        </>
    )
}