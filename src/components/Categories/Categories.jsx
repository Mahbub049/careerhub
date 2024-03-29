import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res=>res.json())
        .then(data=>setCategory(data));
    },[])
    return (
        <div className="my-[130px]">
            <h2 className="text-[48px] font-extrabold text-center">Job Category List</h2>
            <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 rounded-md gap-6 mt-8">
                {
                    category.map((cat, idx)=><Category key={idx} category={cat}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;