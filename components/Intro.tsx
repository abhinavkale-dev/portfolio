import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'

const Intro = () => {
  return (
    <div className="p-4">
      <Card className="border border-zinc-700 bg-[#121212] text-[#E1E3E5] shadow-lg hover:shadow-xl transition-all duration-300 ease-out relative">
        
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#64FFDA] rounded-tl-md"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#64FFDA] rounded-tr-md"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#64FFDA] rounded-bl-md"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#64FFDA] rounded-br-md"></div>
        
        <CardContent className="text-[#E1E3E5] p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-shrink-0 mt-4">
                <Image
                  src="/test.jpeg"
                  width={100}
                  height={100}
                  className="rounded-lg"
                  alt="My profile picture"
                />
              </div>
              <div className="flex flex-col text-center md:text-left mt-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <div className="text-3xl md:text-4xl font-bold text-[#64FFDA]">
                    Abhinav Kale
                  </div>

                  <div className="select-none font-medium text-xs w-fit mx-auto sm:mx-0 border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-[#64FFDA] text-[#64FFDA] mt-2 sm:mt-0">
                    <span className="animate-pulse">
                      <svg 
                      stroke="#64FFDA" 
                      fill="#64FFDA" 
                      strokeWidth="0" 
                      viewBox="0 0 24 24" 
                      height="1em" 
                      width="1em" 
                      xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                      </svg>
                    </span>
                    Available
                  </div>
                </div>
                <div className="my-1 text-zinc-200">
                  Software Engineer
                </div>
                <div className="flex items-center justify-center md:justify-start text-zinc-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail w-4 h-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <Link href="mailto:abhinavkale919913@gmail.com">
                    <p className="px-2 py-1 hover:text-white transition-colors truncate">
                      abhinavkale919913@gmail.com
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0 md:self-start md:pt-2">
              <a 
                href="https://github.com/abhinavkale-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E1E3E5] hover:text-[#64ffda] transition-colors"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="https://x.com/Abhinavstwt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#E1E3E5] hover:text-[#64ffda] transition-colors"
              >
                <FaXTwitter size={22} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left">
            <div className="text-md leading-relaxed tracking-normal px-4 md:px-0">
              I build full stack apps that matter and I'm just starting my web3 journey to push boundaries.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Intro
