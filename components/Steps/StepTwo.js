import Image from "next/image";
import StepHeader from "../helpers/StepHeader";

export default function StepTwo() {
    return (
        <div className="w-full h-auto font-poppins mb-[100px]">
            <StepHeader step={2} title={"Share Your Homepage"} description={`Share your Wavium homepage link with your followers, andwe'll handle the rest.`} />
            <div className="w-full grid grid-cols-1 grid-rows-2 p-2 md:grid-cols-2 md:grid-rows-1 gap-y-2 md:gap-x-1 h-[900px] md:h-[500px] px-4 md:px-8 mb-3 md:mb-6">
                <div className="relative pt-4 pl-4 bg-[#0D0D0D] overflow-hidden h-full">
                    <h3 className="text-green-500 text-xl font-light mb-6">One Link</h3>
                    <h1 className="text-[35px] md:text-[50px] font-semibold text-[#919191]">ALL You Create.</h1>
                    <h1 className="text-[35px] md:text-[50px] font-semibold text-white">One Link</h1>
                    <div className="absolute md:-right-[79px] md:-bottom-2 -right-[70px] bottom-[-10px]">
                        <Image
                            src={"/mobile.png"}
                            width={"450px"}
                            height={"170px"}
                            alt={"step two"}
                        />

                    </div>
                </div>
                <div className="relative pt-4 pl-4 bg-[#0D0D0D] overflow-hidden h-full">
                    <h3 className="text-green-500 text-xl font-light mb-12">Collect Subscribers</h3>
                    <h1 className="text-[50px] font-semibold text-[#919191]">Emails.</h1>
                    <h1 className="text-[50px] font-semibold text-[#919191]">Phone #s.</h1>
                    <h1 className="text-[50px] font-semibold text-white">All Yours.</h1>
                </div>
            </div>
            <button className="block mx-auto text-center w-[200px] py-4  bg-blue-500 rounded-lg text-white">Get Started</button>
        </div>
    )
}