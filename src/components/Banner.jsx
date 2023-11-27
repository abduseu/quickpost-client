import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray rounded-lg flex justify-center items-center">
                <div className="text-center p-6 md:p-10 w-full">
                    {/* Search Box */}
                    <h3 className="text-3xl font-semibold mb-6 uppercase">Search Posts</h3>
                    <label>
                        <div className="bg-white border border-search max-w-2xl mx-auto flex justify-between rounded-lg">
                            <input className="focus:outline-none m-4" type="text" name="search" placeholder="Search here...." />
                            <Link to="/err"><button className="bg-green text-white py-4 px-7 rounded-r-lg">Search</button></Link>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Banner;