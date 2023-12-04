import useAxios from "../hooks/useAxios";

const Notification = () => {
    const announcements = useAxios('/announcements')
    
    return (
        <div>
            <div className="my-6 rounded-lg text-center font-semibold">
                <div className="p-5 max-w-5xl mx-auto">
                    <h3 className="text-xl font-semibold mb-2 uppercase">Announcements</h3>
                    <ul className="list-decimal list-inside">
                        {
                            announcements.map(x => <>
                                <div key={x._id} className="border my-2 p-2">
                                    <h2 className="text-base"><span>{x.title}</span></h2>
                                    <p className=" font-normal">{x.description}</p>
                                </div>
                            </>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Notification;