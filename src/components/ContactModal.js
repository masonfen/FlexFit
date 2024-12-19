import React from 'react';

const ContactModal = ({ onClose }) => {
  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
        <h3>Contact Me</h3>
        <p>Feel free to email me at:</p>
        <a href="mailto:masonfen03@gmail.com" style={linkStyles}>
          masonfen03@gmail.com
        </a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)' // Adds a subtle blur for a slick feel
  };
  
  const modalStyles = {
    backgroundColor: '#1C1C1E', // A sleek dark gray (similar to Apple's dark mode)
    padding: '20px',
    borderRadius: '12px',
    maxWidth: '320px',
    width: '90%',
    textAlign: 'center',
    color: '#F5F5F7', // Light text against dark background
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)' // A soft shadow for depth
  };
  
  const linkStyles = {
    display: 'inline-block',
    margin: '15px 0',
    color: '#FC3D39',  // A vibrant red accent
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'pointer'
  };
  
  export default ContactModal;
  