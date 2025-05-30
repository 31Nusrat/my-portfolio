import React, { useState, useEffect } from "react";
import "./NavBar.css";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", icon: <FaHome className="nav-icon" /> },
    { id: "about", label: "About", icon: <FaUser className="nav-icon" /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram className="nav-icon" /> },
    { id: "coding-profiles", label: "Coding Profiles", icon: <FaCode className="nav-icon" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="nav-icon" /> },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      for (let id of sections) {
        const sec = document.getElementById(id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const handleShadow = () => {
      const nav = document.querySelector(".navbar");
      if (window.scrollY > 20) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector(".nav-links");
      const burger = document.querySelector(".hamburger");
      if (isOpen && !nav.contains(e.target) && !burger.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">Nusrat</div>
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
        {navItems.map(({ id, label, icon }) => (
          <li
            key={id}
            className={activeSection === id ? "active" : ""}
            onClick={() => scrollToSection(id)}
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
