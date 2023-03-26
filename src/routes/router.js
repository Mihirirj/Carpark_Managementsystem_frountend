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
import AdminDashboard from "../pages/AdminDashboard";
import AdminDashboardHome from "../components/Dashboard/Admin/AdminDashboardHome";
import AdminDashboardDashboard from "../components/Dashboard/Admin/AdminDashboardDashboard";
import ParkingSlotsList from "../components/Dashboard/Admin/ParkingSlotsList";
import ParkingOwnersList from "../components/Dashboard/Admin/ParkingOwnersList";
import VehicleOwnersList from "../components/Dashboard/Admin/VehicleOwnersList";
import SlotRegistrationRequestsList from "../components/Dashboard/Admin/SlotRegistrationRequestsList";
import ViewCarParkRegistration from "../components/Dashboard/Admin/ViewCarParkRegistration";
import AdminDashboardPayment from "../components/Dashboard/Admin/AdminDashboardPayment";
import ScanQRCode from "../components/Dashboard/Admin/ScanQRCode";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SIgnUp";

export default function Router() {
    return (<BrowserRouter>
            <Routes>
                <Route path={BASE_ROUTES.init} element={<Home/>}/>
                <Route path={BASE_ROUTES.signIn} element={<SignIn/>}/>
                <Route path={BASE_ROUTES.signUp} element={<SignUp/>}/>
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
                <Route path={BASE_ROUTES.adminDashboard} element={<AdminDashboard/>}>
                    <Route path={BASE_ROUTES.home} element={<AdminDashboardHome/>}/>
                    <Route path={BASE_ROUTES.dashboard} element={<AdminDashboardDashboard/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.parkingSlotsList}`}
                           element={<ParkingSlotsList/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.parkingOwnersList}`}
                           element={<ParkingOwnersList/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.vehicleOwnersList}`}
                           element={<VehicleOwnersList/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.slotRegistrationRequestsList}`}
                           element={<SlotRegistrationRequestsList/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParkRegistration}`}
                           element={<SlotRegistrationRequestsList/>}/>
                    <Route path={`${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParkRegistration}/:id`}
                           element={<ViewCarParkRegistration/>}/>
                    <Route path={BASE_ROUTES.payment}
                           element={<AdminDashboardPayment/>}/>
                    <Route path={BASE_ROUTES.scanQRCode}
                            element={<ScanQRCode/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

