import { useState } from "react";

export function useMenuOpciones() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [animandoCierre, setAnimandoCierre] = useState(false);

    const toggleMenu = () => {
        if (menuAbierto) {
            setAnimandoCierre(true);
            setTimeout(() => {
                setMenuAbierto(false);
                setAnimandoCierre(false);
            }, 300); // mismo tiempo que tu animación
        } else {
            setMenuAbierto(true);
        }
    };

    return {
        menuAbierto,
        toggleMenu,
        animandoCierre
    }
}