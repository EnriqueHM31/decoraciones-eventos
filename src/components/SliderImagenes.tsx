import { useSliderImagenes } from "@/hooks/SliderImagenes";
import { IoClose } from "react-icons/io5";
import type { ImageOverlayGalleryProps } from "@/types";


export default function SliderImagenes({ images, clases }: ImageOverlayGalleryProps) {
    const { selectedImage, handleImageSelected, isClosing, closeOverlay } = useSliderImagenes();

    return (
        <>
            {/* Galería */}
            <div className={`grid  ${images.length > 0 ? "md:grid-cols-1" : images.length > 1 ? "md:grid-cols-2" : "md:grid-cols-3"} gap-4 md:gap- h-full`}>
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        onClick={() => handleImageSelected(img)}
                        className={` ${clases !== "" ? clases : ""} cursor-pointer rounded shadow `}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 h-screen w-screen bg-black/80 z-50 flex items-center justify-center">
                    <button
                        onClick={closeOverlay}
                        className="absolute top-5 right-5 m-2 text-white text-3xl font-bold z-50"
                    >
                        <IoClose className="xl:size-16" />
                    </button>
                    <div
                        className={`relative ${isClosing ? "animate-slide-out" : "animate-slide-in"}`}
                    >
                        <img
                            src={selectedImage}
                            alt="Vista ampliada"
                            className="max-w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}

        </>
    );
}
