import React, { useEffect } from 'react';
import './AboutUs.css';
import { useLocation } from 'react-router-dom';
import ContactUs from '../ContactUs/ContactUs';

function AboutUs() {
  const location = useLocation();

  // This useEffect hook provides the functionality to navigate to the Contact Us div on the About Us page by clicking the Contact Us link in the header. 
  useEffect(() => {
    // If the user clicked the Contact Us link in the header, their location will be /about-us#contact-us-section
    if (location.hash === '#contact-us-section') {
      document.getElementById('contact-us-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  // Array of team member objects
  const teamMembers = [
    {
      teamMemberImg: "/images/morgan-bio-photo.png",
      teamMemberName: "Morgan Carmichael",
      teamMemberDescription: "With a lifelong love for reading, Morgan finds inspiration in the countless worlds discovered between the pages of a book. This passion naturally extends to writing, where she hopes to craft immersive narratives that captivate and engage the audience. As a seasoned video game enthusiast, Morgan also brings a unique perspective to interactive storytelling, blending intricate plotlines with engaging gameplay to create unforgettable experiences. When she's not immersed in the digital world, Morgan finds joy in the company of horses—especially her own, an 11-year-old American Paint Horse named Lola. The grace and strength of these magnificent animals are an endless source of inspiration and serenity, both of which reflect on her work and personal life."
    },
    {
      teamMemberImg: "/images/sara-bio-photo.png",
      teamMemberName: "Sara Hines",
      teamMemberDescription: "Sara Hines has a background in Ecosystem Science and Sustainability and a passion for problem solving. She enjoys playing in the balance between imagination—envisioning what a project could look like—and methodical rigor—working from questions to 'hypotheses' to successfully coded solutions. When collaborating with other coders, she loves the feeling of being in sync, finishing each other's sentences, and helping with each other's stuck-points. She has an interest in language and expression that extends beyond code into music, art, cooking, and other mediums."
    },
    {
      teamMemberImg: "/images/haleigh-bio-photo.jpg",
      teamMemberName: "Haleigh Elkins",
      teamMemberDescription: "Haleigh brings a unique blend of business management expertise and a passion for computer science to the table. With a strong background in both fields, Haleigh excels in problem-solving and thrives in collaborative environments. An avid lover of the outdoors who also enjoys the comforts of home, Haleigh balances these interests with a keen desire to expand knowledge in cyber security. Dedicated and versatile, Haleigh continually seeks to enhance skills and contribute meaningfully to every project undertaken."
    },
    {
      teamMemberImg: "/images/rebeca-bio-photo.jpg",
      teamMemberName: "Rebeca Thornburg",
      teamMemberDescription: "Rebeca a passion for computer science and works as a GIS specialist. She thrives in creating new solutions and collaborative projects. As an avid history buff and outdoor enthusiast, she's always seeking out adventure whether through reading or travel. Her love of reading and travel have caused her to learn several languages, which has helped find new creative outlets."
    },
    {
      teamMemberImg: "/images/austin-bio-photo.png",
      teamMemberName: "Austin Allen",
      teamMemberDescription: "Austin Allen is an emerging full-stack developer currently completing an intensive coding bootcamp. With a robust background in software development, Austin specializes in creating dynamic, user-centric applications using the MERN stack—comprising MongoDB, Express.js, React, and Node.js. His expertise extends to GraphQL, JWT authentication, and deployment on Heroku, reflecting a comprehensive skill set ideal for modern web development. Beyond his technical acumen, Austin has a passion for electronic music production, drawing inspiration from artists like Elif Musique and Mind Against. This creative pursuit enhances his innovative approach to problem-solving and design, bringing a unique perspective to his development projects."
    }
  ];

  return (

    <section className='about-us-container'>
      <div className='about-us-main'>

        {/* Mission statement and description of the site */}
        <div className='about-us-card our-story-card'>
          <h2 className='about-us-title'>Our Story</h2>
          <p className='about-us-description'>Welcome to MythWeaver, a platform born from creativity and a passion for innovation! Our journey began at the University of Denver, where a group of like-minded individuals came together during a coding bootcamp. United by our love for storytelling, technology, and continuous learning, we embarked on a mission to create something truly unique.</p>
          <p className='about-us-description'>At MythWeaver, we believe in the power of creativity and collaboration. Our diverse backgrounds and shared enthusiasm for discovering new ways to learn have shaped the foundation of our platform. We are committed to providing a space where imagination knows no bounds and where stories can come to life. </p>
          <p className='about-us-description'>From brainstorming sessions filled with wild ideas to the meticulous process of coding and designing, every step of our journey has been driven by our collective passion. We aim to inspire and be inspired, to learn and grow alongside our community. Thank you for joining us on this adventure!</p>
          <p className='about-us-description'>~ The MythWeaver Team</p>
        </div>

        {/* Team member photos and bios */}
        <div className='about-us-card'>
          <h2 className='about-us-title'>Our Team</h2>
          <div className='team-grid'>
            {/* Map through the teamMembers array to render each team member's info in its own div.team-member */}
            {teamMembers.map((teamMember, index) => (
              <div key={index} className='team-member'>
                <div className='team-member-info'>
                  <img src={teamMember.teamMemberImg} alt={teamMember.teamMemberName} className='team-member-img' />
                  <h3 className='team-member-name'>{teamMember.teamMemberName}</h3>
                  <p className='team-member-description'>{teamMember.teamMemberDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ContactUs component for the Contact Us section & form */}
        <ContactUs />
        
      </div>
    </section>
  );
}

export default AboutUs;
