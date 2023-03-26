import {BrowserRouter, Route, Routes} from "react-router-dom";
import CarParkOwnerDashboard from "../pages/CarParkOwnerDashboard";
import CarParkOwnerDashboardDashboard from "../components/Dashboard/CarParkOwner/CarParkOwnerDashboardDashboard";
import IncomeReport from "../components/Dashboard/CarParkOwner/IncomeReport";
import ViewCarParks from "../components/Dashboard/CarParkOwner/ViewCarParks";
import CarParkUserDashboard from "../pages/CarParkUserDashboard";
import CarParkUserDashboardHome from "../components/Dashboard/CarParkUser/CarParkUserDashboardHome";
import CarParkOwnerDashboardHome from "../components/Dashboard/CarParkOwner/CarParkOwnerDashboardHome";
import Reservations from "../components/Dashboard/CarParkOwner/Reservations";
import UserDetails from "../components/Dashboard/CarParkOwner/UserDetails";
import Feedbacks from "../components/Dashboard/CarParkOwner/Feedbacks";
import FavouriteCarParks from "../components/Dashboard/CarParkOwner/FavouriteCarParks";
import Home from "../pages/Home";
import {BASE_ROUTES} from "./routes";
import RegisterCarPark from "../components/Dashboard/CarParkOwner/RegisterCarPark";
import CarParkUserDashboardWithNavbar from "../pages/CarParkUserDashboardWithNavbar";
import CarParkUserMap from "../components/Dashboard/CarParkUser/CarParkUserMap";

export default function Router() {
    return (<BrowserRouter>
            <Routes>
                <Route path={BASE_ROUTES.init} element={<Home/>}/>
                <Route path={BASE_ROUTES.logout} element={<Home/>}/>
                <Route path={BASE_ROUTES.carParkOwnerDashboard} element={<CarParkOwnerDashboard/>}>
                    <Route path={BASE_ROUTES.home} element={<CarParkOwnerDashboardHome/>}/>
                    <Route path={BASE_ROUTES.dashboard} element={<CarParkOwnerDashboardDashboard/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.incomeReport}`} element={<IncomeReport/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParks}`} element={<ViewCarParks/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.reservations}`} element={<Reservations/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.userDetails}`} element={<UserDetails/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.feedbacks}`} element={<Feedbacks/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.favouriteCarParks}`}
                           element={<FavouriteCarParks/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.registerCarPark}`}
                           element={<RegisterCarPark/>}/>
                </Route>
                <Route path={BASE_ROUTES.carParkUserDashboard} element={<CarParkUserDashboard/>}>
                    <Route path={BASE_ROUTES.home} element={<CarParkUserDashboardHome/>}/>
                </Route>
                <Route path={BASE_ROUTES.carParkUserDashboard} element={<CarParkUserDashboardWithNavbar/>}>
                    <Route path={BASE_ROUTES.map} element={<CarParkUserMap/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

