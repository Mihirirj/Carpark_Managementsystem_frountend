import TopTitleBar from "../../../TopTitleBar";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import server from "../../../../config/apis/server";

const formFields = [
    {id: 2, label: "Latitude", type: "text", name: "latitude",},
    {id: 3, label: "Longitude", type: "text", name: "longitude",},
    {id: 5, label: "Image url", type: "text", name: "parkingLotImage",},
    {id: 7, label: "Number of Spots", type: "number", name: "numSpots",},
    {id: 8, label: "Spot Size", type: "text", name: "spotSize",},
    {id: 11, label: "Price", type: "number", name: "price",},
    {id: 12, label: "Facilities", type: "text", name: "facilities",},
    {id: 13, label: "Special notes", type: "text", name: "specialNotes",},
];

const initialValues = {
    parkingLotImage: '',
    latitude: '',
    longitude: '',
    numSpots: '',
    spotSize: '',
    price: '',
    facilities: '',
    specialNotes: ''
};

const validationSchema = Yup.object().shape({
    numSpots: Yup.number().typeError('Number of spots must be a number').required('Number of spots is required'),
    price: Yup.number().typeError('Price must be a number').required('Price is required'),
    facilities: Yup.string().required('Facilities information is required'),
    specialNotes: Yup.string()
});

export default function RegisterCarPark() {
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        // alert(JSON.stringify(values, null, 2));

        function addPark() {
            server.post("/owner/add_park", {
                    longitude: values.latitude,
                    latitude: values.longitude,
                    url: values.parkingLotImage,
                    slot_count: values.numSpots,
                    spot_size: values.spotSize,
                    special_note: values.specialNotes,
                    facilities: values.facilities,
                    price: values.price,
                },
                {
                    headers: {"token": localStorage.getItem('token')}
                })
                .then((res) => {
                    alert(res.data);
                    console.log("result : ", res.data)
                })
                // Catch errors if any
                .catch((err) => {
                    alert(err)
                })
        }

        addPark();
        setSubmitting(false);
        resetForm();
    };

    return (
        <div>
            <TopTitleBar title="Parking Lot Registration Form"/>
            <div className="bg-white rounded-xl mx-5 px-8 py-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <div className="grid grid-cols-2 gap-x-8">
                                {formFields.map((field) => (
                                    <div key={field.id} className="flex flex-col rounded-lg justify-evenly mt-2">
                                        <div className="flex flex-col">
                                            <label htmlFor={field.name}>{field.label}</label>
                                            <Field
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                className="border-solid border border-dark-gray rounded-lg px-2 mt-1"
                                            />
                                            <ErrorMessage name={field.name} component="div" className="text-red-500"/>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex mt-4 bg-dark-gray px-4 py-3 rounded-lg justify-center font-bold">
                                    <button type="submit" title="Submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
