import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck } from "react-icons/fi";
import Reveal from "./Reveal";
import { spotMove } from "./Effects";

const EMAIL = "ppia7978@gmail.com";
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdwtDkPUXrYy9Xf2PXnSOjGCzoMggcIYR7GoQz8_dQrn6ejgg/formResponse";

const empty = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "sent" || status === "error") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const body = new FormData();
    body.append("entry.1107641406", formData.name);
    body.append("entry.1455537946", formData.email);
    body.append("entry.1867312323", formData.subject);
    body.append("entry.1877646665", formData.message);

    fetch(GOOGLE_FORM_URL, { method: "POST", body, mode: "no-cors" })
      .then(() => {
        setStatus("sent");
        setFormData(empty);
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
      });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch (err) {
      /* clipboard can be blocked; still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="section-pad contact-bg">
      <div className="container">
        <Reveal className="contact-head">
          <h2>
            Let's build something <em>together</em>.
          </h2>
          <p>Have a role, a project or just a question? Write to me and I will get back to you.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <div className="mail-card spot" onPointerMove={spotMove}>
              <small>Email me directly</small>
              <a className="mail-big" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <div className="mail-actions">
                <a className="btn-solid" href={`mailto:${EMAIL}`}>
                  <FiMail /> Write an email
                </a>
                <button className="btn-ghost" type="button" onClick={copyEmail}>
                  {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <div className="contact-list">
              <a className="contact-item spot" href="tel:8401304121" onPointerMove={spotMove}>
                <span className="ci-icon ci-mint"><FiPhone /></span>
                <div>
                  <h3>Call me</h3>
                  <p>+91 8401304121</p>
                </div>
              </a>
              <div className="contact-item spot" onPointerMove={spotMove}>
                <span className="ci-icon ci-pink"><FiMapPin /></span>
                <div>
                  <h3>Based in</h3>
                  <p>Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a message</h3>

              <div className="row2">
                <div className="field">
                  <input id="c-name" type="text" name="name" placeholder=" " required
                    value={formData.name} onChange={handleChange} />
                  <label htmlFor="c-name">Your name</label>
                </div>
                <div className="field">
                  <input id="c-email" type="email" name="email" placeholder=" " required
                    value={formData.email} onChange={handleChange} />
                  <label htmlFor="c-email">Your email</label>
                </div>
              </div>

              <div className="field">
                <input id="c-subject" type="text" name="subject" placeholder=" "
                  value={formData.subject} onChange={handleChange} />
                <label htmlFor="c-subject">Subject</label>
              </div>

              <div className="field">
                <textarea id="c-message" name="message" rows="5" placeholder=" " required
                  value={formData.message} onChange={handleChange} />
                <label htmlFor="c-message">Message</label>
              </div>

              <button type="submit" className="btn-solid btn-full" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : <>Send message <FiSend /></>}
              </button>

              <p className={`form-status ${status}`} role="status">
                {status === "sent" && "Message sent. I will reply to your email soon."}
                {status === "error" && "The message was not sent. Check your connection and try again."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Contact;
