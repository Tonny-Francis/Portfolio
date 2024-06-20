import { asciiBug, asciiName } from "@/src/ascii/ascii";

export default function Portfolio() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row ">
                <pre className="text-[4px] text-white text-center mr-6">
                    {
                        asciiBug
                    }
                </pre>
                <pre className="text-[12px] text-white text-center">
                    {
                        asciiName
                    }
                </pre>
            </div>
            <div>
                <p className='text-white'>
                    <span>
                        To view the available commands, type &rsquo;help&rsquo;.
                    </span>
                </p>
            </div>
        </div>
    )

}