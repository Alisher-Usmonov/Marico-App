import Image from "next/image";

export default function Agree() {
    return (
        <div className="w-full text-white font-poppins text-center h-auto mb-[80px]">
            <h1 className="font-semibold text-[35px] md:text-[50px] mb-10">Experts Agree</h1>
            <div className="w-full h-auto mb-20">
                <Image
                    src={"/image3.png"}
                    width={"1200px"}
                    height={"340px"}
                    alt={"agree"}
                />
            </div>
            <div className="w-full h-[350px] md:h-[300px] relative">
                <Image
                    src={"/image4.png"}
                    width={"1280px"}
                    height={"900px"}
                    className={"object-cover"}
                    alt={"agree"}
                />
                <h1 className="w-[80%] md:w-[70%] lg:w-[60%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-[20px] md:text-[40px]">We`&apos;`ve helped over 1,000 creatorsre
                    claim control of their audience.</h1>
            </div>
        </div>
    )
}
