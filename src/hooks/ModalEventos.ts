import { useState } from "react";

export const useModalEventos = () => {
    const [visible, setVisible] = useState(false);

    const handleViewEventos = () => {
        setVisible(true);
    }

    const handleNotViewEventos = () => {
        setVisible(false);
    }

    return {
        visible,
        handleViewEventos,
        handleNotViewEventos
    }
}