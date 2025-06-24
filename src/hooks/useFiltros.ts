import { useState } from "react";

export default function useFiltros() {
    const [asideVisible, setAsideVisible] = useState(false);

    const toggleAside = () => {
        setAsideVisible((v) => !v);
    }
    const cerrarAside = () => setAsideVisible(false);

    return {
        asideVisible,
        toggleAside,
        cerrarAside
    }
}