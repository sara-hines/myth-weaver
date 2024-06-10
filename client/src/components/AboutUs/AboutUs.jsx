import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">           
            <main className="about-us-main">
                <div className="about-us-card">
                    <h2 className="about-us-title">Our Story</h2>
                    <p className="about-us-description">Welcome to MythWeaver, a platform born from creativity and a passion for innovation!

Our journey began at the University of Denver, where a group of like-minded individuals came together during a coding bootcamp. United by our love for storytelling, technology, and continuous learning, we embarked on a mission to create something truly unique.

At MythWeaver, we believe in the power of creativity and collaboration. Our diverse backgrounds and shared enthusiasm for discovering new ways to learn have shaped the foundation of our platform. We are committed to providing a space where imagination knows no bounds and where stories can come to life.

From brainstorming sessions filled with wild ideas to the meticulous process of coding and designing, every step of our journey has been driven by our collective passion. We aim to inspire and be inspired, to learn and grow alongside our community.

Thank you for joining us on this adventure. Together, we can weave the myths and stories that will shape the future.

Best regards,
The MythWeaver Team</p>
                </div>
                <div className="about-us-card">
                    <h2 className="about-us-title">Our Team</h2>
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="team-member-info">
                                <img src="/images/morgan-bio-photo.png" alt="Morgan Carmichael" className="team-member-img" />
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Morgan Carmichael</h3>
                                    <p className="team-member-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Sara Hines</h3>
                                    <p className="team-member-description">Sara Hines has a background in Ecosystem Science and Sustainability and a passion for problem solving. She loves the feeling of co-creating an exciting project on a great team and getting it out into the world. She has an interest in language and expression that extends beyond code into music, art, cooking, and other mediums. </p>
                                </div>
                                <img src="/images/sara-bio-photo.png" alt="Sara Hines" className="team-member-img" />
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-member-info">
                                <img src='/images/haleigh-bio-photo.jpg' alt="Haleigh Elkins" className="team-member-img" />
                                <div className="team-member-text">
                                    <h3 className="team-member-name">Haleigh Elkins</h3>
                                    <p className="team-member-description">Haleigh brings a unique blend of business management expertise and a passion for computer science to the table. With a strong background in both fields, Haleigh excels in problem-solving and thrives in collaborative environments. An avid lover of the outdoors who also enjoys the comforts of home, Haleigh balances these interests with a keen desire to expand knowledge in cyber security. Dedicated and versatile, Haleigh continually seeks to enhance skills and contribute meaningfully to every project undertaken.</p>
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
                    <p className="about-us-description">Welcome to MythWeaver! We are thrilled to have you explore our platform, and we value your feedback and ideas.

At MythWeaver, our mission is to create a community where stories and creativity flourish. Whether you have a question, a suggestion, or simply want to share your thoughts, we’re here to listen.</p>
                    
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
