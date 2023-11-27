import Announcement from "../components/Announcement";
import Banner from "../components/Banner";
import Tag from "../components/Tag";

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Tag></Tag>
            <Announcement></Announcement>
            5. By default, you will show all the posts on your Homepage from newest to
            oldest order. Each post will show the picture of the author, post title,
            tags, time, comments count and votes count.
            Implement a Sort by Popularity butt on that will show popularity based on
            the total vote counts (Hints: UpVote - DownVote). The list will be in
            descending order.

            <br />
            Add the pagination feature on the Home page making sure that there will
            be 5 posts per page.
        </div>
    );
};

export default HomePage;