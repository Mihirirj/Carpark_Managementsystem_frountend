import TopTitleBar from "../../../TopTitleBar";
import {FaParking} from "react-icons/fa";
import {TfiUser} from "react-icons/tfi";
import {AiFillCar} from "react-icons/ai";
import {BsChatRightText} from "react-icons/bs";
import {VscFeedback} from "react-icons/vsc";
import {ROUTES} from "../../../../routes/routes";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import server from "../../../../config/apis/server";


const linksData = [
    {
        id: 1,
        route: ROUTES.adminDashboardParkingSlotsList,
        title: "View Parking Slots",
        bgColor: "dark-green-100",
        icon: <FaParking size={50}/>,
        number: 150,
        label: "Parking Slots",
    },
    {
        id: 2,
        route: ROUTES.adminDashboardParkingOwnersList,
        title: "View Parking Slots",
        bgColor: "light-blue",
        icon: <TfiUser size={50}/>,
        number: 200,
        label: "Parking Owners",
    },
    {
        id: 3,
        route: ROUTES.adminDashboardVehicleOwnersList,
        title: "View Parking Slots",
        bgColor: "dark-purple",
        icon: <AiFillCar size={50}/>,
        number: 96,
        label: "Vehicle Owners",
    },
    {
        id: 4,
        route: ROUTES.adminDashboardViewCarParkRegistration,
        title: "View Parking Slots",
        bgColor: "orange-400",
        icon: <VscFeedback size={50}/>,
        number: 15,
        label: "Feedbacks",
    },
    {
        id: 5,
        route: ROUTES.adminDashboardSlotRegistrationRequestsList,
        title: "View Parking Slots",
        bgColor: "dark-blue-200",
        icon: <BsChatRightText size={40}/>,
        number: 50,
        label: "Registration Requests",
    },
];

export default function AdminDashboardDashboard() {
    const [dashboardData, setDashboardData] = useState({});

    useEffect(() => {
        fetchDashboardData();

        if(setDashboardData.length > 0){
            linksData[0].number = dashboardData.park_count;
            linksData[1].number = dashboardData.park_owner_count;
            linksData[2].number = dashboardData.vehicle_owner_count;
            linksData[3].number = dashboardData.feedback_count;
            linksData[4].number = dashboardData.request_count;
        }

    }, []);

    const fetchDashboardData = () => {
        server
            .get("/admin/get_analyse")
            .then((res) => {
                setDashboardData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return (
        <div>
            <TopTitleBar title="My Dashboard"/>
            <div
                className="grid grid-cols-1 gap-4 p-5 rounded-xl bg-white md:grid-cols-2 gap-4 mx-5 lg:grid-cols-3 gap-6">
                {linksData.map((link) => (
                    <Link
                        key={link.id}
                        to={link.route}
                        title={link.title}
                        className={`rounded-lg font-bold bg-${link.bgColor}`}
                    >
                        <div className="flex">
                            <div className="flex flex-col items-center justify-center py-10 basis-2/3">
                                <div className="text-4xl mb-3">{link.number}</div>
                                <div className="text-xl">{link.label}</div>
                            </div>
                            <div className="flex items-center justify-center basis-1/3">
                                {link.icon}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
