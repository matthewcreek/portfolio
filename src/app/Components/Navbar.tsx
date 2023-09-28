import Image from "next/image";
import headshot from "../../../public/Images/headshot.jpg"

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-col items-center bg-[#5f0003] py-4">
                <Image src={headshot} alt="Photo of Matthew Creek" className="w-1/6 rounded-full h-auto shadow-lg shadow-gray-400/90 animate-fade"/>
                <div className="max-w-4xl px-4 flex justify-around w-full mt-4 text-gray-200 font-bold text-2xl animate-fade">
                    <h3 className="w-1/6 text-center py-2">Resume</h3>
                    <h3 className="w-1/6 text-center py-2">Projects</h3>
                    <h3 className="w-1/6 text-center py-2">Bio</h3>
                </div>
            </div>
        </div>
    )
}