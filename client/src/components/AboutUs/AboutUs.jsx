import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">           
            <main className="about-us-main">
                <div className="about-us-card">
                    <h2 className="about-us-title">Our Story</h2>
                    <p className="about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum accumsan erat, nec porta justo posuere sit amet. Sed ut tortor vel ipsum mollis volutpat.</p>
                </div>
                <div className="about-us-card">
                    <h2 className="about-us-title">Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="team-member-info">
                                <img src="https://picsum.photos/200/200" alt="Person 1" className="team-member-img" />
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Person 1</h3>
                                    <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Person 2</h3>
                                    <p className="team-member-description">Sara Hines has a background in Ecosystem Science and Sustainability and a passion for problem solving. She loves the feeling of co-creating an exciting project on a great team and getting it out into the world. She has an interest in language and expression that extends beyond code into music, art, cooking, and other mediums. </p>
                                </div>
                                <img src="/images/sara-bio-photo.png" alt="Sara Hines" className="team-member-img" />
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <img src="https://picsum.photos/200/200" alt="Person 3" className="team-member-img" />
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Person 3</h3>
                                    <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Person 4</h3>
                                    <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <img src="https://picsum.photos/200/200" alt="Person 4" className="team-member-img" />
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <img src="https://picsum.photos/200/200" alt="Person 5" className="team-member-img" />
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Person 5</h3>
                                    <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-us-card">
                    <h2 className="about-us-title">Contact Us</h2>
                    <p className="about-us-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum accumsan erat, nec porta justo posuere sit amet. Sed ut tortor vel ipsum mollis volutpat.</p>
                    
                    {/* Contact Form */}
                    <form action="/submit-form" method="POST">
                      <label htmlFor="username">Username:</label><br />
                      <input type="text" id="username" name="username" required /><br /><br />
                      
                      <label htmlFor="email">Email:</label><br />
                      <input type="email" id="email" name="email" required /><br /><br />
                      
                      <label htmlFor="message">Message:</label><br />
                      <textarea id="message" name="message" rows="4" cols="50" required></textarea><br /><br />
                      
                      <label htmlFor="type">Type of Message:</label><br />
                      <select id="type" name="type" required>
                        <option value="" disabled selected>Select type</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Question">Question</option>
                        <option value="Feedback">Feedback</option>
                        {/* Add more options as needed */}
                      </select><br /><br />
                      
                      <input type="submit" value="Submit" />
                    </form>
                    {/* End Contact Form */}
                </div>
            </main>
        </div>
    );
}

export default AboutUs;
