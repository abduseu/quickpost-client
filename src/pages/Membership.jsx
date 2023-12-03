import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { axiosBase } from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const Membership = () => {
    const { user } = useAuth()
    const navigate = useNavigate()

    const handlePay = () => {

        const goldBadge = {
            badge2: 'gold'
        }

        axiosBase.put(`/users/${user.email}`, goldBadge)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: "Congratulations!",
                        text: "You are a Gold Member now!",
                        icon: "success"
                    });
                    navigate('/profile')
                }
            })
    }

    return (
        <div className="text-center space-y-4">
            <div className="font-semibold text-2xl md:text-3xl p-6 md:p-10 uppercase">
                <h2>Become a Gold Member:</h2>
            </div>
            <p><span>Gold badge member can do more than 5 posts</span></p>

            <h1 className="font-bold text-2xl">Total: $50</h1>
            <button onClick={handlePay} className="btn btn-success text-white">Make Payment</button>
        </div>
    );
};

export default Membership;