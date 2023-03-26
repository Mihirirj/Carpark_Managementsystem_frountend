import TopTitleBar from "../../../TopTitleBar";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    dateOfBooked: Yup.string().required('Required'),
    timeOfBooked: Yup.string().required('Required'),
    reason: Yup.string().required('Required')
});

const userInputFields = [
    {id: "username", text: "Username", type: "text"},
    {id: "dateOfBooked", text: "Date of Booked", type: "date"},
    {id: "timeOfBooked", text: "Time of Booked", type: "time"},
    {id: "reason", text: "Reason", type: "text"},
];

const initialValues = {
    username: '',
    dateOfBooked: '',
    timeOfBooked: '',
    reason: '',
}

export default function CarParkUserBooking() {
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div>
            <TopTitleBar title="If you Want Cancel Your Reservation?"/>
            <div className="flex justify-center items-center p-5 bg-white rounded-xl mx-5">
                <div className="bg-dark-gray w-96 p-4 rounded-lg">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({errors, touched}) => (
                            <Form>
                                <div className="flex flex-col gap-x-1">
                                    {userInputFields.map((credential) => (
                                        <div key={credential.id}>
                                            <label className="text-white"
                                                   htmlFor={credential.id}>{credential.text}</label>
                                            <Field id={credential.id} type={credential.type} name={credential.id}
                                                   className={`w-full rounded-lg p-2 mt-2 ${errors[credential.id] && touched[credential.id] ? 'border-red-500' : ''}`}/>
                                            <ErrorMessage name={credential.id} component="div"
                                                          className="text-red-500"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center">
                                    <button type="submit"
                                            className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4 w-96"
                                            title="Cancel Booking">Cancel Booking
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