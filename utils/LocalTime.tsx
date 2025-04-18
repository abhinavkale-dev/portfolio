"use client"

import { useEffect, useState } from "react"
import { Space_Mono } from "next/font/google"

const space_mono = Space_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const LocalTime = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null)

    useEffect(() => {
      setCurrentTime(new Date())
      
      const interval = setInterval(() => {
        setCurrentTime(new Date())
      }, 1000)
  
      return () => clearInterval(interval)
    }, [])
  return (
    <div className={`flex gap-1 md:gap-2 items-center text-[#00FFD1]/65 mx-7 my-3 ${space_mono.className} font-medium`}>
      <a 
        href="https://www.google.com/search?q=time" 
        target="_blank" 
        className="hover:text-[#00FFD1]/90 transition-all duration-100"
      >
        <span className="md:text-sm text-base">
          {currentTime ? currentTime.toLocaleString([],{ hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--"}
        </span>
      </a>
      <span className={`hidden md:block text-sm ${space_mono.className}`}> (GMT+5:30)</span>
      <span className={`hidden md:block text-sm ${space_mono.className}`}> Nagpur, India</span>
    </div>
  )
}

export default LocalTime