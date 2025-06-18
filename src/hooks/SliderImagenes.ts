import { useState } from "react";

export const useSliderImagenes = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);

    const closeOverlay = () => {
        setIsClosing(true);
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 400); // Debe coincidir con la duración de la animación de salida
    };

    const handleImageSelected = (image: string) => {
        setSelectedImage(image);
    };

    return {
        selectedImage,
        setSelectedImage,
        isClosing,
        closeOverlay,
        handleImageSelected
    }
}