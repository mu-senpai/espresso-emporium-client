import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

const MainLayout = () => {
    return (
        <div className="min-[1920px]:max-w-[120rem] mx-auto">
            <Header></Header>
            <section className="w-full">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;