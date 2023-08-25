import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../../assets/img/sidebar.png";
import Ecommerce from "../../assets/img/ecommerce.png";
import HOC from "../../assets/img/hoc.png";
import MusicApp from "../../assets/img/musicapp.png";
import "swiper/css";

function Portfolio() {
  return (
    <div>
      <div className="portfolio">
        {/**heading */}
        <span>Recent Projects</span>
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
