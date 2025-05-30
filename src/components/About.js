import React, { useEffect, useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import "./About.css";
import profilePic from "./myprofile-removebg-preview.png"; // update with correct path if needed

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="skills-marquee">
  <div className="marquee-track">
     <span>🌐 HTML</span>
    <span>🎨 CSS</span>
    <span>⚙️ JavaScript</span>
    <span>⚛️ React</span>
    <span>🎨 Tailwind</span>
    <span>🧠 TypeScript</span>
    <span>🖥️ Node.js</span>
    <span>🚂 Express.js</span>
    <span>🍃 MongoDB</span>
    <span>💻 C++</span>
    <span>🐍 Python</span>

    {/* duplicate for smooth infinite scroll */}
    <span>🌐 HTML</span>
    <span>🎨 CSS</span>
    <span>⚙️ JavaScript</span>
    <span>⚛️ React</span>
    <span>🎨 Tailwind</span>
    <span>🧠 TypeScript</span>
    <span>🖥️ Node.js</span>
    <span>🚂 Express.js</span>
    <span>🍃 MongoDB</span>
    <span>💻 C++</span>
    <span>🐍 Python</span>
  </div>
</div>

      <div className="about-content-wrapper">
        {/* Text Block */}
        <div className={`about-text ${animate ? "show" : ""}`}>
          <p>
            I’m <strong>Nusrat Parween</strong>, a passionate frontend developer
            who loves crafting beautiful and responsive web experiences using{" "}
            <strong>React</strong>.
          </p>
          <p>
            My goal is to build performant and engaging user interfaces with
            clean code, thoughtful design, and great attention to detail.
          </p>
          <p>
            When I’m not coding, I enjoy exploring UI trends and improving my
            skills.
          </p>
        </div>

        {/* Flip Card */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={profilePic}
                alt="Nusrat"
                className={`about-photo ${animate ? "show" : ""}`}
              />
            </div>
            <div className="flip-card-back">
              <h3>My Hobbies</h3>
              <ul>
                <li>📚 Reading</li>
                <li>🎨 Designing</li>
                <li>💻 Coding fun UIs</li>
                <li>🎵 Music</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-info">
        <p className="hover-highlight">
          <MdEmail className="icon" />
          knusrat493@gmail.com
        </p>
        <p className="hover-highlight">
          <MdPhone className="icon" />
          +91-6287724701
        </p>
      </div>
    </section>
  );
};

export default About;
