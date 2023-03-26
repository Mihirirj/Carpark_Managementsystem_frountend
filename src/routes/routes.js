const BASE_ROUTES = {
    init: '',
    home: 'home',
    view: 'view',
    setting: 'setting',
    dashboard: 'dashboard',
    incomeReport: 'income-report',
    viewCarParks: 'view-car-parks',
    reservations: 'reservations',
    userDetails: 'user-details',
    feedbacks: 'feedbacks',
    booking: 'booking',
    map: 'map',
    parkingSlotsList: 'parking-slots-list',
    parkingOwnersList: 'parking-owners-list',
    vehicleOwnersList: 'vehicle-owners-list',
    slotRegistrationRequestsList: 'slot-registration-requests-list',
    viewCarParkRegistration: 'view-car-park-registration',
    registerCarPark: 'register-car-park',
    favouriteCarParks: 'favourite-car-parks',
    carParkOwnerDashboard: 'car-park-owner-dashboard',
    carParkUserDashboard: 'car-park-user-dashboard',
    adminDashboard: 'admin-dashboard',
    logout: 'logout',
};

const carParkOwnerDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    dashboard: `${BASE_ROUTES.dashboard}`,
    incomeReport: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.incomeReport}`,
    viewCarParks: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParks}`,
    reservations: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.reservations}`,
    userDetails: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.userDetails}`,
    feedbacks: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.feedbacks}`,
    favouriteCarParks: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.favouriteCarParks}`,
    registerCarPark: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.registerCarPark}`,
};

const carParkUserDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    booking: `${BASE_ROUTES.booking}`,
    map: `${BASE_ROUTES.map}`,
};

const adminDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    dashboard: `${BASE_ROUTES.dashboard}`,
    booking: `${BASE_ROUTES.booking}`,
    parkingSlotsList: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.parkingSlotsList}`,
    parkingOwnersList: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.parkingOwnersList}`,
    vehicleOwnersList: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.vehicleOwnersList}`,
    slotRegistrationRequestsList: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.slotRegistrationRequestsList}`,
    viewCarParkRegistration: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParkRegistration}`,
}

const ROUTES = {
    carParkOwnerDashboard: `/${BASE_ROUTES.carParkOwnerDashboard}`,
    carParkOwnerDashboardHome: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.home}`,
    carParkOwnerDashboardDashboard: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.dashboard}`,
    carParkOwnerIncomeReport: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.incomeReport}`,
    carParkOwnerViewCarParks: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.viewCarParks}`,
    carParkOwnerReservations: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.reservations}`,
    carParkOwnerUserDetails: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.userDetails}`,
    carParkOwnerFeedbacks: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.feedbacks}`,
    carParkOwnerFavouriteCarParks: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.favouriteCarParks}`,
    carParkOwnerRegisterCarPark: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.registerCarPark}`,

    carParkUserDashboard: `/${BASE_ROUTES.carParkUserDashboard}`,
    carParkUserDashboardHome: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.home}`,
    carParkUserDashboardBooking: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.booking}`,
    carParkUserDashboardMap: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.map}`,

    adminDashboard: `/${BASE_ROUTES.adminDashboard}`,
    adminDashboardHome: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.home}`,
    adminDashboardDashboard: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.dashboard}`,
    adminDashboardBooking: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.booking}`,
    adminDashboardParkingSlotsList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.parkingSlotsList}`,
    adminDashboardParkingOwnersList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.parkingOwnersList}`,
    adminDashboardVehicleOwnersList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.vehicleOwnersList}`,
    adminDashboardSlotRegistrationRequestsList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.slotRegistrationRequestsList}`,
    adminDashboardViewCarParkRegistration: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.viewCarParkRegistration}`,

    logout: `/${BASE_ROUTES.logout}`,
    view: `/${BASE_ROUTES.view}`,
    setting: `/${BASE_ROUTES.setting}`,
};

export {BASE_ROUTES, ROUTES};