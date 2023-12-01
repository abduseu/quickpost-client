import { Link } from "react-router-dom";

const UserDrawer = () => {
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
                        <li><Link to={'/profile'}>My Profile</Link></li>
                        <li><Link to={'/add'}>Add Post</Link></li>
                        <li><Link to={'/posts'}>My Posts</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default UserDrawer; <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

    </div>
    <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">Dashboard</label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to={'/profile'}>My Profile</Link></li>
            <li><Link to={'/add'}>Add Post</Link></li>
            <li><Link to={'/posts'}>My Posts</Link></li>
        </ul>

    </div>
</div>