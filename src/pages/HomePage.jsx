import {Link} from "react-router-dom";
import {ROUTES} from "../routes/routes";

export default function HomePage() {
    return (
        <div className="flex flex-col bg-client-home bg-cover bg-center h-screen">
            <div className="flex h-1/3 justify-end gap-x-5 text-white px-20 pt-8 font-bold text-lg">
                <Link to={ROUTES.home}>Home</Link>
                <div>About Us</div>
                <div>Contact Us</div>
            </div>
            <div className="flex h-2/3 justify-center">
                <div className="flex flex-col w-1/2 px-20">
                    <h1 className="text-white font-bold text-6xl">
                        Now we are closer to you
                    </h1>
                    <h3 className="text-white text-2xl my-10">
                        Find nearest car parking slot within few seconds. we are provide better solution for you.
                    </h3>
                    <div className="flex mt-3 gap-x-3">
                        <Link to={ROUTES.userSignUp} className="bg-white px-4 py-2 rounded">Sign Up</Link>
                        <Link to={ROUTES.userSignIn} className="bg-white px-4 py-2 rounded">Sign In</Link>
                    </div>
                </div>
                <div className="w-1/2">

                </div>
            </div>
        </div>
    );
}
