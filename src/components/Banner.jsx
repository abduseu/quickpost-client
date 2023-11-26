import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray rounded-lg lg:flex lg:justify-center lg:items-center">
                <div className="text-center p-6 md:pt-32 md:pb-52">
                    <h3 className="text-5xl font-bold mb-10">Search Posts</h3>
                    <label>
                        <div className="bg-white border border-search max-w-md mx-auto flex justify-between rounded-lg">
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