import CarOwnerSidebar from "../../components/Sidebar/CarOwnerSidebar";
import Topbar from "../../components/Topbar";
import {Outlet} from "react-router-dom";
import Pathbar from "../../components/Pathbar";

export default function CarParkOwnerDashboard() {
    return (
        <div>
            <CarOwnerSidebar/>
            <div className="bg-light-gray ml-60 px-6 h-screen overflow-y-scroll pb-10">
                <Topbar/>
                <Pathbar/>
                <Outlet/>
            </div>
        </div>
    );
}