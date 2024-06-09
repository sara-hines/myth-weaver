import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import UploadImage from '../UploadImage/UploadImage';


const LoginForm = ({ handleModalClose }) => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [touched, setTouched] = useState({ email: false, password: false });
    const [login] = useMutation(LOGIN_USER);

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

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await login({
                variables: {
                    ...userFormData
                }
            });

            const { token } = data.login;
            Auth.login(token);
            handleModalClose();
        } catch (err) {
            console.error('Login error:', err);
            if (err.graphQLErrors) {
                err.graphQLErrors.forEach(({ message }) => console.error('GraphQL error:', message));
            }
            if (err.networkError) {
                console.error('Network error:', err.networkError.message);
            }
            setAlertMessage(err.message || 'Something went wrong with your login credentials!');
            setShowAlert(true);
        }

        setUserFormData({
            email: '',
            password: '',
        });
        setTouched({
            email: false,
            password: false,
        });
    };

    return (
        <>
            <Form noValidate onSubmit={handleFormSubmit}>
                {showAlert && (
                    <Alert show={showAlert} variant='danger'>
                        {alertMessage}
                    </Alert>
                )}

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Your email'
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
                    disabled={!(userFormData.email && userFormData.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default LoginForm;
