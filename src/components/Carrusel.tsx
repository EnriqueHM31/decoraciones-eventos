import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { useCarrousel } from "@/hooks/Carrusel";
import type { ImagenesCarruselProps } from "@/types";


export default function SliderImagenes({ images }: ImagenesCarruselProps) {
    const { current, count, setApi } = useCarrousel({ images });

    return (
        <>
            <Carousel setApi={setApi} className="w-full py-0 bg-transparent border-none">
                <CarouselContent className="py-0 bg-transparent border-none">
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
        </>
    );
}
