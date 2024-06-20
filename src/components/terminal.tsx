'use client'

import React, { useState, useEffect } from 'react';
import { ITerminalHistory } from '../types/types';
import Commands from '../helpers/commands';
import History from './history';

export default function Terminal() {
    const [width, setWidth] = useState<number>(0)
    const [height, setHeight] = useState<number>(0)

    const calculateWidth = () => setWidth(window.innerWidth)
    const calculateHeight = () => setHeight(window.innerHeight)

    const [terminalHistory, setterminalHistory] = useState<ITerminalHistory[]>([])

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const command = event.currentTarget.value
            const response = Commands(command)

            console.log(response)

            setterminalHistory([
                ...terminalHistory,
                {
                    command,
                    log: response
                }
            ])

            command === 'clear' && handlerClear()

            event.currentTarget.value = ''
        }
    }

    const handlerClear = () => {
        setterminalHistory([])
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
            <div className="overflow-y-auto">
                {
                    terminalHistory.map((history, index) => {
                        return (
                            <History key={index} history={history} index={index}/>
                        )
                    })
                }
                <div className="p-2 flex flex-row">
                    <p className="">
                        <span className="text-yellow-500">public</span>
                        <span className="text-white">@</span>
                        <span className="text-green-500">tonnysousa.dev</span>
                        <span className="text-white mr-1">~</span>
                        <span className="text-white">$</span>
                    </p>
                    <input type="text" autoFocus onKeyDown={onKeyDown} className="bg-transparent text-white w-full focus:outline-none ml-2"/>
                </div>
            </div>
        </div>
    );
}
