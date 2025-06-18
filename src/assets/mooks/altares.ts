export interface Altar {
    id: number;
    imagenes: string[];
}
import { IMAGENESALTARES1, IMAGENESALTARES2 } from "@/assets/mooks/imagenes";

export const ALTARESJSON: Altar[] = [
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 2,
        imagenes: [
            ...IMAGENESALTARES2,
        ]
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    }, {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    }, {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    }, {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    }, {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    }, {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },
    {
        id: 1,
        imagenes: [...IMAGENESALTARES1] // o simplemente: imagenes: IMAGENESALTARES1
    },




];
