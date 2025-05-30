import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const fullName = " Hii, I'm Nusrat";
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullName.length) {
        setDisplayName((prev) => prev + fullName.charAt(index));
        console.log(index);
        index++;
      } else clearInterval(interval);
    }, 200);

    return () => clearInterval(interval);
  }, []);  // <== important!

  return (
    <section className="hero" id="hero" >
      <h1>
        <span className="typed-name">{displayName}</span>
       
      </h1>
      <p>Frontend Developer | React Enthusiast</p>
      <button
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection)
            contactSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Me
      </button>
    </section>
  );
};

export default Hero;
