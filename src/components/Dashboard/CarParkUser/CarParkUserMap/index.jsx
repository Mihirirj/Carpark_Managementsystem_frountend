import ENUMS from "../../../../config/enums/enums";
import {TbArrowBarLeft, TbArrowBarRight} from "react-icons/tb";
import {FiSearch} from "react-icons/fi";
import {FaSort} from "react-icons/fa";
import {useState} from "react";
import RatingsBar from "../../../RatingsBar";

const parkingSpots = [
    {
        id: 1,
        image: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg",
        name: "Parking Spot 1",
        openToday: "24 Hours",
        available: 5,
        price: "LKR500",
        status: "Parking Full",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque bibendum, mauris eget ultrices aliquam, nisl magna fermentum nisi, eu rhoncus risus felis eget arcu. Sed sed tortor libero. In in orci non risus fringilla vestibulum.",
        rating: 4,
    },
    {
        id: 2,
        image: "http://www.selby.gov.uk/sites/default/files/leisure%20centre%203_0.jpg",
        name: "Parking Spot 2",
        openToday: "12 Hours",
        available: 4,
        price: "LKR800",
        status: "Parking Available",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Fusce sit amet libero eget odio finibus luctus. Etiam faucibus nisi quis laoreet consectetur. Praesent rutrum accumsan turpis, vel sagittis nulla finibus in.",
        rating: 3,
    },
    {
        id: 3,
        image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
        name: "Parking Spot 3",
        openToday: "15 Hours",
        available: 10,
        price: "LKR700",
        status: "Parking Full",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisl eget sem fringilla auctor. Integer ullamcorper mauris mauris, a venenatis neque accumsan vitae. In convallis dolor in turpis molestie vulputate.",
        rating: 2,
    },
    {
        id: 4,
        image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
        name: "Parking Spot 4",
        openToday: "15 Hours",
        available: 10,
        price: "LKR700",
        status: "Parking Full",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel suscipit nulla. Duis vitae arcu sed arcu efficitur tempus ut sed libero. Maecenas eget eleifend turpis. Ut ornare quam nec purus tristique vehicula.",
        rating: 5,
    },
    {
        id: 5,
        image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
        name: "Parking Spot 5",
        openToday: "15 Hours",
        available: 5,
        price: "LKR1100",
        status: "Parking Full",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel suscipit nulla. Duis vitae arcu sed arcu efficitur tempus ut sed libero. Maecenas eget eleifend turpis. Ut ornare quam nec purus tristique vehicula.",
        rating: 5,
    },
    {
        id: 6,
        image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
        name: "Parking Spot 6",
        openToday: "15 Hours",
        available: 9,
        price: "LKR700",
        status: "Parking Full",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel suscipit nulla. Duis vitae arcu sed arcu efficitur tempus ut sed libero. Maecenas eget eleifend turpis. Ut ornare quam nec purus tristique vehicula.",
        rating: 2,
    },
];
export default function CarParkUserMap() {
    const [selectedSpot, setSelectedSpot] = useState(null);

    return (
        <div className="mt-28 bg-white mx-10 p-4 rounded-lg">
            <div className="grid grid-cols-4 gap-x-3 bg-light-gray items-center py-3 px-3 rounded-lg"
                 onClick={() => setSelectedSpot(null)}>
                <div className="grid grid-cols-7 items-center bg-white rounded">
                    <input type="text" placeholder="Where  Do You Want to park"
                           className="pl-2 py-2 col-span-6 rounded-lg"/>
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
                            25 Records found
                        </div>
                        <div>
                            <FaSort size={25}/>
                        </div>
                    </div>
                    <div className="h-[26rem] overflow-y-scroll">
                        <div className="flex flex-col space-y-3">
                            {parkingSpots
                                .map((spot) => (
                                    <div key={spot.id}
                                         className="flex rounded-lg bg-light-gray"
                                         onClick={() => setSelectedSpot(spot)}>
                                        <div className="flex basis-1/3 items-center">
                                            <img
                                                className="object-cover h-36 w-96 rounded-lg"
                                                src={spot.image}
                                                alt={spot.name}
                                            />
                                        </div>
                                        <div className="flex flex-col basis-2/3 px-6 justify-center">
                                            <h6 className="text-md font-bold">{spot.name}</h6>
                                            <div className="flex">
                                                <h6 className="text-md text-dark-green font-bold">
                                                    Open Today:
                                                </h6>
                                                <h6 className="ml-2 text-md font-bold">{spot.openToday}</h6>
                                            </div>
                                            <h6 className="text-md font-bold">Available: {spot.available}</h6>
                                            <h6 className="w-fit text-md font-bold py-1 px-2 bg-dark-green text-white rounded-lg">
                                                One Hour: {spot.price}
                                            </h6>
                                            <div className="flex flex-row gap-3">
                                                <h6 className={`w-fit text-md my-1 font-bold py-1 px-3 rounded-lg ${spot.status === ENUMS.parkingStatus.available ? 'bg-dark-green text-white' : 'bg-red-800 text-white'}`}>
                                                    {spot.status}
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
                        <RatingsBar rating={selectedSpot.rating}/>
                        <div className="h-5/6">
                            <div className="font-bold">
                                Description:
                            </div>
                            {selectedSpot.description}
                        </div>
                        <div className="flex bg-dark-green py-2 rounded-lg justify-center font-bold text-white">
                            Book for Rs. {selectedSpot.price}
                        </div>
                    </div>
                ) : (
                    <div className="flex border rounded-lg items-center justify-center">
                        Google Map
                    </div>
                )}
            </div>
        </div>
    );
}