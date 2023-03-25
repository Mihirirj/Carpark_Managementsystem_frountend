import Topbar from "../../components/Topbar";
import Pathbar from "../../components/Pathbar";
import {Outlet} from "react-router-dom";
import CarUserSidebar from "../../components/Sidebar/CarUserSidebar";

export default function CarParkUserDashboard() {
    return (
        <div>
            <CarUserSidebar/>
            <div className="bg-light-gray ml-60 px-6 h-screen overflow-y-scroll pb-10">
                <Topbar/>
                <Pathbar/>
                <Outlet/>
            </div>
        </div>
    );
}