import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './Header.css';
import { Modal } from 'react-bootstrap';

const Header = () => {
  // State for managing the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  // State for determining the type of modal(login or signup)
  const [modalType, setModalType] = useState('login');
  // Get the current location object from react-router
  const location = useLocation();
  // State for managing the styling theme
  const [theme, setTheme] = useState('fairycore');
  // State for managing the theme dropdown menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // useEffect to trigger animations on location change
  useEffect(() => {
    const titleSpans = document.querySelectorAll('.animated-char');
    titleSpans.forEach(span => {
      span.classList.remove('start-animation');
      void span.offsetWidth; // Trigger reflow to restart animation
      span.classList.add('start-animation');
    });
  }, [location]);

  // Function to handle styling theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Animated site title
  const title = 'MythWeaver';
  const titleAnimated = title.split('').map((char, index) => (
    <span key={index} className='animated-char'>{char}</span>
  ));

  return (
    <>
      <header className='header'>
        <div className='header-left'>
          {/* If the user is logged in, the links on the left of the header will be a Logout link/button and a Profile link. */}
          {Auth.loggedIn() ? (
            <>
              <button className='header-button' onClick={Auth.logout}>Log out</button>
              <a href='/user-profile' className='header-link'>
                <button className='header-button'>Profile</button>
              </a>
            </>
            // If the user is logged out, the links on the left of the header will be a Login link/button and a Signup link/button which each open their respective modals.
          ) : (
            <>
              <button className='header-button' onClick={() => { setModalType('login'); setShowModal(true); }}>Log in</button>
              <button className='header-button' onClick={() => { setModalType('signup'); setShowModal(true); }}>Sign Up</button>
            </>
          )}
        </div>
        <h1 className='title'>
          <Link to='/myth-index' className='cssanimation leBlurIn sequence'>{titleAnimated}</Link>
        </h1>
        <div className='header-right'>
          {/* When the user is at /myth-index, the links on the right of the header will be an About Us link and a Contact Us link. */}
          {location.pathname === '/myth-index' && (
            <>
              <Link to='/about-us' className='header-link'>
                <button className='header-button'>About Us</button>
              </Link>
              <Link to='/about-us#contact-us-section' className='header-link'>
                <button className='header-button'>Contact Us</button>
              </Link>
            </>
          )}
          {/* When the user is at /user-profile, the link on the right of the header will be Stories, navigating to /myth-index. */}
          {location.pathname === '/user-profile' && (
            <Link to='/myth-index' className='header-link'>
              <button className='header-button'>Stories</button>
            </Link>
          )}
        </div>
      </header>

      {/* Dropdown menu to change the styling theme */}
      <div className='dropdown-container'>
        <div className='dropdown'>
          <button className='theme-button' onClick={() => setDropdownOpen(!dropdownOpen)}>
            Change Theme
          </button>
          {dropdownOpen && (
            <div className='dropdown-content'>
              <button onClick={() => handleThemeChange('fairycore')}>Fairycore</button>
              <button onClick={() => handleThemeChange('cyberpunk')}>Cyberpunk</button>
              <button onClick={() => handleThemeChange('fantasy')}>Fantasy</button>
            </div>
          )}
        </div>
      </div>


      <Modal
        size='xl'
        // Show the modal based on showModal state
        show={showModal}
        // Function to close the modal
        onHide={() => setShowModal(false)}
        aria-labelledby='auth-modal'
        centered className='auth-modal'>
        <Modal.Header closeButton className='modal-header-center'>
          <Modal.Title id='auth-modal' className='modal-title-lg'>
            {modalType === 'login' ? 'Login' : 'Sign Up'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body-lg'>
          {modalType === 'login' ? (
            // If the modalType === 'login', pass setShowModal(false) as a prop to the LoginForm component so it can use it to close the modal on successful login.
            <LoginForm handleModalClose={() => setShowModal(false)} />
          ) : (
            // If the modalType === 'signup', pass setShowModal(false) as a prop to the SignupForm component so it can use it to close the modal on successful signup.
            <SignupForm handleModalClose={() => setShowModal(false)} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Header;
