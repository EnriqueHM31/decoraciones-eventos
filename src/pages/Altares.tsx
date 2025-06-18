import Navegacion from "@/components/Navegacion";
import GaleriaAltares from "@/components/GaleriaImagenes";

export default function Altares() {
    return (
        <>
            <Navegacion />

            <section className="flex flex-col items-center justify-center gap-8 py-8">
                <div className="flex flex-col items-center justify-center gap-6 ">
                    <GaleriaAltares />
                </div>
            </section>

        </>
    );
}