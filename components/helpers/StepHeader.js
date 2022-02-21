const StepHeader = ({ step, title, description, showBtn }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center text-center mb-[60px] md:mb-[80px]">
            <p className="text-blue-500 font-semibold md:text-lg mb-3 md:mb-5">STEP {step}</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3">{title}</h1>
            <p className="text-gray-500 text-base lg:text-lg w-[70%] lg:w-[55%] mb-5">{description}</p>
            <button className={`py-4 px-8 rounded-lg bg-transparent text-gray-500 border border-gray-500 ${showBtn ? "" : "hidden"}`}>View Avaliable Sources</button>
        </div>
    )
}

export default StepHeader;