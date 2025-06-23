import { useWhatsapp } from "@/hooks/WhatSapp";
import { useState, useRef } from "react";
import Previsualizacion from "../WhatSapp/Previsualizacion";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

interface CarruselProps {
    images: string[];
}

export default function Carrusel({ images }: CarruselProps) {


    const [current, setCurrent] = useState(0);

    const { modalOpen, handleClickWhatsapp, handleMensaje, handleClickCloseWhatsapp, mensaje, imagenSeleccionada, } = useWhatsapp({ images, current });
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

    return (
        <>
            {
                images.length > 1 && (
                    <button
                        onClick={prevSlide}
                        disabled={current === 0}
                        className="absolute left-10 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full z-10 disabled:opacity-30 border border-white md:flex hidden"
                    >
                        <FaArrowLeft className="md:size-6" />
                    </button>
                )
            }
            <div className="relative w-full max-w-full h-screen md:justify-center flex items-center flex-col py-4 mx-auto overflow-hidden justify-evenly md:max-w-3/4">
                <button
                    onClick={handleClickWhatsapp}
                    className="fixed md:bottom-14 bottom-20 md:right-18 btn bg-green-700 hover:bg-green-600 transition-all duration-500 ease-in-out rounded-lg font-bold md:text-md text-white px-4 py-2 z-50 cursor-pointer flex gap-4 items-center justify-center"
                    aria-label="Enviar WhatsApp"
                    title="Enviar WhatsApp"
                    type="button"
                >
                    <FaWhatsapp className="md:size-10 size-7 text-white" />
                    Enviar WhatsApp
                </button>

                <div
                    className="flex transition-transform max-h-[50dvh] md:max-h-full duration-500 ease-in-out select-none flex-1"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`Slide ${i + 1}`}
                            className="w-full max-h-[90dvh] flex-shrink-0 object-contain md:rounded-xl"
                            draggable={false}
                        />
                    ))}
                </div>


                {/* Indicadores */}
                <div className=" justify-center gap-2 mt-4 bg-black px-4 py-2 rounded-lg w-fit mx-auto md:flex hidden">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`md:size-3 size-2 rounded-full ${index === current ? "bg-white" : "bg-white/50"}`}
                        />
                    ))}
                </div>
            </div>


            {
                images.length > 1 && (
                    <button
                        onClick={nextSlide}
                        disabled={current === images.length - 1}
                        className="absolute right-20 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full z-10 disabled:opacity-30 border border-white md:flex hidden"
                    >
                        <FaArrowRight className="md:size-6" />
                    </button>
                )
            }


            {/* Modal de previsualización */}
            {
                modalOpen && (
                    <Previsualizacion
                        mensaje={mensaje}
                        imagenSeleccionada={imagenSeleccionada}
                        handleMensaje={handleMensaje}
                        handleClickCloseWhatsapp={handleClickCloseWhatsapp}
                    />
                )
            }
        </>
    );
}
