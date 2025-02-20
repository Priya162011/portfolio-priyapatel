import React from 'react';
import { GrLocationPin } from "react-icons/gr";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container-fluid">
        <div className="row">
          
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About</h5>
            <p className="text-light">
              I consider myself a responsible and orderly person, and I am looking forward to starting my new role.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About</a></li>
              <li><a href="#" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Have a Question?</h5>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center">
                <GrLocationPin className="me-2 text-primary" /> 89, Desai Faliyu, Veluk, Olpad, Surat
              </li>
              <li className="d-flex align-items-center">
                <MdOutlineLocalPhone className="me-2 text-success" /> 8401304121
              </li>
              <li className="d-flex align-items-center">
                <SiMinutemailer className="me-2 text-danger" /> ppia7978@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="text-light m-0">© 2025 Priya Patel | All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
