import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DashboardHome from "../components/Dashboard/CarOwner/DashboardHome";
import IncomeReport from "../components/Dashboard/CarOwner/IncomeReport";
import ViewCarParks from "../components/Dashboard/CarOwner/ViewCarParks";

const router = createBrowserRouter([
    {
        path: '',
        element: <Dashboard/>,
        children: [
            {
                path: 'dashboard',
                element: <DashboardHome/>,
            },
            {
                path: 'dashboard/income-report',
                element: <IncomeReport/>,
            },
            {
                path: 'dashboard/view-car-parks',
                element: <ViewCarParks/>,
            }
        ]
    },
]);

export default router;