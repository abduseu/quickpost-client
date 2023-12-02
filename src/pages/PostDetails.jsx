import { useParams } from "react-router-dom";
import useAxios, { clientBase } from "../hooks/useAxios";
import { BiCommentDetail, BiDislike, BiLike } from "react-icons/bi";
import { FacebookShareButton, FacebookIcon } from 'react-share';

const PostDetails = () => {
    const { id } = useParams();
    const post = useAxios(`/posts/${id}`)

    const shareUrl = `${clientBase}/posts/${id}`;

    return (
        <div className="md:px-10">
            <div className="flex my-4">
                <img
                    src={post.authorImg}
                    alt=""
                    className="mr-4 h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                    <h6 className="font-semibold">{post.name}</h6>
                    <p className="text-sm text-[#636262]">{post.timestamp}</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold">{post.title}</h2>
                <p>{post.postDescription}</p>
            </div>
            <div className="border my-2"></div>
            <div className="flex justify-between text-sm">
                <div className="flex tags gap-2">
                    <ul>
                        <li>{post.tag}</li>
                    </ul>
                </div>
                <div className="flex gap-2 text-base">
                    <div className="flex items-center gap-2">
                        <BiLike />
                        <BiDislike />
                    </div>
                    <div className="flex items-center"><BiCommentDetail /></div>
                    <div className="flex items-center">
                        <FacebookShareButton url={shareUrl} quote={post.title}>
                            <FacebookIcon size={16} round />
                        </FacebookShareButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;