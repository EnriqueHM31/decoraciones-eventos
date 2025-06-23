import { motion } from "framer-motion";
import SliderImagenes from "@/components/Galeria/SliderImagenes";
import type { ImagenGaleriaProps } from "@/types";


export default function ImagenGaleria({ altar, decoracion, index, isLazy, heightClass }: ImagenGaleriaProps) {
    return (
        <>
            {
                altar && (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.5 } }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`w-full rounded-lg overflow-hidden ${heightClass}`}
                    >
                        <SliderImagenes
                            images={altar.imagenes}
                            styles="h-full w-full"
                            lazy={isLazy}
                        />
                    </motion.div>
                )

            }
            {
                decoracion && (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.5 } }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: index * 0.1,
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={`w-full rounded-lg overflow-hidden ${heightClass}`}
                    >
                        <SliderImagenes
                            images={decoracion.imagenes}
                            styles="h-full w-full"
                            lazy={isLazy}
                        />
                    </motion.div>
                )
            }

        </>
    )
}