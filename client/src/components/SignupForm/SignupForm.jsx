// import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// const SignupForm = () => {
//     // Initialize state variables for form data, validation, and an alert for faulty input. Also set up the addUser mutation.
//     const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
//     const [validated] = useState(false);
//     const [showAlert, setShowAlert] = useState(false);
//     const [addUser, { error }] = useMutation(ADD_USER);

//     // Single handler for the onChange event for all form inputs
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setUserFormData({ ...userFormData, [name]: value });
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         // Check form validity
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }

//         try {
//             // Run the addUser mutation, which will add the user and create a token
//             const { data } = await addUser({
//                 variables: {
//                     ...userFormData
//                 }
//             });

//             console.log(data);

//             const { token, user } = data.addUser;
//             // Save user token to localStorage
//             Auth.login(token);
//         } catch (err) {
//             console.error(err);
//             setShowAlert(true);
//         }

//         // Clear form
//         setUserFormData({
//             username: '',
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <>
//             {/* Form with onChange handlers for input elements and an onSubmit handler for form submission. Currently uses react-bootstrap components; we can switch those out but use the same/similar logic. */}
//             <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//                 {/* Show alert if server response is bad */}
//                 <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
//                     Something went wrong with your signup!
//                 </Alert>

//                 <Form.Group className='mb-3'>
//                     <Form.Label htmlFor='username'>Username</Form.Label>
//                     <Form.Control
//                         type='text'
//                         placeholder='Your username'
//                         name='username'
//                         onChange={handleInputChange}
//                         value={userFormData.username}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group className='mb-3'>
//                     <Form.Label htmlFor='email'>Email</Form.Label>
//                     <Form.Control
//                         type='email'
//                         placeholder='Your email address'
//                         name='email'
//                         onChange={handleInputChange}
//                         value={userFormData.email}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
//                 </Form.Group>

//                 <Form.Group className='mb-3'>
//                     <Form.Label htmlFor='password'>Password</Form.Label>
//                     <Form.Control
//                         type='password'
//                         placeholder='Your password'
//                         name='password'
//                         onChange={handleInputChange}
//                         value={userFormData.password}
//                         required
//                     />
//                     <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Button
//                     disabled={!(userFormData.username && userFormData.email && userFormData.password)}
//                     type='submit'
//                     variant='success'>
//                     Submit
//                 </Button>
//             </Form>
//         </>
//     );
// };

// export default SignupForm;


import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignupForm = ({ handleModalClose }) => {
    // Initialize state variables for form data, validation, and an alert for faulty input. Also set up the addUser mutation.
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [touched, setTouched] = useState({ username: false, email: false, password: false });
    const [addUser] = useMutation(ADD_USER);

    // Single handler for the onChange event for all form inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({ ...touched, [name]: true });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check form validity
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            // Run the addUser mutation, which will add the user and create a token
            const { data } = await addUser({
                variables: {
                    ...userFormData
                }
            });

            const { token } = data.addUser;
            // Save user token to localStorage
            Auth.login(token);
            handleModalClose(); // Close the modal on successful signup
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        // Clear form
        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
        setTouched({
            username: false,
            email: false,
            password: false,
        });
    };

    return (
        <>
            <Form noValidate onSubmit={handleFormSubmit}>
                {/* Show alert if server response is bad */}
                {showAlert && (
                    <Alert show={showAlert} variant='danger'>
                        Something went wrong with your signup!
                    </Alert>
                )}

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={userFormData.username}
                        required
                        isInvalid={touched.username && !userFormData.username}
                    />
                    {touched.username && !userFormData.username && (
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Your email address'
                        name='email'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={userFormData.email}
                        required
                        isInvalid={touched.email && !userFormData.email}
                    />
                    {touched.email && !userFormData.email && (
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='password'>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Your password'
                        name='password'
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        value={userFormData.password}
                        required
                        isInvalid={touched.password && !userFormData.password}
                    />
                    {touched.password && !userFormData.password && (
                        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                    )}
                </Form.Group>
                <Button
                    disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default SignupForm;
