import TopTitleBar from "../../../TopTitleBar";
import ENUMS from "../../../../config/enums/enums";

const parkingSpots = [
    {
        id: 1,
        image: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg",
        name: "Parking Spot 1",
        openToday: "24 Hours",
        available: 5,
        price: "LKR500",
        status: "Parking Full",
    },
    {
        id: 2,
        image: "http://www.selby.gov.uk/sites/default/files/leisure%20centre%203_0.jpg",
        name: "Parking Spot 2",
        openToday: "12 Hours",
        available: 4,
        price: "LKR800",
        status: "Parking Available",
    },
    {
        id: 3,
        image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
        name: "Parking Spot 3",
        openToday: "15 Hours",
        available: 10,
        price: "LKR700",
        status: "Parking Full",
    },
];

export default function ViewCarParks() {
    return (
        <div>
            <TopTitleBar/>
            <div className="p-5 bg-white rounded-xl mx-5">
                <div className="flex flex-col space-y-4">
                    {parkingSpots.map((spot) => (
                        <div key={spot.id} className="flex rounded-lg bg-light-gray">
                            <div className="flex basis-1/4 items-center">
                                <img
                                    className="object-cover h-48 w-96 rounded-lg"
                                    src={spot.image}
                                    alt={spot.name}
                                />
                            </div>
                            <div className="flex flex-col basis-3/4 px-6 justify-center">
                                <h6 className="text-md font-bold">{spot.name}</h6>
                                <div className="flex">
                                    <h6 className="text-md text-dark-green font-bold">
                                        Open Today:
                                    </h6>
                                    <h6 className="ml-2 text-md font-bold">{spot.openToday}</h6>
                                </div>
                                <h6 className="text-md font-bold">Available: {spot.available}</h6>
                                <h6 className="w-fit text-md my-2 font-bold py-1 px-2 bg-dark-green text-white rounded-lg">
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
    );
}
