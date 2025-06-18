import IMAGEN404 from "@/assets/img/404.webp";
import { useNavegaciones } from "@/hooks/Navigate";


export default function Error404() {

    const { goHome } = useNavegaciones();

    return (
        <>

            <section className="flex xl:flex-row flex-col items-center  justify-center h-dvh py-5 max-w-3/4 mx-auto gap-10">

                <div className=" flex gap-3 flex-col xl:items-start items-center">
                    <h1 className="text-black xl:text-7xl lg:text-6xl text-4xl font-bold">Ooops .....</h1>
                    <p className="text-black xl:text-2xl lg:text-lg text-2xl xl:text-start text-center">
                        La página que estás buscando no existe
                    </p>
                    <p className="xl:text-sm text-lg xl:text-start text-center">
                        Por favor, vuelve a la página de inicio
                    </p>
                    <button onClick={goHome} className="bg-primary px-8 py-3 text-white rounded-2xl w-fit xl:text-md font-bold">
                        Volver al Inicio
                    </button>
                </div>
                <picture className=" xl:max-h-3/4 max-h-full">
                    <img src={IMAGEN404} alt="logo" className="xl:max-h-3/4 max-h-full object-cover object-right" />
                </picture>
            </section>


        </>
    )
}