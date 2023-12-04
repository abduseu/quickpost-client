import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { axiosBase } from "../../hooks/useAxios";
import AdminDrawer from "./AdminDrawer";

const MakeAnnouncement = () => {
    const { user } = useAuth()

    const handleMakeAnnouncement = (e) => {
        e.preventDefault();
        const form = e.target;
        const authorImg = form.authorImg.value;
        const name = form.name.value;
        const title = form.title.value;
        const description = form.description.value;

        const createAnnouncements = { authorImg, name, title, description }

        axiosBase.post('/announcements', createAnnouncements)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Successful!",
                        text: "Announcement Published!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className="md:flex">
            <AdminDrawer></AdminDrawer>
            <div className="w-full">
                <div className="text-center font-semibold text-2xl md:text-3xl p-6 md:p-10 uppercase">
                    <h2>Make Announcement</h2>
                </div>
                <div className="pb-10 md:pb-20 px-10 md:px-20">
                    <form onSubmit={handleMakeAnnouncement}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div>
                                <h3>Author Image:</h3>
                                <input type="url" name="authorImg" placeholder="Paste image url here" defaultValue={user.photoURL} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <h3>Author Name:</h3>
                                <input type="text" name="name" placeholder="Name" defaultValue={user.displayName} className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <h3>Title:</h3>
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                            </div>
                            <div>
                                <h3>Description:</h3>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="text-center pt-10">
                            <button className="btn btn-neutral">Make Announcement</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAnnouncement;