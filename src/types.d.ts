
type FiltroGenero = "Hombre" | "Mujer" | "Santos" | "Mixto" | null;

type Galeria = Altar[] | Decoracion[] | null

interface GaleriaProps {
    MOOKS: Galeria;
    tipo: string;
}

interface GaleriaColumnasProps {
    galeria: Altar | Decoracion;
    img: string
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
    altar?: Altar | undefined;
    decoracion?: Decoracion | undefined;
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