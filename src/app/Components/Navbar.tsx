import Image from "next/image";
import headshot from "../../../public/Images/headshot.jpg"

export default function Navbar() {
    return (
        <div>
            <div className="flex sm:flex-col sm:items-center items-center justify-between px-8 bg-[#5f0003] py-4">
                <Image src={headshot} alt="Photo of Matthew Creek" className="sm:w-1/6 w-2/5 rounded-full h-auto shadow-lg shadow-gray-400/90 animate-fade"/>
                <div className="max-w-4xl px-4 hidden sm:flex justify-around w-full mt-4 text-gray-200 font-bold text-2xl animate-fade">
                    <h3 className="w-1/6 text-center py-2">Home</h3>
                    <h3 className="w-1/6 text-center py-2">Projects</h3>
                    <h3 className="w-1/6 text-center py-2">Resume</h3>
                </div>
                <button className="text-gray-200 w-8 h-8 ">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    )
}