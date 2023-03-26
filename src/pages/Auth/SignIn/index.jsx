import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {ROUTES} from "../../../routes/routes";
import {Link, useNavigation} from "react-router-dom";

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
});

const userInputFields = [
    {id: "username", text: "Username", type: "text"},
    {id: "password", text: "Password", type: "password"},
];

const initialValues = {
    username: '',
    password: ''
}

export default function SignIn() {

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <div className="flex justify-center items-center bg-client-home bg-cover bg-center h-screen">
            <div className="bg-dark-gray w-96 p-4 rounded-lg">
                <div className="flex justify-center">
                    <h1 className="text-xl font-bold">Sign In</h1>
                </div>
                <hr className="my-5"/>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({errors, touched}) => (
                        <Form>
                            <div className="flex flex-col gap-y-4">
                                {userInputFields.map((credential) => (
                                    <div key={credential.id}>
                                        <label className="text-white" htmlFor={credential.id}>{credential.text}</label>
                                        <Field id={credential.id} type={credential.type} name={credential.id}
                                               className={`w-full rounded-lg p-2 mt-2 ${errors[credential.id] && touched[credential.id] ? 'border-red-500' : ''}`}/>
                                        <ErrorMessage name={credential.id} component="div" className="text-red-500"/>
                                    </div>
                                ))}
                            </div>
                            <h3 className="mt-4">Forgot Password?</h3>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-green-500 text-white rounded-lg px-4 py-2 mt-4 w-96"
                                        title="Sign In">Sign In
                                </button>
                            </div>
                            <Link to={ROUTES.userSignUp} className="flex justify-center">
                                <h3 className="mt-4">Don't have an Account? Please Sign Up</h3>
                            </Link>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
