"use client"

import { useEffect, useState } from "react"

const LocalTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date())
      }, 30000)
  
      return () => clearInterval(interval)
    }, [])
  return (
    <div>
      <a 
        href="https://www.google.com/search?q=time" 
        target="_blank" 
        className="flex gap-1 md:gap-2 items-center text-[#00FFD1]/65 hover:text-[#00FFD1]/90 transition-all duration-100 font-medium mx-7 my-3"
      >
        <span className="hidden md:block">Local time : </span>
        <span className="md:text-sm text-base">
          {currentTime.toLocaleString([],{ hour: "2-digit", minute: "2-digit" })}
        </span>
      </a>
    </div>
  )
}

export default LocalTime