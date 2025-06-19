import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Props {
    images: string[];
}

export default function SliderImagenes({ images }: Props) {
    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState(images.length);

    useEffect(() => {
        if (!api) return;

        setCount(images.length);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api, images.length]);

    return (
        <>
            <Carousel setApi={setApi} className="w-full py-0">
                <CarouselContent className="py-0">
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card className="w-full h-full py-0 rounded-lg flex items-center justify-center">
                                <CardContent className=" px-0 py-0 rounded-lg">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="h-auto max-w-full w-full rounded-lg object-cover object-center"
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
