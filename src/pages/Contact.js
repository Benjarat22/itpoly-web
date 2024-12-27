import React from 'react';

function Contact() {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need more information, feel free to contact us!
      </p>
      <ul>
        <li>Email: contact@itwebsite.com</li>
        <li>Phone: +66 123-456-789</li>
        <li>Location: Chiang Mai, Thailand</li>
      </ul>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.810026234603!2d98.99312381540288!3d18.78831006576337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a8d32f8bdf5%3A0x4b9e4c3db82af3ec!2sChiang%20Mai!5e0!3m2!1sen!2sth!4v1646548352643!5m2!1sen!2sth"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
