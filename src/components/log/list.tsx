import { IList } from "@/src/types/types";
import Input from "../input";

export default function List({
    command,
    index,
    list
}: {
    command: string;
    index: number;
    list: IList;
}) {
    return (
        <div className="text-white">
            <Input value={command} disabled={true} />
            <div className="ml-4">
                <p>{list.title}</p>
                <div className="ml-8">
                    {list.options.map((option, i) => (
                        <div key={i} className="flex items-start">
                            <div className="w-40 pr-4">
                                <span>{option.item}</span>
                            </div>
                            <div>
                                <span>{option.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
