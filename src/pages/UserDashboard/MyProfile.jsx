import Post from "../../components/Post";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import UserDrawer from "./UserDrawer";
import { SlBadge } from "react-icons/sl";

const MyProfile = () => {
    const { user } = useAuth()
    const posts = useAxios(`/myposts/${user.email}`)


    return (
        <div className="md:flex">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 md:p-10 w-full">
                        <h3 className="text-3xl font-semibold mb-6 uppercase">My Profile</h3>
                        <div className="text-xl space-y-4">
                            <div className="flex justify-center">
                                <img src={user.photoURL} className="rounded-full max-w-xs" />
                            </div>
                            <h3>Name: <span>{user.displayName}</span> </h3>
                            <h3>Email: <span>{user.email}</span> </h3>
                            <h3 className="flex justify-center items-center gap-4">
                                Badge: <SlBadge className=" text-amber-600" />
                            </h3>
                        </div>
                        <div>
                            {
                                posts.slice(-3).map(x=> <Post key={x._id} obj={x}></Post>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;