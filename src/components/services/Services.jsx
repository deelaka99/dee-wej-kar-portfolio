import React from "react";
import "./services.css";
import HeartEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Card from "../card/Card";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const openGoogleLink = () => {
    window.open("https://drive.google.com/file/d/1QmLyTNrT58uQjBIN1mzVycU1lEIiVvpr/view?usp=drive_link", "_blank");
  };

  return (
    <div className="services" id="Services">
      {/*left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
          Proficient web developer with a passion for crafting dynamic and
          user-friendly websites. Experienced in HTML, CSS, JavaScript, and
          responsive design. Committed to creating seamless digital experiences
          that engage and delight users.
          <br />
          sd bdsbds dbhsbs
        </span>
        <button className="button s-button" onClick={openGoogleLink}>Download CV</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side */}
      <div className="cards">
        {/**1st card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Adobe Photoshop, Adobe illustrator, Adobe XD"}
          />
        </motion.div>
        {/*2nd card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={
              "HTML, CSS, JavaScript, PHP, Bootstrap, TailwindCSS, ReactJS, Laravel"
            }
          />
        </div>
        {/*3rd card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Figma, Adobe Photoshop, Adobe illustrator, Adobe XD"}
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
