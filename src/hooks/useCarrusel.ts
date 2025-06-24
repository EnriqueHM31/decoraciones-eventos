import { useRef, useState } from "react";

export function useCarrusel({ images }: { images: string[] }) {

    const [current, setCurrent] = useState(0);

    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const mouseDownX = useRef<number | null>(null);
    const mouseUpX = useRef<number | null>(null);

    const nextSlide = () => {
        if (current < images.length - 1) {
            setCurrent((prev) => prev + 1);
        }
    };

    const prevSlide = () => {
        if (current > 0) {
            setCurrent((prev) => prev - 1);
        }
    };

    const goToSlide = (index: number) => {
        setCurrent(index);
    };

    // Soporte para touch (móvil)
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (
            touchStartX.current !== null &&
            touchEndX.current !== null
        ) {
            const distance = touchStartX.current - touchEndX.current;
            if (distance > 50) nextSlide();
            else if (distance < -50) prevSlide();
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Soporte para mouse (desktop)
    const handleMouseDown = (e: React.MouseEvent) => {
        mouseDownX.current = e.clientX;
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        mouseUpX.current = e.clientX;
        if (
            mouseDownX.current !== null &&
            mouseUpX.current !== null
        ) {
            const distance = mouseDownX.current - mouseUpX.current;
            if (distance > 50) nextSlide();
            else if (distance < -50) prevSlide();
        }
        mouseDownX.current = null;
        mouseUpX.current = null;
    };

    return {
        current,
        setCurrent,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleMouseDown,
        handleMouseUp,
        nextSlide,
        prevSlide,
        goToSlide
    }
}