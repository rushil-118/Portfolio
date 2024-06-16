import "./Contact.css";

import { FiPhone, FiAtSign } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import React, { useState } from "react";
import { AiOutlineSend, AiOutlineCheckCircle } from "react-icons/ai";

function Contact(){
  const success = useState(false);

  const contactsData = {
    email: "choudharyrushil118@gmail.com",
    phone: "+91 866XXXXX",
    address: "Scaler School Of Technology, Bangalore, India",
  };


  return (
    <div className="contacts" id="Contact">
      <div className="contacts--container">
        <h1>Contacts</h1>
        <div className="contacts-body">
          <div className="contacts-form">
            <form>
              <div className="input-container">
                <label htmlFor="Name">Name</label>
                <input
                  placeholder="John Doe"
                  type="text"
                  name="Name"
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Email">Email</label>
                <input
                  placeholder="John@doe.com"
                  type="email"
                  name="Email"
                  className="form-input"
                />
              </div>
              <div className="input-container">
                <label htmlFor="Message">Message</label>
                <textarea
                  placeholder="Type your message...."
                  type="text"
                  name="Message"
                  className="form-message"
                />
              </div>
              <div className="submit-btn">
                <button type="submit">
                  <p>{!success ? "Send" : "Sent"}</p>
                  <div className="submit-icon">
                    <AiOutlineSend
                      className="send-icon"
                      style={{
                        display: !success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                    <AiOutlineCheckCircle
                      className="success-icon"
                      style={{
                        display: success ? "none" : "inline-flex",
                        opacity: !success ? "0" : "1",
                      }}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="contacts-details">
            <a
              href={`mailto:${contactsData.email}`}
              className="personal-details"
            >
              <div>
                <FiAtSign className="iconsDetails"/>
              </div>
              <p>{contactsData.email}</p>
            </a>
            <a href={`tel:${contactsData.phone}`} className="personal-details">
              <div>
                <FiPhone className="iconsDetails" />
              </div>
              <p>{contactsData.phone}</p>
            </a>
            <div className="personal-details">
              <div>
                <HiOutlineLocationMarker className="iconsDetails" />
              </div>
              <p>{contactsData.address}</p>
            </div>
          </div>
        </div>
      </div>
      <img
                src="https://dev-portfolio-template.netlify.app/static/media/contactsOrange.75754594.svg"
                alt='contacts'
                className='contacts--img'
            />
    </div>
  );
};

export default Contact;