export default function Input({
    value,
    disabled,
    onKeyDown,
    onChange,
    useRef
}:{
    value?: string
    disabled?: boolean
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    useRef?: React.RefObject<HTMLInputElement>
}) {
    return (
        <div className="p-2 flex flex-row">
            <p className="">
                <span className="text-yellow-500">public</span>
                <span className="text-white">@</span>
                <span className="text-green-500">tonnysousa.dev</span>
                <span className="text-white mr-1">~</span>
                <span className="text-white">$</span>
            </p>
            <input ref={useRef} type="text" disabled={disabled} value={value} autoFocus onChange={onChange} onKeyDown={onKeyDown} className="bg-transparent text-white w-full focus:outline-none ml-2" />
        </div>
    )
}