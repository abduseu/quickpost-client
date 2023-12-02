import { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import { axiosBase } from "../hooks/useAxios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axiosBase.get('/posts')
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value

        if (search !== "") {
            axiosBase.get(`/posts?search=${search}`)
                .then(res => {
                    setPosts(res.data)
                })
        } else {
            axiosBase.get('/posts')
                .then(res => {
                    setPosts(res.data)
                })
        }
    }

    const handleTag = (tag) => {
        axiosBase.get(`/posts?search=${tag}`)
            .then(res => {
                setPosts(res.data)
            })
    }

    return (
        <div>
            {/* Banner */}
            <div className="bg-cover bg-center">
                <div className="bg-gray rounded-lg flex justify-center items-center">
                    <div className="text-center p-6 md:p-10 w-full">
                        {/* Search Box */}
                        <h3 className="text-3xl font-semibold mb-6 uppercase">Search Posts</h3>
                        <label>
                            <form onSubmit={handleSearch} className="bg-white border border-search max-w-5xl mx-auto flex justify-between rounded-lg">
                                <input className="focus:outline-none m-4" type="text" name="search" placeholder="Search here...." />
                                <button className="bg-green text-white py-4 px-7 rounded-r-lg">Search</button>
                            </form>
                        </label>
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="bg-gray my-6 rounded-lg text-center font-semibold">
                <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2 uppercase">Tags</h3>
                    <ul className="tags gap-5 flex flex-wrap justify-center max-w-5xl mx-auto">
                        {/* <Link to={'/tags/help'}><li>help</li></Link>
                        <Link to={'/tags/suggestion'}><li>suggestion</li></Link>
                        <Link to={'/tags/feedback'}><li>feedback</li></Link> */}
                        <Link onClick={()=>handleTag('help')}><li>help</li></Link>
                        <Link onClick={()=>handleTag('suggestion')}><li>suggestion</li></Link>
                        <Link onClick={()=>handleTag('feedback')}><li>feedback</li></Link>
                    </ul>
                </div>
            </div>

            {/* Announcement */}
            <Announcement></Announcement>

            {/* Feed */}
            <div className="bg-gray my-6 rounded-lg">
                <div className="p-5">

                    <div className="flex justify-center m-4 gap-4 font-semibold uppercase">
                        <h3>Sort by Popularity:</h3>
                        <select name="popularity" className="rounded">
                            <option value="desc">Highest - Lowest</option>
                            <option value="asc">Lowest - Highest</option>
                        </select>
                    </div>

                    <ul className="list-decimal list-inside max-w-5xl mx-auto">
                        {
                            posts.map(x => <Post key={x._id} obj={x}></Post>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomePage;