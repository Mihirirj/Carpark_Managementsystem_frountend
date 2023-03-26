import TopTitleBar from "../../../TopTitleBar";
import ReactPaginate from "react-paginate";
import {useMemo, useState} from "react";

const PER_PAGE = 6;

const owners = [
    {id: 1, name: 'Sathsara Bandara'},
    {id: 2, name: 'Kushani Fonseka'},
    {id: 3, name: 'Sithumi Balasuriya'},
    {id: 4, name: 'Menuka Rathnayake'},
    {id: 5, name: 'Anura Silva'},
    {id: 6, name: 'Chaminda Senarath'},
    {id: 7, name: 'Amila Perera'},
    {id: 8, name: 'Maheshi Ranaweera'},
    {id: 9, name: 'Tharindu Gunawardena'},
    {id: 10, name: 'Saman Kumara'},
    {id: 11, name: 'Nayani Abeysinghe'},
    {id: 12, name: 'Nuwan Jayawardena'},
    {id: 13, name: 'Ranil Peiris'},
    {id: 14, name: 'Dilani Fernando'},
    {id: 15, name: 'Dilshan Perera'},
    {id: 16, name: 'Roshan Silva'},
    {id: 17, name: 'Thilini Samarasinghe'},
    {id: 18, name: 'Nimali Wijesinghe'},
    {id: 19, name: 'Sanjaya Rathnayake'},
    {id: 20, name: 'Rukmal Perera'}
];

export default function ParkingOwnersList() {
    const [currentPage, setCurrentPage] = useState(0);
    const [ownersList, setOwnersList] = useState(owners);
    const [selectedOwner, setSelectedOwner] = useState(null);
    const [pageCount, setPageCount] = useState(Math.ceil(owners.length / PER_PAGE));

    useMemo(() => {
        if (selectedOwner) {
            const newOwnersList = ownersList.filter(owner => owner.id !== selectedOwner.id);
            setOwnersList(newOwnersList);
            const newPageCount = Math.ceil(newOwnersList.length / PER_PAGE);
            setCurrentPage(0);
            setPageCount(newPageCount);
        }
    }, [selectedOwner]);

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
                    <div className="pr-10">
                        Action
                    </div>
                </div>
                {ownersList
                    .slice(offset, offset + PER_PAGE)
                    .map(owner => (
                        <div key={owner.id} className="flex justify-between rounded-lg py-2 mt-2 border">
                            <div className="pl-10">
                                {owner.name}
                            </div>
                            <div className="flex pr-10 gap-x-10">
                                <div className="bg-green-600 rounded px-3 py-1 text-white cursor-pointer">
                                    View
                                </div>
                                <div className="bg-red-700 rounded px-3 py-1 text-white cursor-pointer"
                                     onClick={() => setSelectedOwner(owner)}>
                                    Remove
                                </div>
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
