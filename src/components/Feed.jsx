const Feed = () => {
    return (
        <div>
            <div className="bg-gray my-6 rounded-lg text-center font-semibold">
                <div className="p-5">
                    
                    <div className="flex justify-center m-2 gap-4 font-semibold uppercase">
                        <h3>Sort by Popularity:</h3>
                        <select name="popularity" className="rounded">
                            <option value="desc">Highest - Lowest</option>
                            <option value="asc">Lowest - Highest</option>
                        </select>
                    </div>

                    <ul className="list-decimal list-inside max-w-2xl mx-auto">
                        5. picture of the author, post title, tags, time, comments count, votes count.

                        <br />
                        Add the pagination feature on the Home page making sure that there will
                        be 5 posts per page.
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Feed;