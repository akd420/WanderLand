import Banner from "../Component/Banner";
import LatestBlogs from "../Component/LatestBlogs";
import NewsLetter from "../Component/NewsLetter";
import Tips from "../Component/Tips";

const Home = () => {
    return (
        <div className=" mx-auto">
            <Banner></Banner>
            <LatestBlogs></LatestBlogs>
            <NewsLetter></NewsLetter>
            <Tips></Tips>
        </div>
    );
};

export default Home;