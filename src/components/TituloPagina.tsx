import { useEffect } from "react"

export default function TituloPagina({ titulo }: { titulo: string }) {

    useEffect(() => {
        document.title = ` ${titulo}`;
    }, []);

    return undefined
}