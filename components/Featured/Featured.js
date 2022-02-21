import Image from "next/image";

export default function Featured() {
    return (
        <div className="w-full h-auto py-3 font-poppins mt-10 pb-[80px]">
            <h1 className="text-[35px] md:text-[50px] lg:text-[60px] font-bold text-white text-center mb-8">Why Creators Love Marico</h1>
            <div className="w-full h-auto grid grid-cols-1 grid-rows-3 gap-y-4 md:grid-cols-2 md:grid-rows-2 md:gap-y-5 lg:grid-cols-3 lg:grid-rows-1 text-center text-white">
                <div>
                    <h3 className="text-2xl mb-3 flex flex-row justify-center items-center gap-x-1">
                        <Image
                            src={"/smile_emoji.svg"}
                            width={"25px"} 
                            height={"25px"}
                            alt={"smile emoji"}
                        />
                        Reduced Anxiety</h3>
                    <p className="text-gray-400 font-light">Never worry about losing your audience.</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-3 flex flex-row justify-center items-center gap-x-1">
                        <Image
                            src={"/happy_emoji.svg"}
                            width={"25px"} 
                            height={"25px"}
                            alt={"happy emoji"}
                        />
                        Lower Workload</h3>
                    <p className="text-gray-400 font-light">Just share one link. We'll handle th rest.</p>
                </div>
                <div>
                    <h3 className="text-2xl mb-3 flex flex-row justify-center items-center gap-x-1">
                        <Image
                            src={"/party_emoji.svg"}
                            width={"25px"} 
                            height={"25px"}
                            alt={"party emoji"}
                        />
                        More Time</h3>
                    <p className="text-gray-400 font-light">Spend less time on marketing tools</p>
                </div>
            </div>
        </div>
    )
}