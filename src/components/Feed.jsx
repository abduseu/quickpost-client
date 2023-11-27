import Post from "./Post";

const Feed = () => {
    return (
        <div>
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
                        <Post></Post>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feed;