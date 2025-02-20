import React, { useState } from 'react';
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

import pic1 from '../assets/aboutpics.jpg';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Google Form submission URL
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdwtDkPUXrYy9Xf2PXnSOjGCzoMggcIYR7GoQz8_dQrn6ejgg/formResponse";
   
    const formBody = new FormData();
    formBody.append("entry.1107641406", formData.name); 
    formBody.append("entry.1455537946", formData.email);
    formBody.append("entry.1867312323", formData.subject);
    formBody.append("entry.1877646665", formData.message);

    fetch(googleFormURL, {
      method: "POST",
      body: formBody,
      mode: "no-cors", 
    })
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to send message.");
    });
  };

 
  return (
    <div className="container-fluid py-5">
      {/* Contact Header */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Contact Me</h2>
      </div>

      {/* Contact Info Cards */}
      <div className="row text-center mb-4">
        <div className="col-md-4 mb-1">
          <div className="card p-4 shadow">
            <div className="mb-3 text-primary fs-3"><GrLocationPin /></div>
            <h5 className="fw-bold">Address</h5>
            <p>89, Desai Faliyu, Veluk, Olpad, Surat</p>
          </div>
        </div>

        <div className="col-md-4 mb-1">
          <div className="card p-4 shadow">
            <div className="mb-3 text-success fs-3"><MdOutlineLocalPhone /></div>
            <h5 className="fw-bold">Contact Number</h5>
            <p><a href="tel:8401304121" className="text-decoration-none">8401304121</a></p>
          </div>
        </div>

        <div className="col-md-4 mb-1">
          <div className="card p-4 shadow">
            <div className="mb-3 text-danger fs-3"><SiMinutemailer /></div>
            <h5 className="fw-bold">Email Address</h5>
            <p><a href="mailto:ppia7978@gmail.com" className="text-decoration-none">ppia7978@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Contact Form & Image */}
      <div className="row align-items-center justify-content-center">
        {/* <div className="col-md-6 text-center">
          <img src={pic1} alt="Profile" className="img-fluid rounded shadow" style={{ maxWidth: "400px" }} />
        </div> */}

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" name="name" required value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" name="email" required value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <textarea className="form-control" name="message" placeholder="Message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
