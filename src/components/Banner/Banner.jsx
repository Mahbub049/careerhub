const Banner = () => {
    return (
        <div className="mt-10 flex justify-between items-center">
            <div className="flex-1">
                <h1 className="text-[80px] font-extrabold leading-[100px]">One Step <br /> Closer To Your <br /> <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Dream Job</span></h1>
                <p className="font-semibold text-lg mt-6 mb-8 w-[519px] text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <a className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Start Applying</a>
            </div>
            <div className="flex-1">
                <img className="w-[816px] h-[744px]" src="../../../public/assets/images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;