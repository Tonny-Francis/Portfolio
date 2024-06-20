import { ITerminalHistory } from "../types/types"
import Portfolio from "./log/portfolio"
import Simple from "./log/simple"

export default function History({
    history,
    index
}: {
    history: ITerminalHistory,
    index: number
}) {
    if (history.command === "node portfolio.js") {
        return (
            <Portfolio />
        )
    }

    if (history.log && history.log.layout.simple) {
        return (
            <Simple description={history.log.layout.simple.description} index={index} />
        )
    }

    if (history.log && history.log.layout.table) {
        return (
            <div>

            </div>
        )
    }
}