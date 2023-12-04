import useAxios from "../../hooks/useAxios";
import AdminDrawer from "./AdminDrawer";

const ManageUsers = () => {
    const usersTable = useAxios('/users')

    const handleManageUser = (id) => {
        console.log('clicked', id)
    }

    return (
        <div>
            <div className="md:flex">
                <AdminDrawer></AdminDrawer>
                <div className="bg-cover bg-center w-full">
                    <div className="flex justify-center items-center">
                        <div className="text-center p-6 md:p-10 w-full">
                            <h3 className="text-3xl font-semibold mb-6 uppercase">Manage Users</h3>
                            <div className="pb-10 md:pb-20 px-10 md:px-20">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                {/* <th>ID</th> */}
                                                <th>User Name</th>
                                                <th>User Email</th>
                                                <th>User Role</th>
                                                <th>Subscription Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                usersTable.map(x =>
                                                    <tr key={x._id}>
                                                        {/* <th>{x._id}</th> */}
                                                        <td>{x.name}</td>
                                                        <td>{x.email}</td>
                                                        <td>{x.role}</td>
                                                        <td>{x.badge2 ? 'Paid' : 'Unpaid'}</td>
                                                        <td>
                                                            <button onClick={() => handleManageUser(x._id)} className="btn btn-xs">Make Admin</button>
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

export default ManageUsers;