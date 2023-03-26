import TopTitleBar from "../../../TopTitleBar";
import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useParams} from "react-router-dom";

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

const initialValues = owners.map(owner => ({
    ownerName: owner.name,
    ownerID: `ID${owner.id}`,
    address: `${owner.name.split(' ')[0]}'s Parking Lot, ${owner.id} Main St.`,
    parkingLotName: `${owner.name.split(' ')[0]}'s Parking Lot`,
    parkingLotImage: '',
    outlinePlan: `https://example.com/${owner.name.toLowerCase().replace(' ', '_')}/outline_plan.pdf`,
    numSpots: owner.requestsCount * 10,
    spotSize: 'Compact',
    registrationCertificate: `https://example.com/${owner.name.toLowerCase().replace(' ', '_')}/registration_certificate.pdf`,
    surroundings: 'Near a shopping mall',
    prices: `Hourly: Rs. ${owner.requestsCount * 100}, Daily: Rs. ${owner.requestsCount * 200}`,
    facilities: 'Restroom, CCTV cameras, EV charging stations',
    specialNotes: 'No overnight parking allowed'
}));


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

export default function ViewCarParkRegistration() {
    const {id} = useParams();
    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
    };

    return (
        <div>
            <TopTitleBar title={`Registration Requests - ${initialValues.ownerName}`}/>
            <div className="bg-white rounded-xl mx-5 px-8 py-4">
                <Formik
                    initialValues={initialValues[id]}
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
                                                disabled={true}
                                                className="border-solid border border-dark-gray rounded-lg px-2 mt-1"
                                            />
                                            <ErrorMessage name={field.name} component="div" className="text-red-500"/>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex mt-2 py-3 gap-x-4 rounded-lg justify-between font-bold text-white">
                                    <button type="submit" title="Submit" disabled={isSubmitting}
                                            className="basis-1/3 bg-green-500 px-4 py-2 rounded-lg">
                                        Approve
                                    </button>
                                    <button type="submit" title="Submit" disabled={isSubmitting}
                                            className="basis-1/3 bg-orange-400 px-4 py-2 rounded-lg">
                                        Reject
                                    </button>
                                    <button type="submit" title="Submit" disabled={isSubmitting}
                                            className="basis-1/3 bg-red-700 px-4 py-2 rounded-lg">
                                        Delete
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
