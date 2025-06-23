import type { ImagenesCarruselProps } from "@/types";

import Carrusel from "./Galeria/CarruselImagenes";

export default function SliderImagenes({ images }: ImagenesCarruselProps) {


    return (
        <>
            {/* Carrusel de imágenes */}
            <div className="flex flex-col items-center justify-center gap-2 mt-4 md:mt-0  py-2 w-full ">
                <Carrusel images={images} />
            </div>
        </>
    );
}
