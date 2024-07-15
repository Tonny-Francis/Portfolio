import { ITerminalHistory } from "../types/types"
import List from "./log/list";
import Portfolio from "./log/portfolio"
import Simple from "./log/simple"


export default function History({
    history,
    index
}: {
    history: ITerminalHistory;
    index: number;
}) {
    if (history.command === "node portfolio.js") {
        return (
            <Portfolio command="node portfolio.js"/>
        )
    }

    if (history.log && history.log.layout.simple) {
        return (
            <Simple description={history.log.layout.simple.description} command={history.command} index={index} />
        )
    }

    if (history.log && history.log.layout.list) {
        return (
            <List command={history.command} index={index} list={history.log.layout.list}/>
        )
    }
}