import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar";

export default function CarParkUserDashboardWithNavbar() {
    return (
        <div>
            <div className="bg-light-gray h-screen overflow-y-scroll">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    );
}