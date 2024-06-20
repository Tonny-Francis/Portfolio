'use client'

import { useEffect, useState } from "react";
import { asciiMaintenance, asciiMaintenanceFramesLoading } from "../ascii/ascii";

function LoadingAnimation() {
    const [frameIndex, setFrameIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFrameIndex(prevIndex => (prevIndex + 1) % asciiMaintenanceFramesLoading.length);
      }, 200);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="font-mono text-2xl">
        <pre className="text-white">{asciiMaintenanceFramesLoading[frameIndex]}</pre>
      </div>
    );
}

export default function Maintenance() {
    return (
        <div className="flex flex-col items-center gap-5">
            <pre className="text-white font-extrabold">
                {
                    asciiMaintenance
                }
            </pre>
            <LoadingAnimation />
        </div>
    )
}