import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaRegComments } from "react-icons/fa";
import { LINKS } from "@/assets/ts/constantes";
import IMAGENLOGO from "@/assets/img/Logo.webp";
import { useNavegaciones } from "@/hooks/Navigate";
import { useModalEventos } from "@/hooks/ModalEventos";
import FormularioEmail from "@/components/Email/FormularioEmail";

export default function Navegacion() {
    const { isOpenMenuBurguer, handleClickOpenMenuBurguer, isOpenFormulario, handleClickFormulario, handleSubmit } = useModalEventos();
    const { location } = useNavegaciones();


    return (
        <>
            {isOpenFormulario && (
                <FormularioEmail
                    handleSubmit={handleSubmit}
                    handleClickFormulario={handleClickFormulario}
                />
            )}

            <div className="bg-primary w-full flex items-center justify-center backdrop-blur-sm">
                <nav className="flex justify-between items-center xl:max-w-11/12 lg:max-w-11/12 max-w-full px-5 lg:px-4 xl:px-0 w-full py-3">
                    {/* Logo y Título */}
                    <div className="text-xl: text-white flex items-center gap-2 ">
                        <img src={IMAGENLOGO} alt="logo" className="max-w-14" />
                        <span className="font-bold xl:text-xl: text-sm max-w-1/2 xl:max-w-full">
                            Decoraciones para Eventos
                        </span>
                    </div>

                    <ul
                        className={`items-center justify-between xl:justify-center 
                            absolute top-24 xl:top-0 left-1/2 xl:left-0 -translate-x-1/2 xl:translate-none
                            shadow rounded-xl
                            bg-primary
                            w-full max-w-10/12 xl:max-w-4/6
                            z-50 mt-5 xl:mt-0
                            xl:flex-row flex-col flex
                            xl:gap-8 gap-2
                            p-3 xl:p-0
                            transition-all duration-300 ease-in-out
                            ${isOpenMenuBurguer
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 -translate-y-4 pointer-events-none"
                            }
                            xl:flex xl:order-1 xl:static xl:translate-x-0 xl:opacity-100 xl:pointer-events-auto`}
                    >
                        {LINKS.map((link, index) => (
                            <li
                                key={index}
                                className="w-full flex"
                            >
                                <a href={link.to} className={`group relative xl:text-xl: px-3 xl:py-1 py-2 hover:-translate-y-2.5 duration-500 transition-all w-full text-center xl:w-fit  flex-1
                                    ${location.pathname === link.to
                                        ? "bg-white text-primary font-bold xl:bg-transparent xl:text-white "
                                        : "text-white"
                                    }`}>
                                    {link.label}
                                    <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left`}
                                    ></span>
                                </a>
                            </li>
                        ))}
                        <li className="group xl:text-xl: px-3 xl:py-1 py-2 hover:-translate-y-2.5 duration-500 transition-all w-full text-center xl:w-fit">
                            <button
                                className=" text-primary py-1 px-2 rounded-2xl:  border border-transparent cursor-pointer text-md w-full lg:w-fit transition-all duration-500 ease-in-out hover:bg-primary lg:hover:border-white md:rounded-full lg:hover:text-white"
                                title="Ver Eventos"
                                aria-label="Ver Eventos"
                                onClick={handleClickFormulario}
                            >

                                <FaRegComments className="lg:size-7 text-white lg:flex hidden" />

                                <p className="text-white lg:hidden">
                                    Enviar un comentario
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left
                                        `}
                                    ></span>
                                </p>
                            </button>
                        </li>
                    </ul>



                    {/* Botón menú hamburguesa */}
                    <button
                        className="xl:hidden flex"
                        onClick={handleClickOpenMenuBurguer}
                        title="Abrir menú"
                        aria-label="Abrir menú"
                    >
                        {isOpenMenuBurguer ? (
                            <IoClose color="white" size={30} />
                        ) : (
                            <CgMenuRightAlt color="white" size={30} />
                        )}
                    </button>
                </nav>
            </div >
        </>
    );
}
