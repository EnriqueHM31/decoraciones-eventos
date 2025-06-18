import { useState } from "react";

export const useModalEventos = () => {
    const [visible, setVisible] = useState(false);
    const [isOpenMenuBurguer, setIsOpenMenuBurguer] = useState(false);


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

    }
}