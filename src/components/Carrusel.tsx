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

            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className="h-auto max-w-full rounded-lg object-cover object-center"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className=" absolute bottom-6 left-1/2 flex -translate-x-1/2 text-white text-2xl bg-primary  font-bold px-5 py-2 rounded-full">
                Slide {current} de {count}
            </div>
        </>
    );
}
