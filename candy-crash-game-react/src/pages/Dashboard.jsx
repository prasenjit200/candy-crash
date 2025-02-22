import React from "react";
import { useNavigate } from "react-router-dom";

const CandyCrushLanding = () => {
  const navigate = useNavigate(); 

  const styles = {
    container: {
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
    },
    navbar: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      position: "absolute",
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      background: "rgba(255, 255, 255, 0.9)",
      borderRadius: "25px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      zIndex: 10,
    },
    navItem: {
      margin: "0 15px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      cursor: "pointer",
      transition: "0.3s",
    },
    hero: {
      width: "100%",
      height: "100vh",
      backgroundImage: "url('/images/candy-crush1.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textAlign: "center",
      position: "relative",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
    },
    heroContent: {
      position: "relative",
      zIndex: 2,
      padding: "20px",
      borderRadius: "10px",
    },
    heading: {
      fontSize: "48px",
      fontWeight: "bold",
      textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
    },
    subheading: {
      fontSize: "20px",
      marginTop: "10px",
      maxWidth: "600px",
      lineHeight: "1.5",
    },
    startButton: {
      marginTop: "30px",
      padding: "15px 40px",
      fontSize: "24px",
      fontWeight: "bold",
      background: "#ff69b4",
      color: "white",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    },
    startButtonHover: {
      background: "#ff1493",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <span style={styles.navItem} onClick={() => navigate("/")}>Home</span>
        <span style={styles.navItem} onClick={() => navigate("/developer")}>About Me</span>
        <span style={styles.navItem} onClick={() => navigate("/game")}>Play</span>
        <span style={styles.navItem} onClick={() => navigate("/contact")}>Contact</span>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heading}>Welcome to Candy Crush World!</h1>
          <p style={styles.subheading}>
            Get ready for an exciting candy-matching adventure. Crush candies,
            complete challenges, and score big!
          </p>
          <button
            style={styles.startButton}
            onClick={() => navigate("/game")}
            onMouseEnter={(e) =>
              (e.target.style.background = styles.startButtonHover.background)
            }
            onMouseLeave={(e) =>
              (e.target.style.background = styles.startButton.background)
            }
          >
            Start the Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandyCrushLanding;
