import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routes";

const links = [
    {id: 1, to: ROUTES.carParkOwnerDashboardHome, text: "Parking Lot Registration Form", color: "bg-dark-purple"},
    {id: 2, to: ROUTES.carParkOwnerViewCarParks, text: "View registered car parks", color: "bg-light-blue"},
    {id: 3, to: ROUTES.carParkOwnerFeedbacks, text: "View Feedback", color: "bg-dark-green-100"},
    {id: 4, to: ROUTES.carParkOwnerIncomeReport, text: "View income report", color: "bg-dark-blue"},
    {id: 5, to: ROUTES.carParkOwnerReservations, text: "View reservations", color: "bg-dark-blue-200"},
    {id: 6, to: ROUTES.carParkOwnerFavouriteCarParks, text: "Users Favourite car park", color: "bg-dark-blue-100"},
];

export default function CarParkOwnerDashboardDashboard() {
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
                        title={text}
                        className={`flex justify-center items-center h-40 rounded-lg font-bold text-xl ${color}`}
                    >
                        {text}
                    </Link>
                ))}
            </div>
        </div>
    );
}