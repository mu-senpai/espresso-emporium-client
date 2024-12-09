import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/more/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {

    const { user, logOutUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOutUser()
        .then(() => {
            setUser(null);
            navigate('/');
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

    return (
        <div className="w-full h-10 sm:h-14 lg:h-20 xl:h-24 2xl:h-28 bg-[url('https://i.ibb.co.com/GnJMQhV/15.jpg')] bg-cover flex items-center">
            <div className="w-[95%] mx-auto flex items-center justify-between">
                <div className="hidden sm:flex w-32"></div>
                <Link to={`/`} className="flex items-center gap-2 sm:gap-3 lg:gap-4 sm:hidden">
                    <img src={logo} className="w-4 sm:w-10 lg:w-14" alt="logo" />
                    <h2 className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">Espresso Emporium</h2>
                </Link>
                <Link to={`/`} className="items-center gap-2 sm:gap-3 lg:gap-4 hidden sm:flex">
                    <img src={logo} className="w-4 sm:w-10 lg:w-14" alt="logo" />
                    <h2 className="text-lg sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white">Espresso Emporium</h2>
                </Link>
                {
                    !((location.pathname === '/login') || (location.pathname === '/register')) ?
                    !user ?  <Link to={`login`} className="btn btn-xs lg:btn-md rounded-[5px] text-sm lg:text-xl bg-[#D2B48C] hover:bg-[#F5F4F1] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho">Login / Register</Link>
                    : <button onClick={handleLogout} className="btn btn-xs lg:btn-md rounded-[5px] text-sm lg:text-xl bg-[#D2B48C] hover:bg-[#F5F4F1] hover:border-2 hover:border-[#331A15] border-2 border-[#331A15] text-[#331A15] font-rancho">Logout</button> 
                    : <div className="w-32"></div>
                }
            </div>
        </div>
    );
};

export default Header;