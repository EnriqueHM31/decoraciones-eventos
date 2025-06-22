import { useState } from "react";
import type { HooksWhatsappProps } from "@/types";

export function useWhatsapp({ images, current }: HooksWhatsappProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const [ImagenWhat, setImagenWhat] = useState(0);
    const [mensaje, setMensaje] = useState("¡Hola! Me interesa este arreglo:");
    const imagenSeleccionada = images[ImagenWhat ?? 0];

    const handleClickWhatsapp = () => {
        const index = current - 1;
        setImagenWhat(index);
        setModalOpen(true);
    }

    const handleMensaje = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMensaje(e.target.value);
    };

    const handleClickCloseWhatsapp = () => {
        setModalOpen(false);
    }
    return {
        modalOpen,
        handleClickWhatsapp,
        handleMensaje,
        handleClickCloseWhatsapp,
        mensaje,
        imagenSeleccionada
    }
}