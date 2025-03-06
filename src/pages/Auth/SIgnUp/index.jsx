import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate, useParams} from "react-router-dom";
import {ROUTES} from "../../../routes/routes";
import server from "../../../config/apis/server";

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    userType: Yup.string().oneOf(['owner', 'user', 'admin']).required('Required')
});

const userInputFields = [
    {id: "email", text: "Email", type: "email"},
    {
        id: "userType",
        text: "User Type",
        type: "dropdown",
        options: [
            {value: "", label: "Please select an option", disabled: true},
            {value: "owner", label: "Car Park Owner"},
            {value: "user", label: "Car Park User"},
            {value: "admin", label: "Admin"},
            {value: "owner", label: "Car Park Owner"},
        ],
    },
];

export default function SignUp() {
    const {email} = useParams();
    const navigate = useNavigate();
    const handleSubmit = (values) => {
        console.log(values);

        async function owner_register() {
            await server.post("/auth/sign-up",
                {
                    email: email,
                    type: values.userType
                })
                .then((res) => {
                    // alert(res.data)
                    console.log("result : ", res.data);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', res.data.type);
                    const type = localStorage.getItem('user');

                    if (type === "owner") {
                        navigate(ROUTES.carParkOwnerDashboardDashboard);
                    } else if (type === "user") {
                        navigate(ROUTES.carParkUserDashboard);
                    } else if (type === "admin") {
                        navigate(ROUTES.adminDashboard);
                    }
                })
                // Catch errors if any
                .catch((err) => {
                    alert(err)
                })
        }
        owner_register().then(r => console.log("Registered"));
    };

    return (
        <div className="flex justify-center items-center bg-client-home bg-cover bg-center h-screen">
            <div className="bg-dark-gray w-96 p-4 rounded-lg">
                <div className="flex justify-center">
                    <h1 className="text-xl font-bold">Sign Up</h1>
                </div>
                <hr className="my-5"/>
                <Formik
                    initialValues={{
                        email: email,
                        userType: "carParkUser",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className="flex flex-col">
                                {userInputFields.map((credential) => (
                                    <div key={credential.id}>
                                        <label
                                            htmlFor={credential.id}
                                        >
                                            {credential.text}
                                        </label>
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
                                    title="Sign Up"
                                >
                                    Sign Up
                                </button>
                            </div>
                            <Link to={ROUTES.userSignIn} className="flex justify-center">
                                <h3 className="mt-4">Already have an Account? Please Sign In</h3>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
