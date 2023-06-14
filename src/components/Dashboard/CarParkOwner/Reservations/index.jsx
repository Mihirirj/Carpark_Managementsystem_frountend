import TopTitleBar from "../../../TopTitleBar";
import server from "../../../../config/apis/server";
import {useEffect, useState} from "react";

export default function Reservations() {
    const [reservations, setReservations] = useState([]);

    function getReservations(){
        server.get("/owner/get_reservations",
            {
                headers:{"token":localStorage.getItem('token')}
            })
            .then((res) => {
                // alert(res.data)
                setReservations(res.data);
                console.log(res.data)
            })
            // Catch errors if any
            .catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        getReservations();
    }, [])

    return (
        <div>
            <TopTitleBar title="My Reservations"/>
            <div
                className="p-5 bg-white rounded-xl mx-5 h-96">
                My Reservations
                <div>
                    {
                        reservations.map((res) => (
                            <div key={res.park_id}>
                                {
                                    res.bookings.map((book) => (
                                        <div key={book.booking_id}>
                                            <span>Booking Id: {book.booking_id}</span>
                                            <span>  </span>
                                            <span>Date: {book.date}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}