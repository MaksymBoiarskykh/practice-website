import { Swiper, SwiperSlide } from "swiper/react";
import { SliderButton } from "../SliderButton/SliderButton";
import "swiper/scss";
import style from "./Slider.module.scss";

export const Slider = ({ data }) => {
  return (
    <Swiper className={style.Slider} spaceBetween={25} slidesPerView={1.3}>
      <SliderButton position="left">
        <i className="large material-icons">arrow_back</i>
      </SliderButton>
      <SliderButton position="right">
        <i className="large material-icons">arrow_forward</i>
      </SliderButton>

      {data.map((item, index) => (
        <SwiperSlide key={index} className={style.Slide}>
          <img src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
