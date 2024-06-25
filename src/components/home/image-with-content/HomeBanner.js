import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, EffectCreative, FreeMode, Pagination, Thumbs } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { SubmitProperty } from "@/constValues/constValues";

const data = [{ className: "fnc-slide-1" }, { className: "fnc-slide-2" }, { className: "fnc-slide-3" }];
const HomeBannerSection = () => {
  const [animation, setAnimation] = useState(false);

  return (
    <div className="fnc-slider nav-slider">
      <div className="fnc-slider__slides">
        <Swiper
          onSlideChange={() => {
            setAnimation(true);
            setTimeout(() => {
              setAnimation(false);
            }, 1000);
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<div class=${className}><button class="fnc-nav__control">  ${
                index == 0 ? "Apartment" : index == 1 ? "Town" : "villa"
              } <span class="swiper__control-progress"></span></button></div>`;
            },
          }}
          className="mySwiper"
          style={{ height: "100vh" }}
          slidesPerView={1}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, 0],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Autoplay, EffectCreative, FreeMode, Thumbs, Pagination]}>
          {data.map((elem, i) => (
            <SwiperSlide key={i}>
              <div className={`fnc-slide m--blend-green ${elem.className} m--active-slide ${animation && "m--previous-slide "}`}>
                <div className="fnc-slide__inner">
                  <div className="fnc-slide__mask  ">
                    <div className="fnc-slide__mask-inner"></div>
                  </div>
                  <div className="fnc-slide__content">
                    <h2 className="fnc-slide__heading">
                      <span className="fnc-slide__heading-line">
                        <span>For Sale, </span>
                      </span>
                      <span className="fnc-slide__heading-line">
                        <span>{i === 0 ? "Apartment" : i === 1 ? "Town" : "villa"}</span>
                      </span>
                    </h2>
                    <Link href="/agent/submit-property" className="fnc-slide__action-btn">
                      <span>{SubmitProperty}</span>
                      <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBannerSection;
