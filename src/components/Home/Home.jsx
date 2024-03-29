import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Categories></Categories>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;