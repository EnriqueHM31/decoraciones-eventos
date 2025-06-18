import { motion } from "framer-motion";
import { ALTARESJSON } from "@/assets/mooks/altares";
import SliderImagenes from "@/components/SliderImagenes";

// Función para dividir un arreglo en grupos (chunks) de cierto tamaño
function chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export default function GaleriaAltares() {
    // Aplanar todas las imágenes con referencia a su altar
    const imagenesConAltar = ALTARESJSON.flatMap((altar) =>
        altar.imagenes.map((img) => ({ altar, img }))
    );

    // Dividir en grupos de 4 para cada columna
    const chunked = chunkArray(imagenesConAltar, 4);

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-10/12">
            {chunked.map((grupo, groupIndex) => (
                <div key={groupIndex} className="grid gap-4">
                    {grupo.map((altar, index) => {
                        const isEvenGroup = groupIndex % 2 === 0;
                        const use20vh = (index % 2 === 0 && isEvenGroup) || (index % 2 !== 0 && !isEvenGroup);
                        const heightClass = use20vh ? "h-[20vh]" : "h-[60vh]";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={`w-full rounded-lg overflow-hidden ${heightClass} `}
                            >

                                <SliderImagenes images={altar.altar.imagenes} styles="h-full w-full" />
                            </motion.div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
