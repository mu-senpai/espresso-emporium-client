import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, setUser, loginWithGoogle } = useContext(AuthContext);

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleRegister = event => {
        event.preventDefault();

        const form = new FormData(event.target);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        const isChecked = event.target.terms.checked;

        if (!isChecked) {
            Swal.fire({
                title: 'Error!',
                text: `Registration failed: Please accept our terms & conditions to get your registered.`,
                icon: 'error',
                confirmButtonText: 'Close'
            })
            return;
        }

        if (!validatePassword(password)) {
            Swal.fire({
                title: 'Error!',
                text: `Registration failed: Password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.`,
                icon: 'error',
                confirmButtonText: 'Close'
            })
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);

                const createdAt = result.user?.metadata?.creationTime;
                const uid = result.user?.uid;
                const newUser = { name, email, photo, createdAt, uid };

                fetch('https://coffee-store-server-steel-five.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                })
                    .then(res => res.json())
                    .then(data => {
                        // setLoading(false);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'You have successfully registered!',
                                icon: 'success',
                                confirmButtonText: 'Close'
                            }).then(() => {
                                navigate('/');
                            });
                        }
                        form.reset();
                    })
            })
            .catch(error => {
                // setLoading(false);
                Swal.fire({
                    title: 'Error!',
                    text: `${error.code}`,
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="w-full mx-auto pt-28 sm:pt-32 lg:pt-40 xl:pt-48 pb-12 sm:pb-16 lg:pb-24 xl:pb-36">
            <div className="w-[90%] sm:w-[75%] lg:w-[50%] mx-auto">

                <div className="card bg-[#F4F3F0] w-full py-6 sm:py-10 xl:py-20 px-0 sm:px-10 xl:px-20 shrink-0">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Register</h2>
                            <hr className="w-full my-6 sm:my-8 xl:my-12" />
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your name" className="input input-bordered input-md rounded-[5px]" required />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input name="photo" type="text" placeholder="Enter photo URL" className="input input-bordered input-md rounded-[5px]" required />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Email address</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered input-md rounded-[5px]" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" className="input input-bordered input-md rounded-[5px]" required />
                                <button onClick={handleShowPassword} className="btn btn-sm btn-ghost btn-circle absolute right-3 top-11">
                                    {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                                </button>
                            </div>
                            <div className="form-control">
                                <label className="label justify-start gap-3 cursor-pointer">
                                    <input type="checkbox" name="terms" className="checkbox" />
                                    <span className="label-text">Accept our terms & condition</span>
                                </label>
                            </div>
                            <div className="form-control mt-6 mb-4">
                                <button className="btn bg-[#D2B48C] hover:bg-[#a29d8f] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho text-lg">Register</button>
                            </div>
                        </form>
                        <div className="w-full flex flex-col gap-4 items-center">
                            <button className="btn w-full btn-ghost border-2 border-[#331A15] text-[#331A15] flex items-center gap-2">
                                <FaGoogle></FaGoogle>
                                Login with Google</button>
                            <p className="font-semibold text-center">Already have an account? <Link className="text-[#331A15] inline-block font-bold" to={`/s/login`}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;