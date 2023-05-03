const BASE_ROUTES = {
    init: '',
    home: 'home',
    signIn: 'sign-in',
    signUp: 'sign-up',
    view: 'view',
    setting: 'setting',
    dashboard: 'dashboard',
    incomeReport: 'income-report',
    viewCarParks: 'view-car-parks',
    reservations: 'reservations',
    userDetails: 'user-details',
    feedbacks: 'feedbacks',
    booking: 'booking',
    contact: 'contact',
    map: 'map',
    report: 'report',
    payment: 'payment',
    viewAll: 'view-all',
    help: 'help',
    parkingSlotsList: 'parking-slots-list',
    parkingOwnersList: 'parking-owners-list',
    vehicleOwnersList: 'vehicle-owners-list',
    scanQRCode: 'scan-qr-code',
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
    viewAll: `${BASE_ROUTES.viewAll}`,
    setting: `${BASE_ROUTES.setting}`,
};

const carParkUserDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    booking: `${BASE_ROUTES.booking}`,
    map: `${BASE_ROUTES.map}`,
    payment: `${BASE_ROUTES.payment}`,
    contact: `${BASE_ROUTES.contact}`,
    help: `${BASE_ROUTES.help}`,
    setting: `${BASE_ROUTES.setting}`,
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
    payment: `${BASE_ROUTES.payment}`,
    scanQRCode: `${BASE_ROUTES.scanQRCode}`,
    report: `${BASE_ROUTES.report}`,
}

const userRoutes = {
    signIn: `/${BASE_ROUTES.signIn}`,
    signUp: `/${BASE_ROUTES.signUp}`,
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
    carParkOwnerViewAll: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.viewAll}`,
    carParkOwnerSetting: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.setting}`,

    carParkUserDashboard: `/${BASE_ROUTES.carParkUserDashboard}`,
    carParkUserDashboardHome: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.home}`,
    carParkUserDashboardBooking: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.booking}`,
    carParkUserDashboardMap: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.map}`,
    carParkUserDashboardPayment: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.payment}`,
    carParkUserDashboardContact: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.contact}`,
    carParkUserDashboardHelp: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.help}`,
    carParkUserDashboardSetting: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.setting}`,

    adminDashboard: `/${BASE_ROUTES.adminDashboard}`,
    adminDashboardHome: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.home}`,
    adminDashboardDashboard: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.dashboard}`,
    adminDashboardBooking: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.booking}`,
    adminDashboardParkingSlotsList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.parkingSlotsList}`,
    adminDashboardParkingOwnersList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.parkingOwnersList}`,
    adminDashboardVehicleOwnersList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.vehicleOwnersList}`,
    adminDashboardSlotRegistrationRequestsList: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.slotRegistrationRequestsList}`,
    adminDashboardViewCarParkRegistration: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.viewCarParkRegistration}`,
    adminDashboardPayment: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.payment}`,
    adminDashboardScanQRCode: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.scanQRCode}`,
    adminDashboardReport: `/${BASE_ROUTES.adminDashboard}/${adminDashboardRoutes.report}`,

    userSignIn: `/${BASE_ROUTES.signIn}`,
    userSignUp: `/${BASE_ROUTES.signUp}`,

    logout: `/${BASE_ROUTES.logout}`,
    view: `/${BASE_ROUTES.view}`,
    setting: `/${BASE_ROUTES.setting}`,

    home: `/${BASE_ROUTES.init}`,
};

export {BASE_ROUTES, ROUTES};