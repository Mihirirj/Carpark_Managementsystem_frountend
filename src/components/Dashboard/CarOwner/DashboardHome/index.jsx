import {Link} from "react-router-dom";
import ROUTES from "../../../../routes/routes";

const links = [
    {id: 1, to: ROUTES.home, text: "Become Park Owner", color: "bg-dark-purple"},
    {id: 2, to: ROUTES.viewCarParks, text: "View registered car parks", color: "bg-light-blue"},
    {id: 3, to: ROUTES.view, text: "View Feedback", color: "bg-dark-green-100"},
    {id: 4, to: ROUTES.incomeReport, text: "View income report", color: "bg-dark-blue"},
    {id: 5, to: ROUTES.logout, text: "View reservations", color: "bg-dark-blue-200"},
    {id: 6, to: ROUTES.home, text: "View users details", color: "bg-dark-blue-100"},
];


export default function CarOwnerDashboardHome() {
    return (
        <div>
            <h1 className="flex text-4xl font-bold justify-center text-green-800 px-20 mt-5 mb-10">
                Become a Responsible Owner
            </h1>
            <div
                className="grid grid-cols-1 gap-4 p-5 rounded-xl bg-white md:grid-cols-2 gap-4 mx-5 lg:grid-cols-3 gap-6">
                {links.map(({id, to, color, text}) => (
                    <Link
                        key={id}
                        to={to}
                        className={`flex justify-center items-center h-40 rounded-lg font-bold text-xl ${color}`}
                    >
                        {text}
                    </Link>
                ))}
            </div>
        </div>
    );
}