import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="w-full h-auto min-h-full font-poppins">
            <Navbar />
            <section className="w-full h-[545px] flex flex-col justify-between py-6 md:py-8">
                <div className="w-full p-2 flex flex-col justify-center items-center text-center mt-10">
                    <h1 className="text-white font-bold md:tracking-wide text-[33px] md:text-[60px] leading-none">Own your audience.</h1>
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400 font-bold md:tracking-wide text-[33px] md:text-[60px]">So you don&apos;t lose them.</h1>
                </div>
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <p className="text-xl font-normal text-white w-[80%] md:w-1/2 lg:w-1/4 mb-6">
                        Turn your audience into email and
                        text message subscribers.
                    </p>
                    <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-3 mb-6">
                        <a href="#" className="w-[200px] p-3 bg-blue-500 rounded-lg text-white border border-blue-500">Get Started Now</a>
                        <a  href="#" className="w-[200px] p-3 bg-transparent border border-slate-500 rounded-lg text-gray-500">View A Demo</a>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="h-5 w-5 bg-green-500 border-4 border-green-300 rounded-full mr-2"></span><span className="text-white font-bold mr-2">1000+</span><span className="text-gray-500 font-normal">creators have already started</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;