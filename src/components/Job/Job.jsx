import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Job = ({job}) => {
    const {id, logo, job_title,company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="p-10 rounded-lg">
            <img className="mb-[32px]" src={logo} alt="" />
            <h3 className="text-2xl font-extrabold mb-2">{job_title}</h3>
            <p className="text-xl font-semibold">{company_name}</p>
            <div className="flex gap-4 my-4">
                <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent py-2 px-5 border-2 border-[#7E90FE] rounded-md">{remote_or_onsite}</span>
                <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent  py-2 px-5 border-2 border-[#7E90FE] rounded-md">{job_type}</span>
            </div>
            <div className="flex gap-6 mb-6">
                <div className="flex gap-2 items-center">
                    <FaLocationDot className="text-gray-500"></FaLocationDot>
                    <p className="text-gray-500">{location}</p>
                </div>
                <div className="flex gap-2 items-center">
                    <AiOutlineDollarCircle className="text-gray-500"></AiOutlineDollarCircle>
                    <p className="text-gray-500">Salary : {salary}</p>
                </div>
            </div>
            <NavLink to={`/jobdetails/${id}`}><button className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button></NavLink>
        </div>
    );
};

export default Job;