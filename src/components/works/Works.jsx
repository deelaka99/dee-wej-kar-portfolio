import React from "react";
import "./works.css";
import Upwork from "../../assets/img/Upwork.png";
import Fiverr from "../../assets/img/fiverr.png";
import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import Amazon from "../../assets/img/amazon.png";

const Works = () => {
  return (
    <div className="works">
      {/*left side */}
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem jnnjdf hffb hdfbhd fd ddd s ds
          <br />
          sd bdsbds dbhsbs
          <br />
          Lorem jnnjdf hffb hdfbhd fd ddd s ds
          <br />
          sd bdsbds dbhsbs
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Instagram} alt="Instagram" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="facebook" />
          </div>
        </div>
        {/*background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
