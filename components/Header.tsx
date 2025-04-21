"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    // Set active based on current path
    if (pathname === '/') setActiveItem('home')
    else if (pathname === '/projects') setActiveItem('projects')
    else if (pathname === '/blogs') setActiveItem('blogs')
  }, [pathname])

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Blogs', path: '/blogs', id: 'blogs' }
  ]

  return (
    <nav className="px-1 py-2 mb-6 mt-8">
      <div className="backdrop-blur-md bg-black/30 rounded-full border border-white/10 shadow-lg w-fit mx-auto">
        <div className="px-3 py-2">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <Link 
                  href={item.path}
                  className={`px-3 py-1.5 ${index > 0 ? 'ml-1 md:ml-2' : ''} rounded-full transition-all duration-200 text-sm md:text-base font-medium ${
                    activeItem === item.id 
                      ? 'bg-[#00FFD1]/20 text-[#00FFD1]' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header 