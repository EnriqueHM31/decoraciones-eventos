
type FiltroGenero = "Hombre" | "Mujer" | "Santos" | null;

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

export interface Altar {
    id: number;
    imagenes: string[];
    genero: string;
    colores: string[];
}

export interface GrupoAltaresProps {
    altar: Altar;
    img: string;
}

export interface EstructuraImagenProps {
    groupIndex: number;
    index: number;
}

export interface PlaceholdersGridProps {
    groupIndex: number;
    grupo: {
        altar: Altar;
        img: string;
    }[]
}

export interface ImagenGaleriaProps {
    altar: {
        altar: Altar;
        img: string;
    }
    index: number;
    isLazy: boolean;
    heightClass: string;
}

interface ImagenesCarruselProps {
    images: string[];
}

type IconoGeneroKey = "IoMdMan" | "IoMdWoman" | "GiChurch";


export interface GeneroProps {
    color: string;
    genero: string;
    icono: IconoGeneroKey;
}

interface ColorProps {
    nombre: string;
    clase: string;
    texto: string;
    bordeCirculo: string;
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