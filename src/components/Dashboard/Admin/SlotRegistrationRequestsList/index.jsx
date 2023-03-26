import TopTitleBar from "../../../TopTitleBar";
import ReactPaginate from "react-paginate";
import {useState} from "react";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../../routes/routes";

const PER_PAGE = 6;

const owners = [
    {id: 1, name: 'Sathsara Bandara', requestsCount: 1},
    {id: 2, name: 'Kushani Fonseka', requestsCount: 2},
    {id: 3, name: 'Sithumi Balasuriya', requestsCount: 3},
    {id: 4, name: 'Menuka Rathnayake', requestsCount: 1},
    {id: 5, name: 'Anura Silva', requestsCount: 4},
    {id: 6, name: 'Chaminda Senarath', requestsCount: 4},
    {id: 7, name: 'Amila Perera', requestsCount: 5},
    {id: 8, name: 'Maheshi Ranaweera', requestsCount: 1},
    {id: 9, name: 'Tharindu Gunawardena', requestsCount: 2},
    {id: 10, name: 'Saman Kumara', requestsCount: 4},
    {id: 11, name: 'Nayani Abeysinghe', requestsCount: 8},
    {id: 12, name: 'Nuwan Jayawardena', requestsCount: 10},
    {id: 13, name: 'Ranil Peiris', requestsCount: 5},
    {id: 14, name: 'Dilani Fernando', requestsCount: 1},
    {id: 15, name: 'Dilshan Perera', requestsCount: 1},
    {id: 16, name: 'Roshan Silva', requestsCount: 3},
    {id: 17, name: 'Thilini Samarasinghe', requestsCount: 2},
    {id: 18, name: 'Nimali Wijesinghe', requestsCount: 6},
    {id: 19, name: 'Sanjaya Rathnayake', requestsCount: 7},
    {id: 20, name: 'Rukmal Perera', requestsCount: 3}
];


export default function SlotRegistrationRequestsList() {
    const [currentPage, setCurrentPage] = useState(0);
    const [ownersList,] = useState(owners);
    const [, setSelectedOwner] = useState(null);
    const [pageCount,] = useState(Math.ceil(owners.length / PER_PAGE));

    const offset = currentPage * PER_PAGE;

    const handlePageClick = ({selected: selectedPage}) => {
        console.log("Selected Page", selectedPage);
        setCurrentPage(selectedPage);
    };

    return (
        <div>
            <TopTitleBar title="Parking Owners List"/>
            <div className="p-5 bg-white rounded-xl mx-5">
                <div className="flex bg-black text-white justify-between rounded-lg py-2">
                    <div className="pl-10">
                        Name
                    </div>
                    <div className="pl-10">
                        Requests Count
                    </div>
                    <div className="pr-10">
                        Action
                    </div>
                </div>
                {ownersList
                    .slice(offset, offset + PER_PAGE)
                    .map(owner => (
                        <div key={owner.id} className="flex items-center rounded-lg py-2 mt-2 border">
                            <div className="pl-10 basis-1/3">
                                {owner.name}
                            </div>
                            <div className="pl-10 basis-1/3 flex justify-center">
                                {owner.requestsCount}
                            </div>
                            <div className="flex justify-end pr-10 gap-x-10 basis-1/3">
                                <Link to={ROUTES.adminDashboardViewCarParkRegistration + `/${owner.id}`}
                                      className="bg-green-600 rounded px-3 py-1 text-white cursor-pointer"
                                      onClick={() => setSelectedOwner(owner)}>
                                    View
                                </Link>
                            </div>
                        </div>
                    ))}
                <div className="mt-4">
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
    );
}
