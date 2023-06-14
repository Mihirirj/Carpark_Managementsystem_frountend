import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import server from "../../../../config/apis/server";
import TopTitleBar from "../../../TopTitleBar";


const initialValues = {
    startDateOfBooked: "",
    startTimeOfBooked: "",
    endDateOfBooked: "",
    endTimeOfBooked: "",
    vehicleNo: "",
    parkId: "",
    slotId: "",
};

export default function CarParkUserNewBooking() {
    const {id} = useParams();
    const [userInputFields, setUserInputFields] = useState([
        {
            id: "slotId",
            text: "Select the Slot",
            type: "dropdown",
            options: [
                {value: "", label: "Please select an option", disabled: true},
            ],
        },
        {id: "startDateOfBooked", text: "Start Date of Booked", type: "date"},
        {id: "startTimeOfBooked", text: "Start Time of Booked", type: "time"},
        {id: "endDateOfBooked", text: "End Date of Booked", type: "date"},
        {id: "endTimeOfBooked", text: "End Time of Booked", type: "time"},
        {id: "vehicleNo", text: "Vehicle No", type: "text"},
    ]);

    useEffect(() => {
        console.log(id);

        function getSlots() {
            server
                .get(`/user/get_available_slots/${id}`, {
                    headers: {"token": localStorage.getItem("token")},
                })
                .then((res) => {
                    console.log("result : ", res.data);
                    const availableSlots = res.data;

                    const updatedOptions = availableSlots.map((slot) => ({
                        value: slot.slot_id,
                        label: `Slot ${slot.slot_id}`,
                    }));

                    const updatedInputFields = [...userInputFields];
                    const dropdownField = updatedInputFields.find(
                        (field) => field.id === "slotId"
                    );
                    dropdownField.options = [
                        {value: "", label: "Please select an option", disabled: true},
                        ...updatedOptions,
                    ];

                    setUserInputFields(updatedInputFields);
                })
                .catch((err) => {
                    alert(err);
                });
        }

        getSlots();
    }, [id]);

    const handleSubmit = (values, {resetForm}) => {
        console.log(values);

        function addReservation() {
            server
                .post("/user/add_reservation", {
                        park_id: id,
                        slot_id: values.slotId,
                        vehicle_no: values.vehicleNo,
                        date: values.startDateOfBooked,
                        start_time: values.startTimeOfBooked,
                        end_date: values.endDateOfBooked,
                        end_time: values.endTimeOfBooked,
                        duration: 10,
                    },
                    {
                        headers: {"token": localStorage.getItem("token")},
                    })
                .then((res) => {
                    // alert(res.data);
                    console.log("result : ", res.data);
                })
                .catch((err) => {
                    alert(err);
                });
        }

        addReservation();
        resetForm();
    };

    return (
        <div>
            <TopTitleBar title="If you Want New Reservation?"/>
            <div className="flex justify-center items-center p-5 bg-white rounded-xl mx-5">
                <div className="bg-dark-gray w-96 p-4 rounded-lg">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className="flex flex-col gap-x-1">
                                    {userInputFields.map((credential) => (
                                        <div key={credential.id}>
                                            <label htmlFor={credential.id}>{credential.text}</label>
                                            {credential.type === "dropdown" ? (
                                                <Field
                                                    as="select"
                                                    id={credential.id}
                                                    name={credential.id}
                                                    className={`w-full rounded-lg p-2 mt-2 ${
                                                        errors[credential.id] && touched[credential.id]
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {credential.options.map((option) => (
                                                        <option
                                                            key={option.value}
                                                            value={option.value}
                                                            disabled={option.disabled}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    ))}
                                                </Field>
                                            ) : (
                                                <Field
                                                    id={credential.id}
                                                    type={credential.type}
                                                    name={credential.id}
                                                    className={`w-full rounded-lg p-2 mt-2 ${
                                                        errors[credential.id] && touched[credential.id]
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                            )}
                                            <ErrorMessage
                                                name={credential.id}
                                                component="div"
                                                className="text-red-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4 w-96"
                                        title="Cancel Booking"
                                    >
                                        Make Booking
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
