import {FiSearch} from "react-icons/fi";
import {IoMdNotifications} from "react-icons/io";
import {BsCaretDownFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {MdMessage} from "react-icons/md";
import {TbStarsFilled} from "react-icons/tb";
import {RiChatHistoryFill} from "react-icons/ri";
import {useState} from "react";
import PATHS from "../../config/paths/paths";

const menuItems = [
    {id: 1, icon: <AiFillStar size={25} className="text-yellow-500"/>, title: "My favorite car spots"},
    {id: 2, icon: <MdMessage size={25} className="text-yellow-100"/>, title: "Messages"},
    {id: 3, icon: <RiChatHistoryFill size={25} className="text-green-300"/>, title: "Payment History"},
    {id: 4, icon: <TbStarsFilled size={25} className="text-yellow-500"/>, title: "Feedbacks"},
];

export default function Topbar() {
    const [show, setShow] = useState(false);

    return (<div className="flex py-6 mx-5 items-center">
            <div className="flex items-center bg-white rounded px-1 basis-1/6">
                <input type="text" placeholder="Search" className="px-1 py-1 mr-2"/>
                <FiSearch className="pr-1 cursor-pointer" size={20}/>
            </div>
            <div className="flex justify-end basis-5/6 items-center">
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
                    </div>)}
            </div>
        </div>
    );
}
