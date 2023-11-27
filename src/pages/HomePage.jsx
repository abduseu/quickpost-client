import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Tag from "../components/Tag";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Tag></Tag>
            <Announcement></Announcement>
            <Feed></Feed>
        </div>
    );
};

export default HomePage;