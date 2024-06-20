export interface ITerminalHistory {
    command: string;
    log?: ILog;
}

export interface ILog {
    layout: {
        simple?: {
            description: string;
        },
        table?: {
            title: string;
            sections: string[];
            data: {
                command: string;
                description: string;
            }[];
        }
    },
}