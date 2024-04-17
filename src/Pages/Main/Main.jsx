import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar"
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Main;