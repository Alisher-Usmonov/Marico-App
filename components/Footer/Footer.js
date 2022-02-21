import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-auto pb-3 font-poppins mt-0 md:mt-[250px] lg:mt-0">
            <div className="w-full h-auto flex flex-col items-center justify-center mb-[70px]">
                <Image
                    src={"/logo.png"}
                    width={"140px"}
                    height={"120px"}
                    alt={"footer logo"}
                />
                <h1 className="text-white text-[30px] md:text-[40px] font-semibold mt-3 mb-0">Get Started Now</h1>
                <p className="text-white font-light text-[18px] md:text-[25px] mb-3">Setup is easy and takes under 5 minutes.</p>
                <a href="#" className="block p-3 px-14 bg-blue-500 rounded-lg text-white border border-blue-500 mb-4">Get Started Now</a>
                <p className="flex flex-row items-center">
                    <span className="h-5 w-5 bg-green-500 border-4 border-green-300 rounded-full mr-2"></span><span className="text-white font-bold mr-2">1000+</span><span className="text-gray-500 font-normal">creators have already started</span>
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center justify-between pb-4 h-[200px]">
                <div>
                    <div className="flex flex-row gap-x-3 items-center">
                        <Image
                            src={"/logo.png"}
                            width={"40px"}
                            height={"40px"}
                            alt={"footer"}
                        />
                        <h3 className="font-semibold text-white text-[30px] relative -bottom-2">Marico</h3>
                    </div>
                    <a href="mailto:engineeraudev@gmail.com" className="text-[#707070] mt-1 text-[18px] font-light block">info@marico.co</a>
                </div>
                <ul className="flex items-center gap-x-[40px] h-full text-[#707070] font-semibold">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue-500">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Sign in</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}