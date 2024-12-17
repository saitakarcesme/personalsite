import React from 'react';
import './App.css';
import profileImage from './image/imageofme.JPG'; 

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="name">IBRAHIM SAIT AKARCESME</h1>
      </div>

      <div className="links">
        <button onClick={() => window.location.href = 'https://www.linkedin.com/in/ibrahim-sait-akarcesme-4b360b209/'} className="link-button">LINKEDIN</button>
        <button onClick={() => window.location.href = 'https://github.com/saitakarcesme'} className="link-button">GITHUB</button>
        <button onClick={() => window.location.href = 'https://www.instagram.com/ibrahimwpl/'} className="link-button">INSTAGRAM</button>
      </div>

      <div className="section about-me">
        <h2>ABOUT ME ?</h2>
        <p>
          Hello, I am Ibrahim Sait Akarcesme. I am currently a computer science student. 
          I plan to store my own basic and promising projects here. I look forward to sharing 
          my skills and projects with you.
        </p>
      </div>

      <div className="section services">
        <h2>WHAT CAN I DO FOR YOU ?</h2>
        <ul>
          <li>I can prepare a website for you.</li>
          <li>I can create fast projects in graphic design.</li>
          <li>
            No matter how big the project you need, I have the network to complete it in the fastest way.
          </li>
        </ul>
      </div>
            <div className="section skills">
        <h2>MY TECHNICAL SKILLS...</h2>
        <div className="skills-grid">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JS</div>
          <div className="skill-item">React JS</div>
          <div className="skill-item">Next JS</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">JAVA</div>
          <div className="skill-item">Office</div>
          <div className="skill-item">Photoshop</div>
        </div>
      </div>

      <div className="buttons">
        <button className="blog-button">HERE IS MY PERSONAL BLOG</button>
        <button className="contact-button">CONTACT ME</button>
      </div>
    </div>
  );
}

export default App;
