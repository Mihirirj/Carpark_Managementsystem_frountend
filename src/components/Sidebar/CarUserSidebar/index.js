import PATHS from "../../../config/paths/paths";
import {NavLink} from "react-router-dom";
import {AiFillHome, AiFillSetting, AiOutlineLogout} from 'react-icons/ai';
import {FaTachometerAlt} from 'react-icons/fa';
import {MdOutlineHelp, MdPayments, MdWifiCalling} from 'react-icons/md';
import {ROUTES} from "../../../routes/routes";

const navLinks = [
    {
        id: 1,
        to: ROUTES.carParkUserDashboardHome,
        icon: <AiFillHome size={25}/>,
        label: "Home"
    },
    {
        id: 2,
        to: ROUTES.carParkUserDashboardBooking,
        icon: <FaTachometerAlt size={25}/>,
        label: "Booking"
    },
    {
        id: 3,
        to: ROUTES.carParkUserDashboardPayment,
        icon: <MdPayments size={25}/>,
        label: "Payment"
    },
    {
        id: 4,
        to: ROUTES.carParkUserDashboardContact,
        icon: <MdWifiCalling size={25}/>,
        label: "Contact"
    },
    {
        id: 5,
        to: ROUTES.carParkUserDashboardHelp,
        icon: <MdOutlineHelp size={25}/>,
        label: "Help"
    },
    {
        id: 6,
        to: ROUTES.carParkUserDashboardSetting,
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


const CarUserSidebar = () => (
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

export default CarUserSidebar;
