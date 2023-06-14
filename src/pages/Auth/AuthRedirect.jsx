import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

export default function AuthRedirect() {
    const {token, type} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('token',token);
        localStorage.setItem('user',type);

        if (type === "owner") {
            navigate(ROUTES.carParkOwnerDashboardDashboard);
        } else if (type === "user") {
            navigate(ROUTES.carParkUserDashboard);
        } else if (type === "admin") {
            navigate(ROUTES.adminDashboard);
        }
    }, []);


    return <>
        Hello
    </>
}