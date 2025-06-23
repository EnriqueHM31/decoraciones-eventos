import Navegacion from "@/components/Navegacion";
import TituloPagina from "@/components/TituloPagina";

export default function AreasPrincipales() {
    return (
        <>
            <TituloPagina titulo="Areas Principales" />

            <Navegacion />

            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">
                    ¡Hola! 👋
                </h1>
                <p className="text-xl">
                    Bienvenido a nuestra aplicación de decoración de eventos.
                </p>
                <p className="text-xl">
                    Esta es una aplicación web que te permite encontrar y ver diferentes decoraciones de eventos.
                </p>
                <p className="text-xl">
                    ¡Esperamos que disfrutes de nuestra aplicación y que te resulte útil!
                    😊
                </p>

            </div>


        </>
    );
}