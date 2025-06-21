import { useEffect } from "react";

export default function TituloPagina({ titulo }: { titulo: string }) {
    useEffect(() => {
        document.title = `${titulo}`;
    }, [titulo]); // ✅ Se ejecuta cada vez que cambia `titulo`

    return null; // Puedes retornar null si no necesitas renderizar nada
}
