import IMAGENLOGO from "@/assets/img/Logo.webp";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { toast } from "sonner";




export default function Footer() {

    const handleClickProximamente = () => {
        toast.info("Proximamente nuestras redes sociales")
    }

    return (

        <>

            <footer className="bg-primary w-full py-5">
                <div className="flex flex-col items-center justify-between max-w-11/12 mx-auto">

                    <div className="flex w-full items-center justify-between">

                        <section className="flex flex-col  h-full ">
                            <div className="flex  items-center gap-3 justify-between h-full">
                                <img src={IMAGENLOGO} alt="logo" className="size-10 lg:size-14 object-cover" />
                                <div className="flex flex-col h-full">

                                    <h2 className=" text-md font-bold text-white">Decoraciones para tus eventos!</h2>

                                    <p className="mt-1 text-white/50 text-sm">
                                        Huatusco,Veracruz
                                    </p>
                                </div>

                            </div>


                        </section>

                        <div className=" text-center">

                            <p className=" text-whitefont-bold text-md flex-1 ">
                                &copy; {new Date().getFullYear()} Decoraciones para tus eventos.
                            </p>
                        </div>

                        <section className="">
                            <ul className=" flex gap-8 ps-4 justify-end">
                                <li>
                                    <button
                                        onClick={handleClickProximamente}
                                        rel="noreferrer"
                                        className=" transition hover:opacity-75 text-white cursor-pointer"
                                        title="Facebook"
                                        aria-label="Facebook"
                                        aria-labelledby="facebook-title"
                                        type="button"
                                    >
                                        <span className="sr-only">Facebook</span>

                                        <FaFacebookSquare className="size-7 transition-all duration-500 ease-in-out hover:scale-125 hover:-translate-y-4 " />
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={handleClickProximamente}
                                        rel="noreferrer"
                                        className=" transition hover:opacity-75 text-white cursor-pointer"
                                        title="Instagram"
                                        aria-label="Instagram"
                                        aria-labelledby="instagram-title"
                                        type="button"
                                    >
                                        <FiInstagram className="size-7 transition-all duration-500 ease-in-out hover:scale-125 hover:-translate-y-4 " />
                                    </button>
                                </li>

                                <li>
                                    <button
                                        onClick={handleClickProximamente}
                                        rel="noreferrer"
                                        className=" transition hover:opacity-75 text-white cursor-pointer"
                                        title="Twitter"
                                        aria-label="Twitter"
                                        aria-labelledby="twitter-title"
                                        type="button"
                                    >
                                        <FiTwitter className="size-7 transition-all duration-500 ease-in-out hover:scale-125 hover:-translate-y-4 " />
                                    </button>
                                </li>

                            </ul>

                        </section>
                    </div>



                </div>
            </footer>
        </>
    )
}

