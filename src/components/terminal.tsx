'use client'

import React, { useState, useEffect, useRef } from 'react';
import { ITerminalHistory } from '../types/types';
import Commands from '../helpers/commands';
import History from './history';
import Input from './input';

export default function Terminal() {
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)
    const [oldCommands, setOldCommands] = useState<string[]>([])
    const [currentCommandOldCommands, setCurrentCommandOldCommands] = useState<number | undefined>(undefined)
    const [currentCommand, setCurrentCommand] = useState<string>('')
    const contentRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const calculateWidth = () => setWidth(window.innerWidth)
    const calculateHeight = () => setHeight(window.innerHeight)

    const [terminalHistory, setterminalHistory] = useState<ITerminalHistory[]>([])

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const command = event.currentTarget.value
            const response = Commands(command.toLowerCase())

            console.log(response)

            setterminalHistory([
                ...terminalHistory,
                {
                    command,
                    log: response
                }
            ])

            setOldCommands([
                ...oldCommands,
                command
            ])

            command === 'clear' && handlerClear()

            setCurrentCommand('')
        }

        if (event.key === 'ArrowUp') {
            if (currentCommandOldCommands === undefined) {
                setCurrentCommandOldCommands(oldCommands.length - 1)
    
                setCurrentCommand(oldCommands[oldCommands.length - 1])
            }
    
            if (currentCommandOldCommands !== undefined) {
                setCurrentCommandOldCommands(currentCommandOldCommands - 1)
                setCurrentCommand(oldCommands[currentCommandOldCommands])
            }
        }
    }

    const handlerClear = () => {
        setterminalHistory([])
    }

    const scrollToBottom = () => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }

    const handlerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentCommand(event.currentTarget.value)
    }

    useEffect(() => {
        calculateWidth()
        calculateHeight()

        window.addEventListener('resize', () => {
            calculateWidth()
            calculateHeight()
        })

        setterminalHistory([
            {
                command: 'node portfolio.js',
            }
        ])

        return () => {
            window.removeEventListener('resize', () => {
                calculateWidth()
                calculateHeight()
            })
        }
    }, [])

    useEffect(() => {
        scrollToBottom()
    }, [terminalHistory])

    useEffect(() => {
        document.addEventListener('click', handlerClick)

        return () => {
            document.removeEventListener('click', handlerClick)
        }
    }, [])

    return (
        <div className="w-[100%] md:w-[75%] h-[100%] md:h-[90%] bg-secondary flex flex-col md:rounded-2xl relative">
            <div className="w-full h-[35px] bg-tertiary md:rounded-tl-2xl md:rounded-tr-2xl items-center justify-center flex flex-row">
                <div className="absolute top-2 left-2">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-grow">
                    <h2 className="text-white items-center">
                        tonnysousa -- zsh {
                            width > 768 ? `-- ${(width * 0.75).toFixed(0)}x${(height * 0.9).toFixed(0)}` : ``
                        }
                    </h2>
                </div>
            </div>
            <div ref={contentRef} className="overflow-y-auto">
                {
                    terminalHistory.map((history, index) => {
                        return (
                            <History key={index} history={history} index={index}/>
                        )
                    })
                }
                <Input useRef={inputRef} onKeyDown={onKeyDown} value={currentCommand} onChange={onChange} />
            </div>
        </div>
    );
}
