export interface ImageOverlayGalleryProps {
    images: string[];
    styles?: string;
}

export interface AltaresJsonProps {
    altares: Array<{
        id: number;
        imagenes: string[];
    }>;
}