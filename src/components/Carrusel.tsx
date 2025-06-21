import type { ImagenesCarruselProps } from "@/types";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa6";
import Previsualizacion from "./WhatSapp/Previsualizacion";
import { useWhatsapp } from "@/hooks/WhatSapp";
import { useCarrousel } from "@/hooks/Carrusel";



export default function SliderImagenes({ images }: ImagenesCarruselProps) {
    const { current, count, setApi } = useCarrousel({ images });
    const { modalOpen, handleClickWhatsapp, handleMensaje, handleClickCloseWhatsapp, mensaje, imagenSeleccionada } = useWhatsapp({ images, current });

    return (
        <>
            <Carousel setApi={setApi} className="w-full py-0 bg-transparent border-none ">
                <CarouselContent className="py-0 bg-transparent border-none ">
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card className="w-full h-full py-0 rounded-lg flex items-center justify-center bg-transparent border-none">
                                <CardContent className=" px-0 py-4 rounded-lg bg-transparent">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="h-dvh w-full py-4 rounded-lg object-contain object-center"
                                        crossOrigin="anonymous"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>

                    ))}
                </CarouselContent>

                <CarouselPrevious className="md:flex hidden" />
                <CarouselNext className="md:flex hidden" />
            </Carousel>

            <div className=" absolute bottom-6 left-1/2 flex -translate-x-1/2 text-white md:text-2xl bg-primary  font-bold px-5 py-2 rounded-full">
                Slide {current} de {count}
            </div>

            <button
                onClick={handleClickWhatsapp}
                className="btn bg-green-600 rounded-full text-white p-4 fixed bottom-1/12 right-7 md:right-12 z-30 cursor-pointer"
                aria-label="Enviar WhatsApp"
                title="Enviar WhatsApp"
                type="button"
                aria-labelledby="enviar-whatsapp-title"
            >
                <FaWhatsapp className="md:size-12 size-7 text-white" />
            </button>
            {/* Modal */}
            {modalOpen && (
                <Previsualizacion mensaje={mensaje} imagenSeleccionada={imagenSeleccionada} handleMensaje={handleMensaje} handleClickCloseWhatsapp={handleClickCloseWhatsapp} />
            )}
        </>
    );
}
