import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-cover bg-center">
            <div className="bg-gray rounded-lg flex justify-center items-center">
                <div className="text-center p-6 md:p-32">
                    {/* Search Box */}
                    <h3 className="text-5xl font-bold mb-10">Search Posts</h3>
                    <label>
                        <div className="bg-white border border-search max-w-md mx-auto flex justify-between rounded-lg">
                            <input className="focus:outline-none m-4" type="text" name="search" placeholder="Search here...." />
                            <Link to="/err"><button className="bg-green text-white py-4 px-7 rounded-r-lg">Search</button></Link>
                        </div>
                    </label>

                    {/* Tags */}
                    <ul className="tags pt-8 md:pt-10 gap-5 flex flex-wrap justify-center max-w-xl">
                        <li>list1</li>
                        <li>list2</li>
                        <li>list3</li>
                        <li>list4</li>
                        <li>list5</li>
                        <li>list6</li>
                        <li>list7</li>
                        <li>list8</li>
                        <li>list9</li>
                        <li>list10</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Banner;