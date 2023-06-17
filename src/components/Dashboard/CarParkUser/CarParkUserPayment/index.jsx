import TopTitleBar from "../../../TopTitleBar";
import PATHS from "../../../../config/paths/paths";

export default function CarParkUserPayment() {
    const paymentMethods = [
        {id: "creditOrDebitCard", title: "Credit or Debit card"},
        {id: "cash", title: "Cash"},
    ];

    const cardDetails = [
        {id: "cardOwner", label: "Card Owner", type: "text", placeholder: "John Doe"},
        {id: "cardNumber", label: "Card Number", type: "text", placeholder: "1234 5678 9012 3456"},
        {id: "expireDate", label: "Expire Date", type: "month", placeholder: "MM/YY"},
        {id: "cvv", label: "CVV", type: "text", placeholder: "123"},
    ];

    return (
        <div>
            <TopTitleBar title="Payment"/>
            <div className="p-5 bg-gray-300 rounded-xl mx-5">
                <h3 className="font-bold">Payment Methods:</h3>
                <div className="flex gap-x-5">
                    {paymentMethods.map((method) => (
                        <div className="flex items-center" key={method.id}>
                            <input type="radio" title={method.title} id={method.id} name="cashOrCard"/>
                            <label htmlFor={method.id} className="ml-2">{method.title}</label>
                        </div>
                    ))}
                </div>
                <div className="bg-white mt-3 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold">Add a new Credit /Debit card</h3>
                        <div className="flex gap-x-4">
                            <img
                                src={PATHS.masterCardImage}
                                alt="Master Card"/>
                            <img
                                src={PATHS.visaCardImage}
                                alt="Visa Card"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6">
                        {cardDetails.map((detail) => (
                            <div className="flex flex-col mt-4 gap-y-1" key={detail.id}>
                                <label htmlFor={detail.id}>{detail.label}</label>
                                <input type={detail.type} id={detail.id} placeholder={detail.placeholder}
                                       className="border rounded-lg p-2"/>
                            </div>
                        ))}
                        <div className="flex col-span-2 justify-center bg-black text-white mt-10 rounded-lg py-2">
                            Confirm Payment
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}