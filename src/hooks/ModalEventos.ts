import { useState } from "react";
import { toast } from "sonner";

export const useModalEventos = () => {
    const [visible, setVisible] = useState(false);
    const [isOpenMenuBurguer, setIsOpenMenuBurguer] = useState(false);
    const [isOpenFormulario, setIsOpenFormulario] = useState(false);

    const handleClickFormulario = () => {
        setIsOpenFormulario(!isOpenFormulario);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (!formData.get("nombre_usuario") || !formData.get("mensaje_usuario")) {
            toast.error("Por favor, rellena todos los campos");
            return;
        }

        toast.success("Gracias por tu comentario");
        setIsOpenFormulario(false);
    };


    const handleViewEventos = () => {
        setVisible(true);
    }

    const handleNotViewEventos = () => {
        setVisible(false);
    }

    const handleClickOpenMenuBurguer = () => {
        setIsOpenMenuBurguer(!isOpenMenuBurguer);
    }


    return {
        visible,
        handleViewEventos,
        handleNotViewEventos,
        isOpenMenuBurguer,
        handleClickOpenMenuBurguer,
        isOpenFormulario,
        handleClickFormulario,
        handleSubmit,

    }
}