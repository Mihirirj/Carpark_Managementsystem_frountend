import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export default function RatingsBar({rating}) {
    const filledStars = Array(rating).fill(<AiFillStar size={20} className="text-yellow-300"/>);
    const emptyStars = Array(5 - rating).fill(<AiOutlineStar size={20} className="border-yellow-300"/>);

    return (
        <div className="flex items-center">
            {filledStars}
            {emptyStars}
        </div>
    );
}
