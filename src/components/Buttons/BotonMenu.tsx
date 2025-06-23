import { useNavegaciones } from "@/hooks/Navigate";
import { FaFilter, FaBars } from "react-icons/fa";
import { GoMoveToTop } from "react-icons/go";
import { useMenuOpciones } from "@/hooks/MenuOpciones";
import type { BotonMenuProps } from "@/types";

export default function BotonMenu({ toggleAside, tipo }: BotonMenuProps) {
    const { goInicio } = useNavegaciones();
    const { toggleMenu, menuAbierto, animandoCierre } = useMenuOpciones();

    return (
        <div className="fixed bottom-8 right-4 md:bottom-14 md:right-14 z-50">
            <div className="relative">
                {/* Botón flotante */}
                <button
                    onClick={toggleMenu}
                    className="bg-primary text-white md:p-5 p-4 rounded-full shadow-lg border-white border"
                    aria-label="Abrir menú "
                >
                    <FaBars className="text-xl md:text-2xl" />
                </button>

                {/* Menú flotante animado */}
                {(menuAbierto || animandoCierre) && (
                    <div
                        className={`absolute bottom-full right-0 mb-4 flex flex-col items-end gap-2 z-50 bg-black p-2 rounded-2xl
                ${animandoCierre ? 'animate-fade-out' : 'animate-fade-in'}`}
                    >
                        {tipo === "altares" && toggleAside && (
                            <button
                                onClick={() => {
                                    toggleAside();
                                    toggleMenu();
                                }}
                                className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition min-w-48 flex items-center gap-2"
                            >
                                <FaFilter className="inline-block mr-2" />
                                Filtros
                            </button>
                        )}

                        <button
                            onClick={() => {
                                goInicio();
                                toggleMenu();
                            }}
                            className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-white hover:text-black transition min-w-48 flex items-center gap-2"
                        >
                            <GoMoveToTop className="inline-block mr-2" />
                            Volver al inicio
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
