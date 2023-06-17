import ENUMS from "../../../../config/enums/enums";
import {TbArrowBarLeft, TbArrowBarRight} from "react-icons/tb";
import {FiSearch} from "react-icons/fi";
import {FaSort} from "react-icons/fa";
import {useEffect, useState} from "react";
import server from "../../../../config/apis/server";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routes";
import GoogleMapReact from 'google-map-react';

const Marker = () => {
    return <div className="SuperAwesomePin">Park1</div>
};

export default function CarParkUserMap() {
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [parks, setParks] = useState([]);
    const [filteredParks, setFilteredParks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const defaultProps = {
        center: {
            lat: 6.9271,
            lng: 79.8612
        },
        zoom: 11
    };

    function getParks() {
        server.get("/user/get_all_parks",
            {
                headers: {"token": localStorage.getItem('token')}
            }
        )
            .then((res) => {
                setParks(res.data);
                filterParks(res.data, searchQuery);
                console.log(res.data);
            })
            // Catch errors if any
            .catch((err) => {
                alert(err);
            })
    }

    function filterParks(parksData, query) {
        let filtered = parksData;
        if (query) {
            filtered = parksData.filter((park) =>
                park.name && park.name.toLowerCase().includes(query.toLowerCase())
            );
        }
        setFilteredParks(filtered);
    }

    useEffect(() => {
        getParks();
        filterParks(parks, searchQuery);
    }, []);

    return (
        <div className="mt-28 bg-white mx-10 p-4 rounded-lg">
            <div className="grid grid-cols-4 gap-x-3 bg-light-gray items-center py-3 px-3 rounded-lg"
                 onClick={() => setSelectedSpot(null)}>
                <div className="grid grid-cols-7 items-center bg-white rounded">
                    <input
                        type="text"
                        placeholder="Where Do You Want to park"
                        className="pl-2 py-2 col-span-6 rounded-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <FiSearch className="cursor-pointer mx-auto" size={25}/>
                </div>
                <div className="flex justify-center">
                    <TbArrowBarRight size={25}/>
                    <h3 className="ml-4 font-bold">
                        Arrival
                    </h3>
                </div>
                <div className="flex justify-center">
                    <h3 className="mr-4 font-bold">
                        Departure
                    </h3>
                    <TbArrowBarLeft size={25}/>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-4 mt-4">
                <div>
                    <div className="flex justify-between bg-light-gray rounded-lg py-2 px-2 mb-3"
                         onClick={() => setSelectedSpot(null)}>
                        <div>
                            {filteredParks.length > 0 && parks.length} Car Parks Available
                        </div>
                        <div>
                            <FaSort size={25}/>
                        </div>
                    </div>
                    <div className="h-[26rem] overflow-y-scroll">
                        <div className="flex flex-col space-y-3">
                            {filteredParks.length > 0 && filteredParks
                                .map((spot) => (
                                    <div key={spot.park.park_id}
                                         className="flex rounded-lg bg-light-gray"
                                         onClick={() => setSelectedSpot(spot.park)}>
                                        <div className="flex basis-1/3 items-center">
                                            <img
                                                className="object-cover h-36 w-36 rounded-lg"
                                                src={spot.park.url}
                                                alt={spot.name}
                                            />
                                        </div>
                                        <div className="flex flex-col basis-2/3 px-6 justify-center">
                                            <h6 className="text-md font-bold">{"Park" + spot.park.park_id}</h6>
                                            <div className="flex">
                                                <h6 className="text-md text-dark-green font-bold">
                                                    Open Today:
                                                </h6>
                                                <h6 className="ml-2 text-md font-bold">{spot.openToday}</h6>
                                            </div>
                                            <h6 className="text-md font-bold">Available: {spot.availability}</h6>
                                            <h6 className="w-fit text-md font-bold py-1 px-2 bg-dark-green text-white rounded-lg">
                                                One Hour: {spot.park.price}
                                            </h6>
                                            <div className="flex flex-row gap-3">
                                                <h6 className={`w-fit text-md my-1 font-bold py-1 px-3 rounded-lg ${spot.status === ENUMS.parkingStatus.available ? 'bg-dark-green text-white' : 'bg-red-800 text-white'}`}>
                                                    {(spot.status) ? "Parking Full": "Parking Available"}
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                {selectedSpot ? (
                    <div className="flex flex-col border rounded-lg px-4 py-4 gap-y-2">
                        <h1 className="font-bold text-xl">
                            {selectedSpot.name}
                        </h1>
                        {/*<RatingsBar rating={selectedSpot.rating}/>*/}
                        <div className="h-5/6">
                            <div className="font-bold">
                                Description:
                            </div>
                            {selectedSpot.facilities}
                        </div>
                        <Link to={`${ROUTES.carParkUserDashboardNewBooking}/${selectedSpot.park_id}`} className="flex bg-dark-green py-2 rounded-lg justify-center font-bold text-white">
                            Book for Rs. {selectedSpot.price}
                        </Link>
                    </div>
                ) : (
                    <div className="flex border rounded-lg items-center justify-center">
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCpoYLn6IllWuJeNCl77tmfCkSWL2dNLZo" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <Marker lat={6.92} lng={79.8} />
                        </GoogleMapReact>
                    </div>
                )}
            </div>
        </div>
    );
}