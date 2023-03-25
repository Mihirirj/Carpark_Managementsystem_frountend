const BASE_ROUTES = {
    init: '',
    home: 'home',
    view: 'view',
    setting: 'setting',
    dashboard: 'dashboard',
    incomeReport: 'income-report',
    viewCarParks: 'view-car-parks',
    booking: 'booking',
    carParkOwnerDashboard: 'car-park-owner-dashboard',
    carParkUserDashboard: 'car-park-user-dashboard',
    logout: 'logout',
};

const carParkOwnerDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    dashboard: `${BASE_ROUTES.dashboard}`,
    incomeReport: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.incomeReport}`,
    viewCarParks: `${BASE_ROUTES.dashboard}/${BASE_ROUTES.viewCarParks}`,
};

const carParkUserDashboardRoutes = {
    home: `${BASE_ROUTES.home}`,
    booking: `${BASE_ROUTES.booking}`,
};

const ROUTES = {
    carParkOwnerDashboard: `/${BASE_ROUTES.carParkOwnerDashboard}`,
    carParkOwnerDashboardHome: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.home}`,
    carParkOwnerDashboardDashboard: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.dashboard}`,
    carParkOwnerIncomeReport: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.incomeReport}`,
    carParkOwnerViewCarParks: `/${BASE_ROUTES.carParkOwnerDashboard}/${carParkOwnerDashboardRoutes.viewCarParks}`,

    carParkUserDashboard: `/${BASE_ROUTES.carParkUserDashboard}`,
    carParkUserDashboardHome: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.home}`,
    carParkUserDashboardBooking: `/${BASE_ROUTES.carParkUserDashboard}/${carParkUserDashboardRoutes.booking}`,

    logout: `/${BASE_ROUTES.logout}`,
    view: `/${BASE_ROUTES.view}`,
    setting: `/${BASE_ROUTES.setting}`,
};

export {BASE_ROUTES, ROUTES};