import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineSubtitles } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job=>job.id===idInt);
    return (
        <div>
            <div className="mt-[100px] pb-[130px] bg-[url('../../../public/assets/images/bg1.png')] bg-contain bg-no-repeat">
                <h2 className="text-center text-[32px] font-extrabold">Job Details</h2>
            </div>
            <div className="container mx-auto my-[130px] flex gap-6">
                <div className="space-y-6 w-2/3">
                    <p><span className="font-extrabold">Job Description: </span> {job.job_description}</p>
                    <p><span className="font-extrabold">Job Responsibility: </span>  {job.job_responsibility}</p>
                    <div className="space-y-4">
                        <h3 className="font-extrabold">Education Requirements:</h3>
                        <p>{job.educational_requirements}</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="font-extrabold">Experiences:</h3>
                        <p>{job.experiences}</p>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="p-[30px]">
                        <h3 className="text-xl font-extrabold">Job Details</h3>
                        <hr className="my-6" />
                        <div className="flex gap-2 items-center mb-4">
                            <LuCircleDollarSign className="text-[#9873FF] w-6" />
                            <p className="text-xl"><span className="font-bold">Salary : </span> {job.salary}</p>
                        </div>
                        <div className="flex gap-2 items-center mb-8">
                            <MdOutlineSubtitles className="text-[#9873FF] w-6" />
                            <p className="text-xl"><span className="font-bold">Job Title : </span> {job.job_title}</p>
                        </div>
                        <h3 className="text-xl font-extrabold">Contact Information</h3>
                        <hr className="my-6"/>
                        <div className="flex gap-2 items-center mb-4">
                            <IoCallOutline className="text-[#9873FF] w-6" />
                            <p className="text-xl"><span className="font-bold">Phone : </span> {job.contact_information.phone}</p>
                        </div>
                        <div className="flex gap-2 items-center mb-4">
                            <MdOutlineEmail className="text-[#9873FF] w-6" />
                            <p className="text-xl"><span className="font-bold">Email : </span> {job.contact_information.email}</p>
                        </div>
                        <div className="flex gap-2 items-center mb-4">
                            <FaLocationDot className="text-[#9873FF] w-6" />
                            <p className="text-xl"><span className="font-bold"> Address : </span> {job.contact_information.address}</p>
                        </div>
                    </div>
                    <a className="btn w-full text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</a>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;