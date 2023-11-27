import { BiCommentDetail, BiDislike, BiLike } from "react-icons/bi";

const Post = () => {
    return (
        <div className="bg-white p-4 rounded">
            <div className="flex my-4">
                <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                    alt=""
                    className="mr-4 h-10 w-10"
                />
                <div className="flex flex-col">
                    <h6 className="font-semibold">Laila Bahar</h6>
                    <p className="text-sm text-[#636262]">5 mins ago</p>
                </div>
            </div>
            <div>
                <h2 className="font-bold">How to patch KDE on FreeBSD?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
            </div>
            <div className="border my-2"></div>
            <div className="flex justify-between text-sm">
                <div className="flex tags gap-2">
                    <li>tag1</li>
                    <li>tag2</li>
                </div>
                <div className="flex gap-2 text-base">
                    <div className="flex items-center gap-2">
                        <BiLike/>
                        <BiDislike/>
                    </div>
                    <div className="flex items-center"><BiCommentDetail/></div>
                </div>
            </div>
        </div>
    );
};

export default Post;