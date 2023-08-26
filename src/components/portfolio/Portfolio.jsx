import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Fit360 from "../../assets/img/1.png";
import DTM from "../../assets/img/2.png";
import RMS from "../../assets/img/3.png";
import Glamour360 from "../../assets/img/4.png";
import "swiper/css";
import { themeContext } from "../../Context";
import { useContext } from "react";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="portfolio" id="Portfolio">
        {/**heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/**slider */}
        <Swiper 
            spaceBetween={30} 
            slidesPerView={3} 
            grabCursor={true}
            className="portfolio-slider"
            >
          <SwiperSlide>
            <img src={Fit360} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={DTM} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={RMS} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Glamour360} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
