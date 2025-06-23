import { motion } from "framer-motion";
import type { ImageOverlayGalleryProps } from "@/types";
import { useSliderImagenes } from "@/hooks/SliderImagenes";
import { IoClose } from "react-icons/io5";
import Carrusel from "@/components/Galeria/Carusel";

export default function SliderImagenes({ lazy, images, styles }: ImageOverlayGalleryProps) {
    const {
        selectedImage,
        handleImageSelected,
        closeOverlay,
        setCurrentIndex,
    } = useSliderImagenes();

    const isModalOpen = selectedImage !== null;

    return (
        <>
            {/* Imagen en el grid, siempre visible */}
            <motion.img
                src={images[0]}
                alt="Imagen principal de la galería"
                onClick={() => {
                    setCurrentIndex(0);
                    handleImageSelected(images[0], 0);
                }}
                loading={lazy ? "lazy" : undefined}
                crossOrigin="anonymous"
                className={`h-20 w-20 aspect-square max-w-full rounded-lg object-cover object-center cursor-pointer ${styles ?? ""}`}
                whileTap={{ scale: 0.95 }}
                layoutId={`imagen-${images[0]}`} // ID único
            />

            {/* Modal animado */}
            {isModalOpen && (
                <div
                    key="modal"
                    className="fixed top-0 left-0 h-screen w-screen bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center py-4 "
                >
                    <button
                        onClick={closeOverlay}
                        className="absolute top-12 border bg-black border-white rounded-full md:right-18 right-8 text-white text-4xl z-50 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out "
                        title="Cerrar"
                        aria-label="Cerrar modal"
                        type="button"
                    >
                        <IoClose className="xl:size-12 lg:size-14 size-10 rounded-full p-2" />
                    </button>

                    <div
                        className="w-full md:max-w-4/5 h-full rounded-lg shadow-lg overflow-hidden"
                    >
                        <Carrusel images={images} />
                    </div>

                </div>

            )}
        </>
    );
}
