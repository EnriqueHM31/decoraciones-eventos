import type { ImageOverlayGalleryProps } from "@/types";
import { useSliderImagenes } from "@/hooks/SliderImagenes";
import { IoClose } from "react-icons/io5";
import Carrusel from "@/components/Carrusel";

export default function SliderImagenes({ lazy, images, styles }: ImageOverlayGalleryProps) {
    const {
        selectedImage,
        handleImageSelected,
        closeOverlay,
        setCurrentIndex,
    } = useSliderImagenes();

    if (!images || images.length === 0) return null;


    return (
        <>
            {/* Miniatura inicial */}
            <img
                src={images[0]}
                alt="Imagen principal de la galeria"
                onClick={() => {
                    setCurrentIndex(0);
                    handleImageSelected(images[0], 0);
                }}
                loading={lazy ? "lazy" : undefined}
                crossOrigin="anonymous"
                className={`h-auto w-full aspect-square max-w-full rounded-lg object-cover object-center  ${styles ?? ""} `}

            />

            {selectedImage && (
                <div className="fixed inset-0 h-screen w-screen bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeOverlay}
                        className="absolute top-12 md:right-12 right-4 text-white text-4xl z-50"
                        title="Cerrar"
                        aria-label="Cerrar modal"
                        aria-labelledby="modal-title"
                        type="button"
                    >
                        <IoClose className="xl:size-20 lg:size-14  size-10 bg-primary rounded-full p-2" />
                    </button>

                    <div className="w-full md:max-w-2/5 rounded-lg shadow-lg">
                        <Carrusel images={images} />
                    </div >
                </div >
            )
            }
        </>
    );
}


