import TopTitleBar from "../../../TopTitleBar";
import PATHS from "../../../../config/paths/paths";

const feedbackData = [
    {id: 1, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
    {id: 2, name: "Sachinthani Mihrini", comment: "your park is very nice.i like your place.hope come back again.",},
];

export default function Feedbacks() {
    return (<div>
        <TopTitleBar title="Feedbacks"/>
        <div className="p-5 bg-white rounded-xl mx-5">
            <div className="flex flex-col gap-y-3">
                {feedbackData.map((feedback) => (<div
                    key={feedback.id}
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
                        <h3 className="font-bold text-xl">{feedback.name}</h3>
                        <div>{feedback.comment}</div>
                    </div>
                </div>))}
            </div>
        </div>
    </div>);
}
