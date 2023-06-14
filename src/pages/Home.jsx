import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-96 gap-y-10">
            <h1 className="flex justify-center text-3xl font-bold underline">Home Navigation</h1>
            <div className="grid grid-cols-5 gap-x-10">
                <Link to="/car-park-owner-dashboard/dashboard" className="flex justify-center bg-purple-500 p-3 rounded-lg">Car
                    Park Owner Dashboard</Link>
                <Link to="/car-park-user-dashboard/home" className="flex justify-center bg-purple-500 p-3 rounded-lg">Car
                    Park User Dashboard</Link>
                <Link to="/admin-dashboard/home" className="flex justify-center bg-purple-500 p-3 rounded-lg">Admin
                    Dashboard</Link>
                <Link to="/sign-up" className="flex justify-center bg-purple-500 p-3 rounded-lg">Sign Up</Link>
                <a href='http://localhost:3002/api/auth/sign-in'>Login</a>
            </div>
        </div>
    );
}