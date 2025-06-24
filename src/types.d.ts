
export type FiltroGenero = "Hombre" | "Mujer" | "Santos" | "Mixto" | null;

export type Galeria = Altar[] | Decoracion[] | AreaPrincipal[]
export interface GaleriaProps {
    MOOKS: Galeria;
    tipo: string;
}

export interface GaleriaColumnasProps {
    galeria: Altar | Decoracion | AreaPrincipal;
}

export interface Altar {
    id: number;
    imagenes: string[];
    genero: string;
    colores: string[];
}

export interface Decoracion {
    imagenes: string[];
}

export interface AreaPrincipal {
    imagenes: string[];
}

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

export interface FormularioEmailProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleClickFormulario: () => void;
}


export interface GrupoAltaresProps {
    altar: Altar;
    img: string;
}

export interface EstructuraImagenProps {
    groupIndex: number;
    index: number;
    arrayGaleria: GaleriaColumnasProps[] | null;
}

export interface PlaceholdersGridProps {
    groupIndex: number;
    grupo: {
        altar: Altar;
        img: string;
    }[]
}

export interface ImagenGaleriaProps {
    galeriaImagenes: Altar | Decoracion | AreaPrincipal
    index: number;
    isLazy: boolean;
}

export interface ImagenesCarruselProps {
    images: string[];
}

export type IconoGeneroKey = "IoMdMan" | "IoMdWoman" | "GiChurch";

export interface BotonMenuProps {
    toggleAside?: () => void;
    tipo: "altares" | "decoraciones";
}


export interface GeneroProps {
    color: string;
    genero: string;
    icono: IconoGeneroKey;
}

export interface ColorProps {
    nombre: string;
    clase: string;
    texto: string;
    bordeCirculo: string;
}

export interface PrevisualizacionMensajeWhatsappProps {
    imagenSeleccionada: string;
    handleMensaje: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleClickCloseWhatsapp: () => void;
    mensaje: string;
}

export interface HooksWhatsappProps {
    images: string[];
    current: number;
}



export interface GaleriaStore {
    filtroGenero: FiltroGenero;
    filtroColores: string[];
    setFiltroGenero: (genero: FiltroGenero) => void;
    toggleColor: (color: string) => void;
    limpiarFiltros: () => void;
    removeGenero: () => void;
    removeColor: (color: string) => void;
}