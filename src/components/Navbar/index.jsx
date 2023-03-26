import {IoMdNotifications} from "react-icons/io";
import {BsCaretDownFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {MdMessage} from "react-icons/md";
import {TbStarsFilled} from "react-icons/tb";
import {RiChatHistoryFill} from "react-icons/ri";
import {useState} from "react";
import PATHS from "../../config/paths/paths";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

const menuItems = [
    {id: 1, icon: <AiFillStar size={25} className="text-yellow-500"/>, title: "My favorite car spots"},
    {id: 2, icon: <MdMessage size={25} className="text-yellow-100"/>, title: "Messages"},
    {id: 3, icon: <RiChatHistoryFill size={25} className="text-green-300"/>, title: "Payment History"},
    {id: 4, icon: <TbStarsFilled size={25} className="text-yellow-500"/>, title: "Feedbacks"},
];

const navLinks = [
    {id: 1, title: "How It Works", link: ROUTES.carParkUserDashboardMap,},
    {id: 2, title: "Help", link: ROUTES.carParkUserDashboardMap,},
    {id: 3, title: "Contact", link: ROUTES.carParkUserDashboardMap,},
];

export default function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <div className="grid grid-cols-2 items-center fixed w-screen mx-10">
            <div className="flex items-center">
                <img src={PATHS.logoImage} alt="logo" className="w-24 mt-2"/>
                <div className="flex">
                    {navLinks.map(({id, title, link}) => (
                        <Link to={link} key={id} className="mr-10 font-bold text-lg">{title}</Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-end mr-20">
                <IoMdNotifications size={25} className="cursor-pointer"/>
                <img src={PATHS.profileImage} alt="Profile Pic" className="mx-3 w-12 cursor-pointer"/>
                <BsCaretDownFill size={20} className="cursor-pointer" onClick={() => setShow(!show)}/>
                {show && (
                    <div
                        className="absolute top-20 right-12 w-72 bg-black bg-opacity-75 px-3 py-4 rounded-xl z-10 text-white"
                        onClick={() => setShow(false)}
                    >
                        <div className="flex justify-center">
                            <img src={PATHS.profileImage} alt="Profile Pic" className="mx-3 w-16 cursor-pointer"/>
                        </div>
                        <div className="flex justify-center">Madushani Wijerathna</div>
                        <div className="flex justify-center mb-4">madhushani123@gmail.com</div>
                        <hr/>
                        {menuItems.map(({id, icon, title}) => (
                            <div key={id} className="flex mt-4 px-4">
                                {icon}
                                <h3 className="ml-3">{title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
