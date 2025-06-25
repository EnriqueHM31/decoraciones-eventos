import { motion } from "framer-motion";
import ItemGaleria from "@/components/Galeria/ItemGaleria";
import type { ImagenGaleriaProps } from "@/types";


export default function CardAnimacion({ galeriaImagenes, index, isLazy }: ImagenGaleriaProps) {

    return (
        <>

            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.3 } }}
                whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                className={`w-full rounded-lg overflow-hidden object-cover  h-52`}
            >
                <ItemGaleria
                    images={galeriaImagenes.imagenes}
                    styles="h-full w-full"
                    lazy={isLazy ?? "eager"}
                />
            </motion.div>
        </>
    )
}