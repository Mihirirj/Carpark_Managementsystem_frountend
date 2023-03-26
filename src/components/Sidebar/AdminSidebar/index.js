import PATHS from "../../../config/paths/paths";
import {NavLink} from "react-router-dom";
import {AiFillDashboard, AiFillHome, AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import {FaTachometerAlt} from 'react-icons/fa';
import {MdPayments, MdWifiCalling} from 'react-icons/md';
import {ROUTES} from "../../../routes/routes";

const navLinks = [
    {
        id: 1,
        to: ROUTES.adminDashboardHome,
        icon: <AiFillHome size={25}/>,
        label: "Home"
    },
    {
        id: 2,
        to: ROUTES.adminDashboardDashboard,
        icon: <AiFillDashboard size={25}/>,
        label: "Dashboard"
    },
    {
        id: 3,
        to: ROUTES.adminDashboardBooking,
        icon: <FaTachometerAlt size={25}/>,
        label: "Booking"
    },
    {
        id: 4,
        to: ROUTES.adminDashboardPayment,
        icon: <MdPayments size={25}/>,
        label: "Payment"
    },
    {
        id: 5,
        to: ROUTES.setting,
        icon: <MdWifiCalling size={25}/>,
        label: "Report"
    },
    {
        id: 6,
        to: ROUTES.logout,
        icon: <AiFillSetting size={25}/>,
        label: "Setting"
    },
    {
        id: 7,
        to: ROUTES.logout,
        icon: <AiOutlineLogout size={25}/>,
        label: "Logout"
    }
];

export default function AdminSidebar() {
    return (
        <nav className="bg-dark-gray h-screen fixed w-60">
            <div className="flex justify-center ml-4 mt-4">
                <img src={PATHS.logoImage} alt="logo"/>
            </div>
            <div>
                {navLinks.map(({id, to, icon, label}) => (
                    <NavLink to={to} className="flex items-center pl-8 py-2 mb-6 text-lg" key={id}>
                        {icon}
                        <div className="pl-5">{label}</div>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}

