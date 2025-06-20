import type { PlaceholdersGridProps } from "@/types";

export default function PlaceholdersGrid({ groupIndex, grupo }: PlaceholdersGridProps) {
    return (

        Array.from({ length: 4 - grupo.length }).map((_, i) => {
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
        })
    )
}