import { FaFilter } from "react-icons/fa";

export default function BotonAbrirFiltros({ toggleAside }: { toggleAside: () => void }) {
    return (
        <div className=" justify-end mb-2 w-full max-w-11/12 cursor-pointer">
            <button
                onClick={toggleAside}
                className="xl:p-6 p-5 size-14 md:size-18 flex items-center justify-center rounded-full bg-primary text-white fixed bottom-4 right-4 md:bottom-1/12 md:right-10 z-50"
            >
                <FaFilter className="size-14 text-white" />
            </button>
        </div>
    )
}