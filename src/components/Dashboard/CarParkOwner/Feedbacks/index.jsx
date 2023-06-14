import TopTitleBar from "../../../TopTitleBar";
import PATHS from "../../../../config/paths/paths";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import server from "../../../../config/apis/server";

const PER_PAGE = 3;

const feedbackData = [
    {id: 1, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
    {id: 2, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
    {id: 3, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
    {id: 4, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
    {id: 5, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
];

export default function Feedbacks() {
    const [currentPage, setCurrentPage] = useState(0);
    const [feedbacks, setFeedbacks] = useState([]);

    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(feedbackData.length / PER_PAGE);

    function getFeedbacks() {
        server.get("/owner/get_feedbacks",
            {
                headers: {"token": localStorage.getItem('token')}
            })
            .then((res) => {
                // alert(res.data)
                setFeedbacks(res.data);
                console.log("result : ", res.data)
            })
            // Catch errors if any
            .catch((err) => {
                alert(err)
            })
    }

    useEffect(() => {
        getFeedbacks();
    }, []);

    const handlePageClick = ({selected: selectedPage}) => {
        console.log("Selected Page", selectedPage);
        setCurrentPage(selectedPage);
    };

    return (<div>
        <TopTitleBar title="Feedbacks"/>
        <div className="p-5 bg-white rounded-xl mx-5">
            <div className="flex flex-col gap-y-3">
                {feedbacks
                    .slice(offset, offset + PER_PAGE)
                    .map((feedback, id) => (<div
                        key={id}
                        className="flex flex-row items-center bg-light-gray rounded-lg"
                    >
                        <div>
                            <img
                                src={PATHS.profileImage}
                                alt="Profile Pic"
                                className="mx-3 my-2 w-20 cursor-pointer"
                            />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl">{feedback.username}</h3>
                            <div>{feedback.feedback}</div>
                        </div>
                    </div>))}
                <div>
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName="my-4 flex flex-start content-center justify-center"
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
    </div>);
}
