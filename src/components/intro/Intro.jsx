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

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Deelaka Wejith</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="github" />
          </a>
          <a href="">
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
        <img src={Glassesimoji} alt="Glassesimoji" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/*blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left:'-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
