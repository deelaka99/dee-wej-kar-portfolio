import React from "react";
import "./intro.css";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Dp from "../../assets/img/dp1.png";
import Thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";
import Glassesimoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Deelaka Wejith</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
        <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/deelaka99">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/deelaka-wejith-kariyawasam-7a9bb0213/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Dp} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt="Glassesimoji"
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "9rem", left: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/*blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
