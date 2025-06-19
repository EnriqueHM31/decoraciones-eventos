import { motion } from "framer-motion";
import { ALTARESJSON } from "@/assets/mooks/altares";
import SliderImagenes from "@/components/SliderImagenes";

function chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export default function GaleriaAltares() {
    const imagenesConAltar = ALTARESJSON
        .filter((altar) => altar.imagenes.length > 0)
        .map((altar) => ({ altar, img: altar.imagenes[0] }));

    const chunked = chunkArray(imagenesConAltar, 4);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 md:max-w-11/12 w-full ">
            {chunked.map((grupo, groupIndex) => (
                <div key={groupIndex} className="grid gap-8">
                    {grupo.map((altar, index) => {
                        const isEvenGroup = groupIndex % 2 === 0;
                        const use20vh = (index % 2 === 0 && isEvenGroup) || (index % 2 !== 0 && !isEvenGroup);
                        const heightClass = use20vh ? "sm:h-[20vh] h-[40vh]" : "sm:h-[60vh] h-[40vh]";

                        return (
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
                                <SliderImagenes index={index} images={altar.altar.imagenes} styles="h-full w-full" />
                            </motion.div>
                        );
                    })}

                    {/* Rellenar con placeholders invisibles si faltan imágenes en este grupo */}
                    {grupo.length < 4 &&
                        Array.from({ length: 4 - grupo.length }).map((_, i) => {
                            // Continuar el patrón alternante en la columna
                            const index = grupo.length + i;
                            const isEvenGroup = groupIndex % 2 === 0;
                            const use20vh = (index % 2 === 0 && isEvenGroup) || (index % 2 !== 0 && !isEvenGroup);
                            const heightClass = use20vh ? "h-[20vh]" : "h-[60vh]";

                            return (
                                <div
                                    key={`placeholder-${i}`}
                                    className={`w-full rounded-lg opacity-0 pointer-events-none ${heightClass}`}
                                />
                            );
                        })}
                </div>
            ))}
        </div>
    );
}
