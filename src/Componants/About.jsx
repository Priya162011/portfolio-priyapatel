import React from "react";
import aboutpic from "../assets/aboutpics.jpg";
import { GiBrainFreeze } from "react-icons/gi";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";

function About() {
    return (
        <div className="container py-5">
            {/* Profile Section */}
            <div className="row align-items-center mb-5">
                <div className="col-md-6 text-center mb-2">
                    <img src={aboutpic} alt="Profile" className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold">About Me</h2>
                    <p className="text-muted">
                        I consider myself a responsible and organized person, and I am looking forward to starting my new role.
                    </p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Name:</strong> Priya Patel</li>
                        <li className="list-group-item"><strong>Date of Birth:</strong> November 20, 2003</li>
                        <li className="list-group-item"><strong>Address:</strong> 89, Desai Faliyu, Veluk, Olpad, Surat</li>
                        <li className="list-group-item"><strong>Pin Code:</strong> 395005</li>
                        <li className="list-group-item"><strong>Email:</strong> ppia7978@gmail.com</li>
                        <li className="list-group-item"><strong>Phone:</strong> +91 8401304121</li>
                    </ul>
                    <a
                        href="/Priya Patel.pdf"
                        download="Priya Patel.pdf"
                    >
                        <button className="btn btn-primary mt-3">Download CV</button></a>
                </div>
            </div>

            {/* Education Section */}
            <div className="mb-5">
                <h3 className="text-primary"><FaGraduationCap className="me-2" /> Education</h3>
                <div className="card mb-3 ">
                    <div className="card-body edu-card">
                        <p className="fw-bold">2021-2024</p>
                        <p>Bachelor of Science in Information Technology</p>
                        <p className="text-muted">Veer Narmad South Gujarat University</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body edu-card">
                        <p className="fw-bold">2024-2026 (Pursuing)</p>
                        <p>Master of Science in Information Technology</p>
                        <p className="text-muted">Veer Narmad South Gujarat University</p>
                    </div>
                </div>
            </div>

            {/* Experience Section */}
            <div className="mb-5">
                <h3 className="text-primary"><PiCertificate className="me-2" /> Experience</h3>
                <div className="card">
                    <div className="card-body edu-card">
                        <p className="fw-bold">(04/2024 - 12/2024)</p>
                        <p>PHP Developer</p>
                        <p className="text-muted">Dominant InfoTech</p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div>
                <h3 className="text-primary"><GiBrainFreeze className="me-2" /> Skills</h3>
                <ul className="list-group list-group-horizontal flex-wrap">
                    {[
                        "HTML", "CSS", "JavaScript", "ReactJS", "PHP",
                        ".NET (VB.NET, ASP.NET)", "Java", "NodeJS",
                        "DBMS (MySQL, NoSQL, Oracle, PL/SQL)"
                    ].map((skill, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex align-items-center bg-light border rounded-pill px-3 py-2 m-2"
                        >
                            <VscDebugBreakpointData className="me-2 text-primary" /> {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About;
