export interface ITerminalHistory {
    command: string;
    log?: ILog;
}

export interface IList {
    title: string;
    options: {
        item: string;
        description?: string;
    }[];
}

export interface ILog {
    layout: {
        simple?: {
            description: string;
        },
        list?: IList;
    },
}