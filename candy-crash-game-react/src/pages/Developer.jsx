import React from "react";

const DeveloperCard = () => {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      position: "relative",
    },
    card: {
      width: "300px",
      background: "#111827",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      color: "white",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      transition: "0.3s",
      position: "absolute",
      top: "50px", 
    },
    imageContainer: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      overflow: "hidden",
      margin: "auto",
      border: "3px solid #6d28d9",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "10px",
    },
    role: {
      fontSize: "16px",
      color: "#a3a3a3",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img
            src="/images/prasenjit.jpg"
            alt="Prasenjit Dey"
            style={styles.image}
          />
        </div>

        <h3 style={styles.name}>Prasenjit Dey</h3>
        <p style={styles.role}>Frontend Developer</p>
      </div>
    </div>
  );
};

export default DeveloperCard;
