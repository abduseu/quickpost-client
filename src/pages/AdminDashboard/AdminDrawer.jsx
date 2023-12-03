import { Link } from "react-router-dom";

const AdminDrawer = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-success drawer-button lg:hidden">Menu</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="font-semibold text-2xl my-4">Dashboard</li>
                        <li><Link to={'/admin'}>Admin Profile</Link></li>
                        <li><Link to={'/manage-user'}>Manage Users</Link></li>
                        <li><Link to={'/reported'}>Reported Comments/Activities</Link></li>
                        <li><Link to={'/make-announcement'}>Make Announcement</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default AdminDrawer;