import { useState } from "react";
import { toast } from "sonner";

export const useModalEventos = () => {
    const [visible, setVisible] = useState(false);
    const [isOpenMenuBurguer, setIsOpenMenuBurguer] = useState(false);
    const [isOpenFormulario, setIsOpenFormulario] = useState(false);

    const handleClickFormulario = () => {
        setIsOpenFormulario(!isOpenFormulario);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const toastID = toast.loading("Enviando comentario...");

        const formData = new FormData(e.currentTarget);
        const nombreUsuario = formData.get("nombre_usuario");
        const mensajeUsuario = formData.get("mensaje_usuario");
        if (!nombreUsuario || !mensajeUsuario) {
            toast.error("Por favor, rellena todos los campos");
            return;
        }


        const res = await fetch(import.meta.env.VITE_APP_API_URL + "/api/correo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre: nombreUsuario,
                mensaje: mensajeUsuario,
            }),
        });

        if (res.ok) {
            toast.success("Gracias por tu comentario", {
                id: toastID,
            });
            setIsOpenFormulario(false);
        } else {
            toast.error("Hubo un error al enviar tu comentario", {
                id: toastID,
            });
        }
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