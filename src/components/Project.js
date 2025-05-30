import React, { useEffect } from "react";
import "./Project.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projectList = [
  {
    title: "Sorting Visualizer",
    description:
      "A React-based tool to visualize sorting algorithms with interactive animations and controls.",
    link: "https://celadon-lamington-38ce5d.netlify.app/",
  },
  {
    title: "Dino Jump Game",
    description:
      "A simple browser-based dino game built with React, featuring jump physics and collision detection.",
    link: "https://68284fe009a0de78d77b99fe--resilient-sundae-98c3c1.netlify.app/",
  },
  {
    title: "Sudoku Game",
    description:
      "A complete Sudoku puzzle with frontend in React and backend generation using Node.js.",
    link: "https://github.com/31Nusrat/sudoku-project",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init({
       duration: 1000,
  once: true,
  easing: 'ease-in-out',
  offset: 120, // triggers animation a bit earlier
    });
  }, []);
  return (
    <section id="projects" className="projects-section">
      <h2  data-aos="fade-down" >Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card"
           key={index}
           data-aos={index%2===0 ?"zoom-in-up":"fade-up-left"}
           data-aos-delay={index*100}
           data-aos-anchor-placement="top-bottom"
           onMouseMove={(e)=>{
            const card=e.currentTarget;
            const rect=card.getBoundingClientRect();
            const x=e.clientX-rect.left;
            const y=e.clientY-rect.top;
            const centerX=rect.width/2;
            const centerY=rect.height/2;
            const rotateX=((y-centerY)/centerY)* -10;
            const rotateY=((x-centerX)/centerX)*10;
            card.style.transform=`rotateX(${rotateX}deg)  rotateY(${rotateY}deg) scale(1.05)`;
           }}
           onMouseLeave={(e)=>{
            const card=e.currentTarget;
            card.style.transform=`rotateX(0deg) rotateY(0deg) scale(1)`;
           }}


           >
            <h3  data-aos="fade-right" data-aos-delay={index*100+100} >{project.title}</h3>
            <p data-aos="fade-left"  data-aos-delay={index*100+200} >{project.description}</p>
            <a 
            data-aos="fade-up"
            data-aos-delay={index*100+300}
            href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
