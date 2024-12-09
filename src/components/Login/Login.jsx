import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { logInUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleLogIn = event => {
        event.preventDefault();

        const form = new FormData(event.target);
        const email = form.get('email');
        const password = form.get('password');

        logInUser(email, password)
        .then(result => {
            setUser(result.user);

            const lastSignInTime = result.user?.metadata?.lastSignInTime;
            const loginInfo = { email, lastSignInTime };

            fetch('https://coffee-store-server-steel-five.vercel.app/users', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/');
            })
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: `${error.code}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        })
    }

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className="w-[90%] sm:w-[75%] lg:w-[50%] mx-auto py-16 sm:py-24 lg:py-32">
            <div className="card bg-[#F4F3F0] w-full py-6 sm:py-10 xl:py-20 px-0 sm:px-10 xl:px-20 shrink-0">
                <div className="card-body">
                    <form onSubmit={handleLogIn}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-center">Login your account</h2>
                        <hr className="w-full my-6 sm:my-8 xl:my-12" />
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text font-semibold">Email address</span>
                            </label>
                            <input name="email" type="email" placeholder="Enter your email address" className="input rounded-[5px]" required value={email} onChange={handleInputChange} />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input rounded-[5px]" required />
                            <button onClick={handleShowPassword} className="btn btn-sm btn-ghost btn-circle absolute right-3 top-11">
                                {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                            </button>
                        </div>
                        <div className="form-control my-6">
                            <button className="btn bg-[#D2B48C] hover:bg-[#a29d8f] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho text-lg">Login</button>
                        </div>
                    </form>
                    <div className="w-full flex flex-col gap-4 items-center">
                        <button className="btn w-full btn-ghost border-2 border-[#331A15] text-[#331A15] flex items-center gap-2">
                            <FaGoogle></FaGoogle>
                            Login with Google</button>
                        <p className="font-semibold text-center">Don't have an account? <Link className="text-[#331A15] inline-block font-bold" to={`/register`}>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;