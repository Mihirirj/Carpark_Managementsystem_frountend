import TopTitleBar from "../../../TopTitleBar";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useNavigation, useParams} from "react-router-dom";
import server from "../../../../config/apis/server";
import {useEffect, useState} from "react";
import {ROUTES} from "../../../../routes/routes";

const formFields = [
    {id: 1, label: "Address", type: "text", name: "address"},
    {id: 2, label: "Latitude", type: "text", name: "latitude"},
    {id: 3, label: "Longitude", type: "text", name: "longitude"},
    {id: 4, label: "Name of the Park", type: "text", name: "name"},
    {id: 5, label: "Image URL", type: "text", name: "parkingLotImage"},
    {id: 7, label: "Number of Spots", type: "number", name: "numSpots"},
    {id: 8, label: "Spot Size", type: "text", name: "spotSize"},
    {id: 11, label: "Price", type: "number", name: "price"},
    {id: 12, label: "Facilities", type: "text", name: "facilities"},
    {id: 13, label: "Special notes", type: "text", name: "specialNotes"},
    {id: 14, label: "Registration Certificate No", type: "text", name: "certificateNo"}
];

export default function ViewCarParkRegistration() {
    const {id} = useParams();
    const [ownersList, setOwnersList] = useState([]);
    const [selectedPark, setSelectedPark] = useState(null);
    const [initialValues, setInitialValues] = useState(null);
    const navigate= useNavigate();

    const handleSubmit = (values, {setSubmitting, resetForm}) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();

        server
            .put("admin/confirm_park/" + id,)
            .then((res) => {
                console.log(res);
                if(res.status === 200){
                    alert("Park successfully confirmed");
                    navigate(ROUTES.adminDashboardHome);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const filterParkById = (id) => {
        if (ownersList.length > 0) {
            const filteredPark = ownersList.find((park) => park.park.park_id == id.toString());
            console.log(filteredPark);
            setSelectedPark(filteredPark);
        }
    };

    const handleReject = () => {
        server
            .put("admin/reject_park/" + id,)
            .then((res) => {
                console.log(res);
                if(res.status === 200){
                    alert("Park successfully rejected");
                    navigate(ROUTES.adminDashboardHome);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getCarParks = () => {
        server
            .get("/admin/get_all_parks", {
                headers: {"token": localStorage.getItem("token")}
            })
            .then((res) => {
                console.log(res.data);
                setOwnersList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCarParks();
    }, []);

    useEffect(() => {
        filterParkById(id);
    }, [id, ownersList]);

    useEffect(() => {
        if (selectedPark && Object.keys(selectedPark).length > 0 && selectedPark.park) {
            const updatedInitialValues = {
                address: selectedPark.park.address || "",
                name: selectedPark.park.name || "Name Akila",
                certificateNo: selectedPark.park.certificateNo || "",
                parkingLotImage: selectedPark.park
                    .parkingLotImage || "",
                latitude: selectedPark.park.latitude || "",
                longitude: selectedPark.park.longitude || "",
                numSpots: selectedPark.park.numSpots || "",
                spotSize: selectedPark.park.spotSize || "",
                price: selectedPark.park.price || "",
                facilities: selectedPark.park.facilities || "",
                specialNotes: selectedPark.park.specialNotes || ""
            };

            setInitialValues(updatedInitialValues);
        }
    }, [selectedPark]);

    if (!initialValues) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TopTitleBar title={'Request'}/>
            <div className="bg-white rounded-xl mx-5 px-8 py-4">
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
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
                                    <button type="button" title="Submit" disabled={isSubmitting}
                                            onClick={() => handleReject()}
                                            className="basis-1/3 bg-orange-400 px-4 py-2 rounded-lg">
                                        Reject
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