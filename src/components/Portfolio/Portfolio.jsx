// import React, { useContext } from "react";
// import "swiper/css";
import { themeContext } from "../../Context";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Sidebar from "../../img/sidebar.png";
import "./Portfolio.css";
// const Portfolio = () => {
//   const theme = useContext(themeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className="portfolio" id="portfolio">
//       {/* heading */}
//       <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
//       <span>Portfolio</span>

//       {/* slider */}
//       <Swiper
//         spaceBetween={30}
//         slidesPerView={4}
//         grabCursor={true}
//         className="portfolio-slider"
//       >
//         <SwiperSlide>
//           <img src={Sidebar} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={Ecommerce} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={MusicApp} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={HOC} alt="" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useContext } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

export default function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{ width: "40%", margin: "auto" }}
      className="portfolio"
      id="portfolio"
    >
      <div style={{ marginBottom: "100px" }}>
        <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{ width: "100%" }} src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{ width: "100%" }} src={Ecommerce} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
