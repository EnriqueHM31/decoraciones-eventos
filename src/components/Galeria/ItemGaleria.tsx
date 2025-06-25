import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import type { ImageOverlayGalleryProps } from "@/types";
import { useSliderImagenes } from "@/hooks/useSliderImagenes";
import { IoClose } from "react-icons/io5";
const Carrusel = lazy(() => import("@/components/Galeria/Carusel"));

export default function ItemGaleria({ images, styles }: ImageOverlayGalleryProps) {
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
            <div className="w-full h-full overflow-hidden rounded-lg border-none">
                <motion.img
                    src={images[0]}
                    alt="Imagen principal de la galería"
                    onClick={() => {
                        setCurrentIndex(0);
                        handleImageSelected(images[0], 0);
                    }}
                    crossOrigin="anonymous"
                    width={400}
                    height={400}
                    className={` object-cover object-center cursor-pointer w-full h-full ${styles ?? ""}`}
                    whileTap={{ scale: 0.95 }}
                    layoutId={`imagen-${images[0]}`}
                />
            </div>


            {/* Modal animado */}
            {isModalOpen && (
                <div
                    key="modal"
                    className="fixed top-0 left-0 h-[100vh] w-screen bg-black/70 backdrop-blur-2xl z-50 flex items-center justify-center py-4 border-none "
                >
                    <button
                        onClick={closeOverlay}
                        className="absolute top-12 border bg-black border-white rounded-full md:right-18 right-5 text-white text-4xl z-50 cursor-pointer hover:bg-white hover:text-black hover:border-black transition-all duration-500 ease-in-out "
                        title="Cerrar"
                        aria-label="Cerrar modal"
                        type="button"
                    >
                        <IoClose className="xl:size-12 lg:size-14 size-11 rounded-full p-2" />
                    </button>

                    <Suspense fallback={<div className="text-white">Cargando galería...</div>}>
                        <Carrusel images={images} />
                    </Suspense>

                </div>

            )}
        </>
    );
}
