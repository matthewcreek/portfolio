'use client';

import { useState, useEffect, useRef } from 'react'
import Image from "next/image";
import headshot from '../../public/Images/headshot.jpg'
import Link from 'next/link';

export default function Home() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
         const checkIfClickedOutside = (e: any) => {
            if (isHamburgerOpen && ref.current && !ref.current.contains(e.target)) {
                setIsHamburgerOpen(false)
            }
         }
         document.addEventListener('mousedown', checkIfClickedOutside)

         return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside)
         }
    }, [isHamburgerOpen])

    function handleMenu(){
        setIsHamburgerOpen(!isHamburgerOpen)
        setIsLoaded(true)
    }
  return (
    <main className='h-screen'>
      <div className="bg-[#5f0003]">
        <div className='flex justify-end p-4'>
          <button className="text-gray-400 w-8 h-8" onClick={handleMenu} ref={ref}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          </button>
          <div className={isHamburgerOpen ? 'sm:hidden absolute top-0 left-0 w-full h-16 bg-gray-800 text-gray-200 animate-slideIn' : isLoaded ? 'sm:hidden absolute -top-16 left-0 w-full h-16 bg-gray-800 text-gray-200 animate-slideOut' : 'sm:hidden absolute -top-16 left-0 w-full h-16 bg-gray-800 text-gray-200'}>
              <div className='flex justify-around items-center mr-4 py-2 text-xl rounded-lg h-full'>
                  <Link href={`/`}>Home</Link>
                  <Link href={`/projects`}>Projects</Link>
                  <Link href={`/resume`}>Resume</Link>
              </div>
          </div>
        </div>
      </div>
      <div className='h-full bg-[#5f0003] flex flex-col justify-center align-center'>
        <div className='flex justify-center'>
          <Image src={headshot} alt='Matthew Creek photo' className='w-2/3 sm:w-1/3 h-auto rounded-full border-4 border-[#2f928f]'></Image>
        </div>
        <p className='text-center text-gray-400 font-bold text-3xl px-2 pt-2'>
          Hello! My name is <span className='text-gray-300'>Matthew Creek</span> and I&apos;m a developer based in <span className='text-gray-300'>St. Louis, Missouri.</span>
        </p>
      </div>
    </main>
  )
}
