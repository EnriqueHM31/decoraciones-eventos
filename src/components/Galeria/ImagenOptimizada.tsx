import { LazyLoadImage } from 'react-lazy-load-image-component';


interface ImagenOptimizadaProps {
    url: string;
    alt: string;
    clases: string;
}

export default function ImagenOptimizada({ url, alt, clases }: ImagenOptimizadaProps) {
    return (
        <LazyLoadImage
            src={url}
            alt={alt}
            className={clases}
            aria-label={alt}
            title={alt}
            crossOrigin="anonymous"

        />
    );
}
