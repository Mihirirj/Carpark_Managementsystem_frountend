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
    registerCarPark: 'register-car-park',
    favouriteCarParks: 'favourite-car-parks',
    carParkOwnerDashboard: 'car-park-owner-dashboard',
    carParkUserDashboard: 'car-park-user-dashboard',
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

    logout: `/${BASE_ROUTES.logout}`,
    view: `/${BASE_ROUTES.view}`,
    setting: `/${BASE_ROUTES.setting}`,
};

export {BASE_ROUTES, ROUTES};