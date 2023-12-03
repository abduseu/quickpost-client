const Membership = () => {
    return (
        <div className="text-center space-y-4">
            <div className="font-semibold text-2xl md:text-3xl p-6 md:p-10 uppercase">
                <h2>Become a Gold Member:</h2>
            </div>
            <p><span>Gold badge member can do more than 5 posts</span></p>

            <h1 className="font-bold text-2xl">Total: $50</h1>
            <button className="btn btn-success text-white">Make Payment</button>
        </div>
    );
};

export default Membership;