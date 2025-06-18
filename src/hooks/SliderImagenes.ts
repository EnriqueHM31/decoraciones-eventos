import { useState } from "react";

export const useSliderImagenes = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const closeOverlay = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 400); // Debe coincidir con la duración de la animación
    };

    const handleImageSelected = (image: string, index: number = 0) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setIsClosing(false);
    };

    return {
        selectedImage,
        setSelectedImage,
        isClosing,
        closeOverlay,
        handleImageSelected,
        currentIndex,
        setCurrentIndex
    };
};
