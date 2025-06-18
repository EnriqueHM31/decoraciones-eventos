import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { useLocation } from "react-router-dom";


export default function Navegacion() {
    const [isOpen, setIsOpen] = useState(false);

    const LINKS = [
        { label: 'Inicio', to: '/' },
        { label: 'Altares', to: '/altares' },
        { label: 'Areas Principales', to: '/areas-principales' },
        { label: 'Eventos', to: '/eventos' },
    ]

    const navigate = useLocation();

    const handleClickOpenMenu = () => {
        setIsOpen(!isOpen);
    }


    return (
        <div className={`bg-primary w-full flex items-center justify-center backdrop-blur-sm`}>
            <nav className="flex justify-between items-center xl:max-w-11/12 lg:max-w-11/12 max-w-full px-5 lg:px-4 xl:px-0 w-full py-5">
                <div className="text-xl text-white">
                    LOGO
                </div>

                <ul
                    className={`items-center justify-between 
                                    absolute top-15 xl:top-0 left-1/2 xl:left-0 -translate-x-1/2 xl:translate-none
                                    shadow rounded-xl
                                    w-full max-w-10/12
                                    bg-primary
                                    z-50 mt-5 xl:mt-0
                                    xl:flex-row flex-col flex
                                    xl:gap-8 gap-2
                                    p-3 xl:p-0
                                    transition-all duration-300 ease-in-out
                                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
                                    xl:flex xl:w-auto xl:order-1 xl:static xl:translate-x-0 xl:opacity-100 xl:pointer-events-auto`}
                >
                    {LINKS.map((link, index) => (
                        <a
                            href={link.to}
                            key={index}
                            className={`group relative xl:text-xl px-3 xl:py-3 py-2 hover:-translate-y-2.5 duration-500 transition-all  w-full text-center xl:w-fit border-b-4 border-transparent
                            ${navigate.pathname === link.to
                                    ? "bg-white text-primary font-bold  xl:bg-transparent xl:text-white xl:border-white"
                                    : "text-white"
                                }`}
                        >
                            {link.label}
                            <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 origin-right transition-transform duration-500 ${navigate.pathname !== link.to ? "group-hover:scale-x-100 group-hover:origin-left" : ""}`}></span>
                        </a>
                    ))}
                </ul>

                <button className="xl:hidden flex" onClick={handleClickOpenMenu}>
                    <CgMenuRightAlt color="white" size={30} />
                </button>
            </nav>
        </div>
    )
}