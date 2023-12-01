import { BiCommentDetail, BiDislike, BiLike } from "react-icons/bi";

const Post = ({ obj }) => {
    const posts = obj;

    const formatTime = (timestamp) => {
        const postTime = new Date(timestamp);
        const currentTime = new Date();
        const timeDiff = Math.floor((currentTime - postTime) / 1000);

        if (timeDiff < 60) return 'just now';
        if (timeDiff < 3600) return `${Math.floor(timeDiff / 60)} minutes ago`;
        if (timeDiff < 86400) return `${Math.floor(timeDiff / 3600)} hours ago`;

        return postTime.toLocaleString(); // Fallback to default date format
    };

    return (
        <div className="bg-white p-4 my-2 border rounded">
            <div className="flex my-4">
                <img
                    src={posts.authorImg}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                    <h6 className="font-semibold">{posts.name}</h6>
                    <p className="text-sm text-[#636262]">{formatTime(posts.timestamp)}</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold">{posts.title}</h2>
                <p>{posts.postDescription}</p>
            </div>
            <div className="border my-2"></div>
            <div className="flex justify-between text-sm">
                <div className="flex tags gap-2">
                    <ul>
                        <li>{posts.tag}</li>
                    </ul>
                </div>
                <div className="flex gap-2 text-base">
                    <div className="flex items-center gap-2">
                        <BiLike />
                        <BiDislike />
                    </div>
                    <div className="flex items-center"><BiCommentDetail /></div>
                </div>
            </div>
        </div>
    );
};

export default Post;