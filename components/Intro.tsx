import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className="p-4">
      <Card variant="corners">
        <CardContent className="text-white">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <div className="flex-shrink-0">
              <Image
                src="/test.jpeg"
                width={100}
                height={100}
                className="rounded-lg"
                alt="My profile picture"
              />
            </div>
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">Abhinav Kale</h1>
              <p className="my-1 text-zinc-200">Software Engineer</p>
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
          <div className="mt-6 text-center md:text-left">
            <p className="text-md leading-relaxed tracking-normal px-4 md:px-0">
              I build full stack apps that matter and I&apos;m just starting my web3 journey to push boundaries.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Intro
