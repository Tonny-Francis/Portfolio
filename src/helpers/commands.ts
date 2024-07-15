import { ILog } from "../types/types";

export default function Commands(command: string): ILog {
    switch (command) {
        case "help":
            return {
                layout: {
                    list: {
                        title: "Available commands:",
                        options: [
                            {
                                item: "help",
                                description: "Display this help message with a list of all available commands.",
                            },
                            {
                                item: "about",
                                description: "Show detailed information about the developer, including background and interests.",
                            },
                            {
                                item: "skills",
                                description: "List the developer's technical and professional skills.",
                            },
                            {
                                item: "projects",
                                description: "Provide an overview of the developer's key projects, including descriptions and links.",
                            },
                            {
                                item: "contact",
                                description: "Display contact information, including email and social media links.",
                            },
                            {
                                item: "experience",
                                description: "Show the developer's work history and professional experience.",
                            },
                            {
                                item: "clear",
                                description: "Clear the terminal screen for a fresh start.",
                            },
                        ],
                    }
                }
            }

        case "about":
            return {
                layout: {
                    simple: {
                        description: "I am currently pursuing a double degree in Control and Automation Engineering at UFRJ and Software Development Analysis at IBMR. My academic journey fuels my passion for solving complex problems through technology. Currently, I work as a full-stack developer at convem, where I contribute to building robust and innovative solutions.",
                    }
                }
            }

        case "skills":
            return {
                layout: {
                    list: {
                        title: "Skills:",
                        options: [
                            {
                                item: "Languages",
                                description: "JavaScript, TypeScript, Go Lang, Python",
                            },
                            {
                                item: "Frameworks",
                                description: "React, Next.js, Angular, Express",
                            },
                            {
                                item: "Tools",
                                description: "Git, Docker, Figma, Kubernetes, Grafana, Rancher",
                            },
                            {
                                item: "Databases",
                                description: "MySQL, PostgreSQL, DynamoDB, SQLite",
                            },
                            {
                                item: "Clouds",
                                description: "AWS, Oracle Cloud",
                            }
                        ],
                    }
                }
            }

        case "projects":
            return {
                layout: {
                    simple: {
                        description: "Working on the issue, news coming soon.",
                    }
                }
            }

        case "contact":
            return {
                layout: {
                    list: {
                        title: "Contact:",
                        options: [
                            {
                                item: "Email",
                                description: "tonnyfrancis161@poli.ufrj.br"
                            },
                            {
                                item: "GitHub",
                                description: "https://github.com/Tonny-Francis"
                            },
                            {
                                item: "LinkedIn",
                                description: "https://www.linkedin.com/in/tonny-francis/"
                            }
                        ]
                    }
                }
            }

        case "experience":
            return {
                layout: {
                    list: {
                        title: "Experience:",
                        options: [
                            {
                                item: "Convem",
                                description: "Full-Stack Developer, @2022 - Present",
                            },
                            {
                                item: "Regulatório Mais",
                                description: "Full-Stack Developer, @2024 - Present",
                            }
                        ]
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
