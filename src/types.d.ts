export interface ImageOverlayGalleryProps {
    images: string[];
    styles?: string;
    lazy?: boolean;
}

export interface AltaresJsonProps {
    altares: Array<{
        id: number;
        imagenes: string[];
    }>;
}

interface FormularioEmailProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleClickFormulario: () => void;
}