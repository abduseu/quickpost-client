const Announcement = ({obj}) => {
    const announcements = obj

    return (
        <div>
            <div className="bg-[#FCF4EC] my-6 rounded-lg text-center font-semibold">
                <div className="p-5 max-w-5xl mx-auto">
                    <h3 className="text-xl font-semibold mb-2 uppercase">Announcements</h3>
                    <ul className="list-decimal list-inside">
                        {
                            announcements.map(x=> <li key={x._id}>{x.title}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Announcement;