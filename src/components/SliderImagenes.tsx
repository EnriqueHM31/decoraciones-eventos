import type { ImageOverlayGalleryProps } from "@/types";
import { useSliderImagenes } from "@/hooks/SliderImagenes";
import { IoClose } from "react-icons/io5";
import Carrusel from "@/components/Carrusel";

export default function SliderImagenes({ images, styles }: ImageOverlayGalleryProps) {
    const {
        selectedImage,
        handleImageSelected,
        closeOverlay,
        setCurrentIndex,
    } = useSliderImagenes();

    if (!images || images.length === 0) return null;

    console.log(images);
    console.log(selectedImage);

    return (
        <>
            {/* Miniatura inicial */}
            <img
                src={images[0]}
                alt="Imagen principal"
                onClick={() => {
                    setCurrentIndex(0);
                    handleImageSelected(images[0], 0);
                }}
                className={`h-auto max-w-full rounded-lg object-cover object-center ${styles ?? ""}`}
            />

            {selectedImage && (
                <div className="fixed inset-0 h-screen w-screen bg-black/90 z-50 flex items-center justify-center p-4">
                    {/* Botón cerrar */}
                    <button
                        onClick={closeOverlay}
                        className="absolute top-12 right-12 text-white text-4xl z-50"
                        title="Cerrar"
                    >
                        <IoClose className="xl:size-20 lg:size-14 bg-primary rounded-full p-2" />
                    </button>

                    {/* Carrusel */}
                    <div className="w-full max-w-2/5  rounded-lg shadow-lg">
                        <Carrusel images={images} />
                    </div >
                </div >
            )
            }
        </>
    );
}


