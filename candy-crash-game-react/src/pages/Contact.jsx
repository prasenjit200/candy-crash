import React from "react";

const ContactPage = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f4f8",
      padding: "20px",
    },
    contactSection: {
      width: "50%",
      padding: "30px",
    },
    contactHeading: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "15px",
    },
    contactInfo: {
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#555",
      marginBottom: "20px",
    },
    contactCard: {
      width: "40%",
      background: "white",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    input: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#007bff",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.contactSection}>
        <h2 style={styles.contactHeading}>Contact Us</h2>
        <p style={styles.contactInfo}>
          Email, call, or complete the form to learn how we can help.
        </p>
        <p style={styles.contactInfo}>
          📧 prasenjitdey092@gmail.com<br />
          📞 7585068093<br />
          📍 Tamluk , West Bengal 
        </p>
      </div>
      <div style={styles.contactCard}>
        <h3>Get in Touch</h3>
        <input type="text" placeholder="First Name" style={styles.input} />
        <input type="text" placeholder="Last Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <input type="text" placeholder="Phone Number" style={styles.input} />
        <textarea placeholder="How can we help?" style={styles.input}></textarea>
        <button style={styles.button}>Submit</button>
      </div>
    </div>
  );
};

export default ContactPage;
