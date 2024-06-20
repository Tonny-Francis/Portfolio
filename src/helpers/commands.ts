import { ILog } from "../types/types";

export default function Commands(command: string): ILog {
    switch (command) {
        case "help":
            return {
                layout: {
                    table: {
                        title: "Available commands:",
                        sections: [
                            "command",
                            "description",
                        ],
                        data: [
                            {
                                command: "help",
                                description: "Display this help message with a list of all available commands.",
                            },
                            {
                                command: "about",
                                description: "Show detailed information about the developer, including background and interests.",
                            },
                            {
                                command: "skills",
                                description: "List the developer's technical and professional skills.",
                            },
                            {
                                command: "projects",
                                description: "Provide an overview of the developer's key projects, including descriptions and links.",
                            },
                            {
                                command: "contact",
                                description: "Display contact information, including email and social media links.",
                            },
                            {
                                command: "experience",
                                description: "Show the developer's work history and professional experience.",
                            },
                            {
                                command: "clear",
                                description: "Clear the terminal screen for a fresh start.",
                            },
                        ],
                    }
                }
            }

        default:
            return {
                layout: {
                    simple: {
                        description: "Command not found. Type 'help' to see a list of available commands.",
                    }
                }
            }
    }
}
