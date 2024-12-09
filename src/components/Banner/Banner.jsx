import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero bg-[url(https://i.ibb.co.com/SDj4Gf9/3.png)] bg-cover bg-bottom h-[20rem] sm:h-[30rem] lg:h-[40rem] xl:h-[50rem]">
            <div className="hero-content text-white flex-col md:flex-row-reverse">
                <div className="md:w-[50%] text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="text-xs sm:text-sm lg:text-base py-3 sm:py-4 lg:py-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <Link to={`/users`} className="btn btn-sm lg:btn-md bg-[#E3B577] rounded-none font-rancho text-[#242222] border-none text-base lg:text-lg">See Our Users</Link>
                </div>
                <div className="md:w-[50%]"></div>
            </div>
        </div>
    );
};

export default Banner;