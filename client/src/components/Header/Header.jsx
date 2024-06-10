import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../utils/auth';
import './Header.css';
import { Modal } from 'react-bootstrap';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('login');
    const location = useLocation();
    const [theme, setTheme] = useState('fairycore');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const titleSpans = document.querySelectorAll('.animated-char');
        titleSpans.forEach(span => {
            span.classList.remove('start-animation');
            void span.offsetWidth; // Trigger reflow to restart animation
            span.classList.add('start-animation');
        });
    }, [location]);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const title = "MythWeaver";
    const titleAnimated = title.split("").map((char, index) => (
        <span key={index} className="animated-char">{char}</span>
    ));

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
                <h1 className="title">
                    <Link to='/myth-index' className="cssanimation leBlurIn sequence">{titleAnimated}</Link>
                </h1>
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
                centered className='modal'>
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
