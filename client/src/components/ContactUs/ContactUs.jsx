import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
// CSS files: ContactUs.jsx relies on some styles from its parent, located in AboutUs.css, as well as some of its own styles in ContactUs.css, and the green check animation in ContactUs.scss.
import '../AboutUs/AboutUs.css';
import './ContactUs.css';
import './ContactUs.scss';

export default function ContactUs() {
  // Initialize useForm hook for managing form state and validation
  const {
    register,
    handleSubmit,
    reset,
    // Form state variables provided and managed by react-hook-form
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    // Validation mode for when to trigger validation
    mode: 'onTouched',
  });

  // isSuccess is a custom state variable which allows customized behavior in addition to the functionality provided by react-hook-form's isSubmitSuccessful variable.
  const [isSuccess, setIsSuccess] = useState(false);
  // State for the message to display (a success or error message)
  const [message, setMessage] = useState(null);
  // State to control visibility of message
  const [showMessage, setShowMessage] = useState(false);
  // API key for Web3Forms, fetched from the backend
  const [apiKey, setApiKey] = useState('');

  // useWeb3Forms hook for handling form submission to Web3Forms service
  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: 'MythWeaver',
      subject: 'New Contact Message from MythWeaver',
    },
    // onSuccess callback function for when form submission is successful
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      setShowMessage(true);
      reset();
      setTimeout(() => {
        setShowMessage(false);
      }, 4000); // Start fading out after 4 seconds
    },
    // onError callback function for when form submission encounters an error
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 4000); // Start fading out after 4 seconds
    },
  });

  useEffect(() => {
    fetchApiKey();
  }, []);

  const fetchApiKey = async () => {
    try {
      const response = await axios.get('/api/contact-us');
      setApiKey(response.data.apiKey);
    } catch (error) {
      console.error('Failed to fetch API key:', error);
      throw new Error('Request could not be completed; failed to fetch API key for form submission.');
    }
  };

  // useEffect to manage visibility of success/error message
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000); // Remove message after 5 seconds
      // Cleanup function which will run when the component unmounts or showMessage changes
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    /* Contact Us section including Contact Form */
    <div className='about-us-card' id='contact-us-section'>
      <h2 className='about-us-title'>Contact Us</h2>
      <p className='about-us-description'>Welcome to MythWeaver! We are thrilled to have you explore our platform, and we value your feedback and ideas. At MythWeaver, our mission is to create a community where stories and creativity flourish. Whether you have a question, a suggestion, or simply want to share your thoughts, we’re here to listen.</p>

      {/* Contact Form */}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* Registering botcheck input field */}
        <input
          type='checkbox'
          id=''
          className='hidden'
          style={{ display: 'none' }}
          {...register('botcheck')}>
        </input>

        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username'
          {...register('username', {
            // Validation rules for username field
            required: 'Please provide your username.',
            maxLength: 80,
          })}
        />

        {/* Display error message if username field validation fails */}
        {errors?.username && (
          <div className='contact-field-error'>
            <p>{errors.username.message}</p>
          </div>
        )}

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email'
          {...register('email', {
            // Validation rules for email field
            required: 'Please provide your email.',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email.',
            },
          })}
        />

        {/* Display error message if email field validation fails */}
        {errors?.email && (
          <div className='contact-field-error'>
            <p>{errors.email.message}</p>
          </div>
        )}

        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' rows='3' cols='50'
          {...register('message', {
            // Validation rule for message field
            required: 'Please provide your message.',
          })}>
        </textarea>

        {/* Display error message if message field validation fails */}
        {errors?.message && (
          <div className='contact-field-error'>
            <p>{errors.message.message}</p>
          </div>
        )}

        <label htmlFor='type'>Type of Message:</label>
        <select id='type' name='type' defaultValue=''
          {...register('type', {
            // Validation rule for type field
            required: 'Please select a message type.'
          })}
        >
          <option value='' disabled>Select type</option>
          <option value='Bug Report'>Bug Report</option>
          <option value='Question'>Question</option>
          <option value='Feedback'>Feedback</option>
        </select>

        {/* Display error message if type field validation fails */}
        {errors.type && (
          <div className='type-field-error'>
            <p>{errors.type.message}</p>
          </div>
        )}

        {/* If the form submission was successful per react-hook-form's isSubmitSuccessful and our custom isSuccess variable, display the green check animation and success message. */}
        {isSubmitSuccessful && isSuccess && (
          <div className={`success-container ${!showMessage ? 'fade-out' : ''}`}>

            <div className='success-icon'>
              <div className='success-icon__tip'></div>
              <div className='success-icon__long'></div>
            </div>

            <p className='success-message'>{message || 'Success! Message sent.'}</p>

          </div>
        )}

        {/* If the form submission resulted in an error in either of the relevant state variables, then display the error message. (This will also display by default on page load to help keep form spacing consistent). */}
        {(!isSubmitSuccessful || !isSuccess) && (
          <div className={`error-message ${!showMessage ? 'fade-out' : ''}`}>
            {message || 'Sorry, something went wrong. Please try later.'}
          </div>
        )}

        {/* The submit button's text changes from 'Send Message' to 'Submission in progress' when submission is happening. */}
        <button type='submit' value='Submit' id='contact-form-btn'>
          {isSubmitting ? (
            'Submission in progress'
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div >
  );
}