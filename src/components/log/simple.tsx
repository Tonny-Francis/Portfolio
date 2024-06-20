import { ITerminalHistory } from "@/src/types/types";

export default function Simple({
    description,
    index
}: {
    description: string;
    index: number;
}) {

    return (
        <p key={index} className="text-white">
            {description}
        </p>
    )
}