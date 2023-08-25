import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
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
            <img src={Sidebar} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Ecommerce} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={HOC} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={MusicApp} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Portfolio;
