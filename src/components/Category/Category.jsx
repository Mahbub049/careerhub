const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    console.log(category)
    return (
        <div>
            <div className="p-[40px]">
                    <div className="p-[15px] rounded-lg bg-gradient-to-r from-[#7E90FE1a] to-[#9873FF1A] w-[70px] mb-8">
                        <img src={logo} alt="" />
                    </div>
                    <h3 className="text-[#474747] text-xl font-extrabold mb-2">{category_name}</h3>
                    <p className="font-medium text-[#A3A3A3]">{availability}</p>
                </div>
        </div>
    );
};

export default Category;