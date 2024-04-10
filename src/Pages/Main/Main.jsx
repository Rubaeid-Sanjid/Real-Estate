import Navbar from "../../Component/Navbar/Navbar"
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default Main;