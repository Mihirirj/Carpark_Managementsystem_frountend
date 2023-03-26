import {TbArrowBarLeft, TbArrowBarRight, TbBellRingingFilled} from "react-icons/tb";
import {RxCountdownTimer} from "react-icons/rx";
import {FaParking} from "react-icons/fa";
import {TfiMapAlt} from "react-icons/tfi";
import {MdOutlineScreenSearchDesktop} from "react-icons/md";
import {GrUserSettings} from "react-icons/gr";
import {Link} from "react-router-dom";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import {ROUTES} from "../../../../routes/routes";

const animatedComponents = makeAnimated();

const parkOptions = [
    {value: '1', label: 'Open 24/7'},
    {value: '2', label: 'Covered car park'},
    {value: '3', label: 'Handicap spaces'},
    {value: '4', label: 'In & out allowed'},
    {value: '5', label: 'Rest room available'},
    {value: '6', label: 'Wi-Fi Facilities'},
    {value: '7', label: 'CCTV available'},
    {value: '8', label: 'EV chargers'},
];

const menuItems = [
    {
        id: 1,
        label: "Target the nearest car parks",
        icon: <FaParking size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
    {
        id: 2,
        label: "Alerts and Notifications",
        icon: <TbBellRingingFilled size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
    {
        id: 3,
        label: "Parking Countdown",
        icon: <RxCountdownTimer size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
    {
        id: 4,
        label: "Find and book the suitable parking",
        icon: <TfiMapAlt size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
    {
        id: 5,
        label: "Search History",
        icon: <MdOutlineScreenSearchDesktop size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
    {
        id: 6,
        label: "Manage Your Profile",
        icon: <GrUserSettings size={25}/>,
        link: ROUTES.carParkUserDashboardMap,
    },
];

export default function CarParkUserDashboardHome() {
    return (
        <div>
            <h1 className="flex text-4xl font-bold justify-center px-20 mt-5 mb-6">
                Compare and book all parking offers now
            </h1>
            <div className="px-5 py-3 rounded-xl bg-white">
                <h3>Select the requirement you are looking for:</h3>
                <div className="my-2 w-96">
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={parkOptions}
                    />
                </div>
                <div className="flex mt-5 mb-2">
                    <div className="flex flex-col basis-1/3 items-center font-bold">
                        <h3>Location</h3>
                        <div className="mt-5">
                            <img width="50"
                                 alt="Google Maps icon (2020)"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/256px-Google_Maps_icon_%282020%29.svg.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <div className="flex justify-center">
                            <TbArrowBarRight size={25}/>
                            <h3 className="ml-4 font-bold">
                                Arrival
                            </h3>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="flex flex-col mt-5">
                                <label htmlFor="arrivalDate" className="justify-center">Date</label>
                                <input type="date"
                                       id="arrivalDate"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 my-2 w-40"/>
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="arrivalTime" className="justify-center">Time</label>
                                <input type="time"
                                       id="arrivalTime"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 my-2 w-40"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col basis-1/3">
                        <div className="flex justify-center">
                            <h3 className="mr-4 font-bold">
                                Destination
                            </h3>
                            <TbArrowBarLeft size={25}/>
                        </div>
                        <div className="flex justify-center gap-4">
                            <div className="flex flex-col mt-5">
                                <label htmlFor="destinationDate" className="justify-center">Date</label>
                                <input type="date"
                                       id="destinationDate"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 my-2 w-40"/>
                            </div>
                            <div className="flex flex-col mt-5">
                                <label htmlFor="destinationTime" className="justify-center">Time</label>
                                <input type="time"
                                       id="destinationTime"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 my-2 w-40"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-4 mt-10">
                    {menuItems.map(({id, label, icon, link}) => (
                        <Link to={link} key={id}
                              className="flex items-center justify-center bg-light-gray py-8 rounded-lg">
                            {icon}
                            <h3 className="ml-4">{label}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}