import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const[loading,setLoading]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        setAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_h2g4val",
      "template_z1rzntz",
      formData,
      "tie4OCM0e8-JtYHTf"
    ).then(response=>{
      console.log('Sucess!',response.status,response.text);
      alert('Message sent successfully!');
      setFormData({name:"",email:"",message:""})
    }).catch(err=>{
      console.log('Failed...',err);
      alert('Failed to send message. Please try again.')
    }).finally(()=>setLoading(false))
  };

  return (
    <section
      id="contact"
      className={`contact-section ${animate ? "animate" : ""}`}
    >
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>{loading?"Sending...":"Send Message"}</button>
      </form>
    </section>
  );
};

export default Contact;
