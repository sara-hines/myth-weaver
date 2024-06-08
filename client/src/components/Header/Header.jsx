import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './Header.css';
import { Modal } from 'react-bootstrap';

const Header = () => {
    // State to control the visibility of the modal
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login'); // To toggle between login and signup
    const location = useLocation();
    const [theme, setTheme] = useState('fairycore'); // Initial theme state
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        // Apply theme logic here
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    {Auth.loggedIn() ? (
                        <>
                            <button className="header-button" onClick={Auth.logout}>Log out</button>
                            <a href="/user-profile" className="header-link">
                                <button className="header-button">Profile</button>
                            </a>
                        </>
                    ) : (
                        <>
                            <button className="header-button" onClick={() => { setModalType('login'); setShowModal(true); }}>Log in</button>
                            <button className="header-button" onClick={() => { setModalType('signup'); setShowModal(true); }}>Sign Up</button>
                        </>
                    )}
                </div>
                <h1 className="title"><Link to='/myth-index'>MythWeaver</Link></h1>
                <div className="header-right">
                    {location.pathname === '/myth-index' && (
                        <>
                            <Link to="/about-us" className="header-link">
                                <button className="header-button">About Us</button>
                            </Link>
                            <button className="header-button">Donate</button>
                        </>
                    )}
                    {location.pathname === '/user-profile' && (
                        <Link to="/myth-index" className="header-link">
                            <button className="header-button">Stories</button>
                        </Link>
                    )}
                </div>
            </header>
            <div className="dropdown-container">
                <div className="dropdown">
                    <button className="theme-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        Change Theme
                    </button>
                    {dropdownOpen && (
                        <div className="dropdown-content">
                            <button onClick={() => handleThemeChange('fairycore')}>Fairycore</button>
                            <button onClick={() => handleThemeChange('cyberpunk')}>Cyberpunk</button>
                            <button onClick={() => handleThemeChange('fantasy')}>Fantasy</button>
                        </div>
                    )}
                </div>
            </div>
            <Modal
                size='xl'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='auth-modal'
                centered>
                <Modal.Header closeButton className="modal-header-center">
                    <Modal.Title id='auth-modal' className="modal-title-lg">
                        {modalType === 'login' ? 'Login' : 'Sign Up'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body-lg">
                    {modalType === 'login' ? (
                        <LoginForm handleModalClose={() => setShowModal(false)} />
                    ) : (
                        <SignupForm handleModalClose={() => setShowModal(false)} />
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;