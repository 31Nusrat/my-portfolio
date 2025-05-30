import React, { useEffect, useRef, useState } from 'react';
import './CodingPlatform.css';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from 'react-icons/si';
const CodingPlatform = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optional: only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="coding-profiles"
      ref={sectionRef}
      className={`coding-profiles-section ${isVisible ? 'animate' : ''}`}
    >
      <h2>Coding Profiles</h2>
      <div className="profiles-grid">
        <a href="https://github.com/31Nusrat" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        <a href="https://leetcode.com/u/NUSRAT1/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="icon" /> LeetCode
        </a>
        <a href="https://codeforces.com/profile/knusrat" target="_blank" rel="noopener noreferrer">
          <SiCodeforces className="icon" /> Codeforces
        </a>
        <a href="https://www.geeksforgeeks.org/user/knusrat" target="_blank" rel="noopener noreferrer">
          <SiGeeksforgeeks className="icon" /> GFG
        </a>
      </div>
    </section>
  );
};

export default CodingPlatform;
