import { ITerminalHistory } from "@/src/types/types";
import Input from "../input";

export default function Simple({
    description,
    command,
    index
}: {
    description: string;
    command: string;
    index: number;
}) {
    return (
        <div>
            <Input value={command} disabled={true} />
            <p key={index} className="text-white ml-4">
                {description}
            </p>
        </div>
    )
}