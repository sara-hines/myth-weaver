import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginForm = ({ handleModalClose }) => {
  // Initialize state variables for form data, validation, and an alert for faulty credentials. Also set up the login mutation.
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [login] = useMutation(LOGIN_USER);

  // Single handler for the onChange event for all form inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Handler to mark fields as touched when they lose focus
  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check form validity
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Run the login mutation, which will create a token
      const { data } = await login({
        variables: {
          ...userFormData
        }
      });

      const { token } = data.login;
      // Save user token to localStorage
      Auth.login(token);
      handleModalClose(); // Close the modal on successful login
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    // Clear form
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
        {/* Alert for login errors */}
        {showAlert && (
          <Alert show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>
        )}

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            // function to update userFormData with the user's input
            onChange={handleInputChange}
            // handler to mark fields as touched when they loose focus
            onBlur={handleBlur}
            value={userFormData.email}
            required
            // If the user touched the email field without providing an email, isInvalid will be true, triggering the 'Email is required!' message.
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
            // function to update userFormData with the user's input
            onChange={handleInputChange}
            // handler to mark fields as touched when they loose focus
            onBlur={handleBlur}
            value={userFormData.password}
            required
            // If the user touched the password field without providing an email, isInvalid will be true, triggering the 'Password is required!' message.
            isInvalid={touched.password && !userFormData.password}
          />
          {touched.password && !userFormData.password && (
            <Form.Control.Feedback type='invalid' class='invalid-input-message'>Password is required!</Form.Control.Feedback>
          )}
        </Form.Group>

        {/* Submit button will be disabled until the email and password are provided. */}
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
