import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">Home</h1>
            <Link to="/car-park-owner-dashboard/home">Car Park Owner Dashboard</Link>
            <br/>
            <Link to="/car-park-user-dashboard/home">Car Park User Dashboard</Link>
        </div>
    );
}