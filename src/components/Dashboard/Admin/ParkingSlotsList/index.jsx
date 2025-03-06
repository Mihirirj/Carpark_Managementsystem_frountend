import TopTitleBar from "../../../TopTitleBar";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import server from "../../../../config/apis/server";

const PER_PAGE = 2;

// const parkingSpots = [
//     {
//         id: 1,
//         image: "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg",
//         carParkOwnerName: "Wijerathna P.R.M.K.",
//         parkName: "Park 1",
//         ownerId: "1023",
//         slotId: "1000",
//         price: "Rs. 1000",
//     },
//     {
//         id: 2,
//         image: "http://www.selby.gov.uk/sites/default/files/leisure%20centre%203_0.jpg",
//         carParkOwnerName: "Wijerathna P.R.M.K.",
//         parkName: "Park 2",
//         ownerId: "1024",
//         slotId: "1001",
//         price: "Rs. 1300",
//     },
//     {
//         id: 3,
//         image: "https://www.carlisle.gov.uk/Portals/0/EasyGalleryImages/7/2090/via2.jpg",
//         carParkOwnerName: "Wijerathna P.R.M.K.",
//         parkName: "Park 3",
//         ownerId: "1025",
//         slotId: "1002",
//         price: "Rs. 1500",
//     },
// ];

export default function ParkingSlots() {
    const [currentPage, setCurrentPage] = useState(0);
    const [parksList, setParksList] = useState([]);

    const getCarParks = () => {
        server
            .get("/admin/get_all_parks", {
                headers: {"token": localStorage.getItem("token")}
            })
            .then((res) => {
                console.log(res.data);
                setParksList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCarParks();
    }, []);

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(parksList.length / PER_PAGE);

    const handlePageClick = ({selected: selectedPage}) => {
        console.log("Selected Page", selectedPage);
        setCurrentPage(selectedPage);
    };

    if(parksList == 'undefined'){
        return (
        <div>Loading...</div>
        );
    }

    return (
        <div>
            <TopTitleBar title="Parking Slots"/>
            <div className="p-5 bg-white rounded-xl mx-5">
                <div className="flex flex-col space-y-4">
                    {parksList.length > 0 && parksList
                        .slice(offset, offset + PER_PAGE)
                        .map((spot) => (
                            <div key={spot.id} className="flex rounded-lg bg-light-gray">
                                <div className="flex basis-1/4 items-center">
                                    <img
                                        className="object-cover h-44 w-96 rounded-lg"
                                        src={spot.image}
                                        alt={spot.carParkOwnerName}
                                    />
                                </div>
                                <div className="flex flex-col basis-3/4 px-6 justify-center">
                                    <h6 className="text-md font-bold">Car Park Owner: {spot.carParkOwnerName}</h6>
                                    <div className="flex">
                                        <h6 className="text-md text-dark-green font-bold">
                                            Name: {spot.parkName}
                                        </h6>
                                    </div>
                                    <h6 className="text-md font-bold">Owner Id: {spot.ownerId}</h6>
                                    <h6 className="text-md font-bold">Slot Id: {spot.slotId}</h6>
                                    <h6 className="w-fit text-md mt-2 font-bold py-1 px-2 bg-green-500 text-white rounded-lg">
                                        One hour: {spot.price}
                                    </h6>
                                </div>
                            </div>
                        ))}
                    <div className="">
                        <ReactPaginate
                            previousLabel={"← Previous"}
                            nextLabel={"Next →"}
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName="my-2 flex flex-start content-center justify-center"
                            pageClassName={""}
                            pageLinkClassName="px-2 py-1 mx-2 border rounded-md border-black"
                            previousLinkClassName={"px-2 py-1 mx-2 border rounded-md border-gray-300"}
                            nextLinkClassName={"px-2 py-1 mx-2 border rounded-md border-gray-300"}
                            disabledClassName={""}
                            disabledLinkClassName={"px-2 py 1 mx-2 border rounded-md border-gray-300 bg-gray-300 text-gray-600"}
                            activeLinkClassName={"text-white bg-black"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}