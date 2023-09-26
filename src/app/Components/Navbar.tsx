import Image from "next/image";
import headshot from "../../../public/Images/headshot.jpg"

export default function Navbar() {
    return (
        <div>
            <div className="flex flex-col items-center bg-red-400 py-4">
                <Image src={headshot} alt="Photo of Matthew Creek" className="w-1/6 rounded-full h-auto"/>
                <div className="flex flex-row justify-around w-full mt-2 bg-red-100">
                    <h3>Resume</h3>
                    <h3>Projects</h3>
                    <h3>Bio</h3>
                </div>
            </div>
        </div>
    )
}