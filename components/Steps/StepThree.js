import Image from "next/image";
import StepHeader from "../helpers/StepHeader";

export default function StepThree() {
    return (
        <div className="w-full h-auto mb-[70px] pb-5 font-poppins">
            <div className="w-full flex justify-center flex-col items-center">
                <StepHeader step={3} title={"Send Emails & Text Messages"} description={"No more going through a social platform. Reach and engage your audience directly over email and text massage."} />
            </div>
            <div className="w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-[800px] md:h-[500px] text-white px-10">
                <div>
                    <h3 className="mb-[20px] lg:mb-[40px]">Create & Share</h3>
                    <h1 className="text-3xl lg:text-5xl font-semibold leading-[45px] lg:leading-[60px] mb-3 lg:mb-6">Rich Your<br />Audience <span className="text-blue-500">Directly.</span></h1>
                    <ul className="flex flex-col gap-y-1 mb-5 md:mb-10">
                        <li className="flex items-center"><span className="p-1 px-3 rounded-full text-white text-sm lg:text-base bg-[#2D2D2D] mr-1">1</span> <p className="font-light text-sm lg:text-base">Embed content or create something new to share.</p></li>
                        <li className="flex items-center"><span className="p-1 px-3 rounded-full text-white text-sm lg:text-base bg-[#2D2D2D] mr-1">2</span> <p className="font-light text-sm lg:text-base">Share content over email, text message or your homepage.</p></li>
                    </ul>
                    <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-3 text-center">
                    <a href="#" className="w-[200px] p-3 bg-blue-500 rounded-lg text-white border border-blue-500">Get Started Now</a>
                        <a  href="#" className="w-[200px] p-3 bg-transparent border border-slate-500 rounded-lg text-gray-500">View A Demo</a>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative lg:-right-[75px] z-20 lg:-top-3 md:-right-[72px] md:-top-1 right-[10px]">
                        <Image
                            src={"/image2.png"}
                            width={820}
                            height={630}
                            alt={"step three"}
                        />
                    </div>
                    <div className="w-[200px] h-[150px] md:w-[150px] md:h-[100px] bg-[#8B8B8B] absolute lg:bottom-12 lg:right-20 md:bottom-[220px] md:right-[10px] bottom-[160px] right-[50px]"></div>
                </div>
            </div>
        </div>
    );
}