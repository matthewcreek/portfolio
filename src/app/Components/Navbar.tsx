import Image from "next/image";
import headshot from "../../../public/Images/headshot.jpg"

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-col items-center bg-[#5f0003] py-4">
                <Image src={headshot} alt="Photo of Matthew Creek" className="w-1/6 rounded-full h-auto drop-shadow-2xl"/>
                <div className="max-w-4xl p-4 flex flex-row justify-around w-full mt-2 text-gray-400 font-bold text-2xl">
                    <h3>Resume</h3>
                    <h3>Projects</h3>
                    <h3>Bio</h3>
                </div>
            </div>
        </div>
    )
}