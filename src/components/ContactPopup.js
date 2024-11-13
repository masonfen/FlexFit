import React, { useState } from "react";
import "./ContactPopup.css";

const ContactPopup = () => {
  // State to control the visibility of the popup
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Contact Button */}
      <button onClick={togglePopup} className="contact-btn">
        Contact
      </button>

      {/* Pop-up box */}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-btn" onClick={togglePopup}>
              &times;
            </span>
            <h2>Contact Information</h2>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
