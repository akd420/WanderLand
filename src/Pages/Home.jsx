import Banner from "../Component/Banner";
import Items from "../Component/Items";
import LatestBlogs from "../Component/LatestBlogs";
import NewsLetter from "../Component/NewsLetter";
import Tips from "../Component/Tips";

const Home = () => {
    return (
        <div className=" mx-auto">
            <Banner></Banner>
            <LatestBlogs></LatestBlogs>
            <Tips></Tips>
            <NewsLetter></NewsLetter>
            <Items></Items>
        </div>
    );
};

export default Home;