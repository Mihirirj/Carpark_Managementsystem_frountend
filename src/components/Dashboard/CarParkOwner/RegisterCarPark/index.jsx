import TopTitleBar from "../../../TopTitleBar";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";

const formFields = [
    {id: 1, label: "Owner Name", type: "text", name: "ownerName",},
    {id: 2, label: "Owner ID", type: "text", name: "ownerID",},
    {id: 3, label: "Parking Lot Address", type: "text", name: "address",},
    {id: 4, label: "Name of Parking Lot", type: "text", name: "parkingLotName",},
    {id: 5, label: "Image of Parking Lot", type: "file", name: "parkingLotImage",},
    {id: 6, label: "Outline Plan", type: "text", name: "outlinePlan",},
    {id: 7, label: "Number of Spots", type: "text", name: "numSpots",},
    {id: 8, label: "Size of Spots", type: "text", name: "spotSize",},
    {id: 9, label: "Registration Certificate of Parking Lot", type: "text", name: "registrationCertificate",},
    {id: 10, label: "Things around the parking lot", type: "text", name: "surroundings",},
    {id: 11, label: "Prices", type: "text", name: "prices",},
    {id: 12, label: "Facilities", type: "text", name: "facilities",},
    {id: 13, label: "Special notes", type: "text", name: "specialNotes",},
];

const initialValues = {
    ownerName: '',
    ownerID: '',
    address: '',
    parkingLotName: '',
    parkingLotImage: '',
    outlinePlan: '',
    numSpots: '',
    spotSize: '',
    registrationCertificate: '',
    surroundings: '',
    prices: '',
    facilities: '',
    specialNotes: ''
};

const validationSchema = Yup.object().shape({
    ownerName: Yup.string().required('Owner name is required'),
    ownerID: Yup.string().required('Owner ID is required'),
    address: Yup.string().required('Parking lot address is required'),
    parkingLotName: Yup.string().required('Parking lot name is required'),
    outlinePlan: Yup.string().required('Outline plan is required'),
    numSpots: Yup.number().typeError('Number of spots must be a number').required('Number of spots is required'),
    spotSize: Yup.number().typeError('Size of spots must be a number').required('Size of spots is required'),
    registrationCertificate: Yup.string().required('Registration certificate is required'),
    surroundings: Yup.string().required('Surroundings description is required'),
    prices: Yup.string().required('Prices information is required'),
    facilities: Yup.string().required('Facilities information is required'),
    specialNotes: Yup.string()
});

export default function RegisterCarPark() {
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        alert(JSON.stringify(values, null, 2));
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
