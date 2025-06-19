export interface ImageOverlayGalleryProps {
    images: string[];
    styles?: string;
    index: number;
}

export interface AltaresJsonProps {
    altares: Array<{
        id: number;
        imagenes: string[];
    }>;
}