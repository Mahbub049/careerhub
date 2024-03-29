import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <h2 className="text-[48px] font-extrabold text-center">Featured Jobs</h2>
            <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
           <div className="flex justify-center">
            <div className={dataLength === jobs.length && 'hidden'}>
                    <a onClick={()=>setDataLength(jobs.length)} className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</a>
                </div>
           </div>
           
        </div>
    );
};

export default FeaturedJobs;