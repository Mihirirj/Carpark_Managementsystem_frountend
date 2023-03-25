import PATHS from "../../../config/paths/paths";
import {NavLink} from "react-router-dom";
import {AiFillDashboard, AiFillEye, AiFillHome, AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import {ROUTES} from "../../../routes/routes";

const navLinks = [
    {
        id: 1,
        to: ROUTES.carParkOwnerDashboardHome,
        icon: <AiFillHome size={25}/>,
        label: "Home"
    },
    {
        id: 2,
        to: ROUTES.carParkOwnerDashboardDashboard,
        icon: <AiFillDashboard size={25}/>,
        label: "Dashboard"
    },
    {
        id: 3,
        to: ROUTES.view,
        icon: <AiFillEye size={25}/>,
        label: "View All"
    },
    {
        id: 4,
        to: ROUTES.setting,
        icon: <AiFillSetting size={25}/>,
        label: "Settings"
    },
    {
        id: 5,
        to: ROUTES.logout,
        icon: <AiOutlineLogout size={25}/>,
        label: "Logout"
    }
];

const CarOwnerSidebar = () => (
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

export default CarOwnerSidebar;
