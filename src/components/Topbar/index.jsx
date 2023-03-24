import {FiSearch} from "react-icons/fi";
import {IoMdNotifications} from "react-icons/io";
import {BsCaretDownFill} from "react-icons/bs";
import PATHS from "../../config/paths/paths";

export default function Topbar() {
    return (
        <div className="flex py-6 mx-5 items-center">
            <div className="flex items-center bg-white rounded px-1 basis-1/6">
                <input type="text" placeholder="Search" className="px-1 py-1 mr-2"/>
                <FiSearch className="pr-1 cursor-pointer" size={20}/>
            </div>
            <div className="flex justify-end basis-5/6 items-center">
                <IoMdNotifications size={25} className="cursor-pointer"/>
                <img src={PATHS.profileImage} alt="Profile Pic" className="mx-3 w-12 cursor-pointer"/>
                <BsCaretDownFill size={20} className="cursor-pointer"/>
            </div>
        </div>
    );
}