import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleScroll = (evt) => {
        let scrollY = window.scrollY;
        if (scrollY > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`w-full p-2 font-poppins h-[75px] ${scrolled ? "fixed z-50 top-0 left-0 bg-black/50 backdrop-blur-sm " : ""}`}>
            <div className={`flex items-center flex-row justify-between ${scrolled ? "container mx-auto" : "w-full"}`}>
                <Link href={"/"}>
                    <a>
                        <Image
                            src={"/images/logo.svg"}
                            width={"196px"}
                            height={"56px"}
                            alt={"logo"}
                            loading="eager" />
                    </a>
                </Link>
                <ul className={`flex flex-col absolute md:relative md:w-auto w-[100vw] md:h-auto h-[50vh] md:bg-transparent bg-black/50 backdrop-blur-sm transition duration-500 ${showNav ? "top-0 z-50" : "-top-[1000%]"} right-0 gap-y-3 md:gap-y-0 pt-5 md:pt-0 md:flex-row items-center gap-x-4 text-gray-500`}>
                    <li className="flex md:hidden w-full justify-end">
                        <svg onClick={() => setShowNav(prev => !prev)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </li>
                    <li className="cursor-pointer">
                        <a href={"#"} className="flex gap-x-1 hover:text-blue-500 items-center">
                            Use Cases
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </li>
                    <li className="cursor-pointer">
                        <a href={"#"} className="hover:text-blue-500">About</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href={"#"} className="hover:text-blue-500">Pricing</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href={"#"} className="hover:text-blue-500">Blog</a>
                    </li>
                    <li className="flex items-center lg:hidden gap-x-2">
                        <button className="text-[18px] bg-transparent hover:bg-blue-500 transition duration-150 p-2 px-3 rounded-lg text-gray-500 hover:text-white">Login</button>
                        <button className="text-[18px] bg-blue-500 p-2 px-3 rounded-lg text-white">Sign Up</button>
                    </li>
                </ul>
                <div className="lg:flex gap-x-2 hidden">
                    <button className="text-[18px] bg-transparent hover:bg-blue-500 transition duration-150 p-2 px-3 rounded-lg text-gray-500 hover:text-white">Login</button>
                    <button className="text-[18px] bg-blue-500 p-2 px-3 rounded-lg text-white">Sign Up</button>
                </div>
                <svg onClick={() => setShowNav(prev => !prev)} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:hidden" fill="none" viewBox="0 0 24 24" stroke="#fff">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar