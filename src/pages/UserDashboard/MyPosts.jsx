import useAxios from "../../hooks/useAxios";
import UserDrawer from "./UserDrawer";

const MyPosts = () => {
    const posts = useAxios('/posts')

    const handleDelete = (e) =>{
        e.preventDefault()
        
        console.log('clicked')
    }

    return (
        <div>
            <div className="md:flex">
                <UserDrawer></UserDrawer>
                <div className="bg-cover bg-center w-full">
                    <div className="flex justify-center items-center">
                        <div className="text-center p-6 md:p-10 w-full">
                            <h3 className="text-3xl font-semibold mb-6 uppercase">My Posts</h3>
                            <div className="pb-10 md:pb-20 px-10 md:px-20">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                {/* <th>ID</th> */}
                                                <th>Post Title</th>
                                                <th>Total Votes</th>
                                                <th>Comment</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                posts.map(x =>
                                                    <tr key={x._id}>
                                                        {/* <th>{x._id}</th> */}
                                                        <td>{x.title}</td>
                                                        <td>{'totaalVotes'}</td>
                                                        <td>{'Comments'}</td>
                                                        <td>
                                                            <button onClick={() => handleDelete(x._id)} className="btn btn-xs">X</button>
                                                        </td>
                                                    </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;