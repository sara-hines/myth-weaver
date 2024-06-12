import React, { useState } from 'react';
import './AboutUs.css';
import emailjs from '@emailjs/browser';

function AboutUs() {

  const [successMessage, setSuccessMessage] = useState('');
  const handleSetSuccessMessage = () => setSuccessMessage('Thank you! Your response has been received.');

  return (
    <div className='about-us-container'>
      <main className='about-us-main'>
        <div className='about-us-card'>
          <h2 className='about-us-title'>Our Story</h2>
          <p className='about-us-description'>Welcome to MythWeaver, a platform born from creativity and a passion for innovation!

            Our journey began at the University of Denver, where a group of like-minded individuals came together during a coding bootcamp. United by our love for storytelling, technology, and continuous learning, we embarked on a mission to create something truly unique.

            At MythWeaver, we believe in the power of creativity and collaboration. Our diverse backgrounds and shared enthusiasm for discovering new ways to learn have shaped the foundation of our platform. We are committed to providing a space where imagination knows no bounds and where stories can come to life.

            From brainstorming sessions filled with wild ideas to the meticulous process of coding and designing, every step of our journey has been driven by our collective passion. We aim to inspire and be inspired, to learn and grow alongside our community.

            Thank you for joining us on this adventure. Together, we can weave the myths and stories that will shape the future.

            Best regards,
            The MythWeaver Team</p>
        </div>
        <div className='about-us-card'>
          <h2 className='about-us-title'>Our Team</h2>
          <div className='team-grid'>
            <div className='team-member'>
              <div className='team-member-info'>
                <img src='/images/morgan-bio-photo.png' alt='Morgan Carmichael' className='team-member-img' />
                <div className='team-member-text'>
                  <h3 className='team-member-name'>Morgan Carmichael</h3>
                  <p className='team-member-description'>With a lifelong love for reading, Morgan finds inspiration in the countless worlds discovered between the pages of a book. This passion naturally extends to writing, where she hopes to craft immersive narratives that captivate and engage the audience. As a seasoned video game enthusiast, Morgan also brings a unique perspective to interactive storytelling, blending intricate plotlines with engaging gameplay to create unforgettable experiences. When she's not immersed in the digital world, Morgan finds joy in the company of horses—especially her own, an 11-year-old American Paint Horse named Lola. The grace and strength of these magnificent animals are an endless source of inspiration and serenity, both of which reflect on her work and personal life.</p>
                </div>
              </div>
            </div>
            <div className='team-member'>
              <div className='team-member-info'>
                <div className='team-member-text'>
                  <h3 className='team-member-name'>Sara Hines</h3>
                  <p className='team-member-description'>Sara Hines has a background in Ecosystem Science and Sustainability and a passion for problem solving. She enjoys playing in the balance between imagination—envisioning what a project could look like—and methodical rigor—working from questions to 'hypotheses' to successfully coded solutions. When collaborating with other coders, she loves the feeling of being in sync, finishing each other's sentences, and helping with each other's stuck-points. She has an interest in language and expression that extends beyond code into music, art, cooking, and other mediums. </p>
                </div>
                <img src='/images/sara-bio-photo.png' alt='Sara Hines' className='team-member-img' />
              </div>
            </div>
            <div className='team-member'>
              <div className='team-member-info'>
                <img src='/images/haleigh-bio-photo.jpg' alt='Haleigh Elkins' className='team-member-img' />
                <div className='team-member-text'>
                  <h3 className='team-member-name'>Haleigh Elkins</h3>
                  <p className='team-member-description'>Haleigh brings a unique blend of business management expertise and a passion for computer science to the table. With a strong background in both fields, Haleigh excels in problem-solving and thrives in collaborative environments. An avid lover of the outdoors who also enjoys the comforts of home, Haleigh balances these interests with a keen desire to expand knowledge in cyber security. Dedicated and versatile, Haleigh continually seeks to enhance skills and contribute meaningfully to every project undertaken.</p>
                </div>
              </div>
            </div>
            <div className='team-member'>
              <div className='team-member-info'>
                <img src='/images/rebeca-bio-photo.jpg' alt='Rebeca Thornburg' className='team-member-img' />
                <div className='team-member-text'>
                  <h3 className='team-member-name'>Rebeca Thornburg</h3>
                  <p className='team-member-description'>Rebeca a passion for computer science and works as a GIS specialist. She thrives in creating new solutions and collaborative projects. As an avid history buff and outdoor enthusiast, she's always seeking out adventure whether through reading or travel. Her love of reading and travel have caused her to learn several languages, which has helped find new creative outlets.</p>
                </div>
              </div>
            </div>
            <div className='team-member'>
              <div className='team-member-info'>
                <img src='/images/austin-bio-photo.png' alt='Austin Allen' className='team-member-img' />
                <div className='team-member-text'>
                  <h3 className='team-member-name'>Austin Allen</h3>
                  <p className='team-member-description'>Austin Allen is an emerging full-stack developer currently completing an intensive coding bootcamp. With a robust background in software development, Austin specializes in creating dynamic, user-centric applications using the MERN stack—comprising MongoDB, Express.js, React, and Node.js. His expertise extends to GraphQL, JWT authentication, and deployment on Heroku, reflecting a comprehensive skill set ideal for modern web development. Beyond his technical acumen, Austin has a passion for electronic music production, drawing inspiration from artists like Elif Musique and Mind Against. This creative pursuit enhances his innovative approach to problem-solving and design, bringing a unique perspective to his development projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-us-card'>
          <h2 className='about-us-title'>Contact Us</h2>
          <p className='about-us-description'>Welcome to MythWeaver! We are thrilled to have you explore our platform, and we value your feedback and ideas.

            At MythWeaver, our mission is to create a community where stories and creativity flourish. Whether you have a question, a suggestion, or simply want to share your thoughts, we’re here to listen.</p>

          {/* Contact Form */}
          <form action='/submit-form' method='POST'>
            <label htmlFor='username'>Username:</label><br />
            <input type='text' id='username' name='username' required /><br /><br />

            <label htmlFor='email'>Email:</label><br />
            <input type='email' id='email' name='email' required /><br /><br />

            <label htmlFor='message'>Message:</label><br />
            <textarea id='message' name='message' rows='4' cols='50' required></textarea><br /><br />

            <label htmlFor='type'>Type of Message:</label><br />
            <select id='type' name='type' required>
              <option value='' disabled selected>Select type</option>
              <option value='Bug Report'>Bug Report</option>
              <option value='Question'>Question</option>
              <option value='Feedback'>Feedback</option>
            </select><br /><br />

            {successMessage && (
              <div className='success-message'>
                {successMessage}
              </div>
            )}

            <input type='submit' value='Submit' onClick={handleSetSuccessMessage} />
          </form>
          {/* End Contact Form */}
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
