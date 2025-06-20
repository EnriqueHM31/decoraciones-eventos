import { useEffect, useState } from "react";

export const useCarrousel = ({ images }: { images: string[] }) => {
    const [api, setApi] = useState<any>(null);
    const [current, setCurrent] = useState(1);
    const [count, setCount] = useState(images.length);

    useEffect(() => {
        if (!api) return;

        setCount(images.length);
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api, images.length]);

    return {
        api,
        current,
        count,
        setApi,
        setCurrent,
    }
}