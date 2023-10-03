'use client';

import { useState, useRef, useEffect, MouseEventHandler, MouseEvent } from 'react'
import Image from "next/image";
import headshot from '../../public/Images/headshot.jpg'
import Link from 'next/link';

export default function Navbar() {
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
        <div>
            <div className="flex sm:flex-col sm:items-center items-center justify-between px-8 bg-[#5f0003] py-4">
                <Image src={headshot} alt="Photo of Matthew Creek" className="sm:w-1/5 w-2/5 rounded-full h-auto shadow-lg shadow-gray-400/90"/>
                <div className="max-w-4xl px-4 hidden sm:flex justify-around w-full mt-4 text-gray-200 font-bold text-2xl">
                    <Link href={`/`} className="w-1/6 text-center py-2">Home</Link>
                    <Link href={`/projects`} className="w-1/6 text-center py-2">Projects</Link>
                    <Link href={`/resume`} className="w-1/6 text-center py-2">Resume</Link>
                </div>
                <button className="text-gray-300 w-8 h-8 sm:hidden" onClick={handleMenu} ref={ref}>
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
    )
}