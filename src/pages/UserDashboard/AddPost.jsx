import useAuth from "../../hooks/useAuth";
import { axiosBase } from "../../hooks/useAxios";
import UserDrawer from "./UserDrawer";
import Swal from 'sweetalert2'

const AddPost = () => {
    const {user} = useAuth()

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const authorImg = form.authorImg.value;
        const name = form.name.value;
        const email = form.email.value;
        const title = form.title.value;
        const postDescription = form.postDescription.value;
        const tag = form.tag.value;
        const upvote = 0
        const downvote = 0
        const timestamp = new Date().toISOString();
    
        const addPost = { authorImg, name, email, title, postDescription, tag, upvote, downvote, timestamp }
    
        axiosBase.post('/posts', addPost)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Successful!",
                        text: "Post Added!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <div className="md:flex">
                <UserDrawer></UserDrawer>
                <div className="w-full">
                    <div className="text-center font-semibold text-2xl md:text-3xl p-6 md:p-10 uppercase">
                        <h2>Add Post</h2>
                    </div>
                    <div className="pb-10 md:pb-20 px-10 md:px-20">
                        <form onSubmit={handleAddPost}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h3>Author Image:</h3>
                                    <input type="url" name="authorImg" placeholder="Paste image url here" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Author Name:</h3>
                                    <input type="text" name="name" placeholder="Name" defaultValue={user.displayName} className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Author Email:</h3>
                                    <input type="email" name="email" placeholder="Email" defaultValue={user.email} className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Post Title:</h3>
                                    <input type="text" name="title" placeholder="Post title" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Post Description:</h3>
                                    <input type="text" name="postDescription" placeholder="Post Description" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <h3>Tag:</h3>
                                    <select name="tag" className="select select-bordered w-full">
                                        <option value="help">#help</option>
                                        <option value="suggestion">#suggestion</option>
                                        <option value="feedback">#feedback</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center pt-10">
                                <button className="btn btn-neutral">Add Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPost;