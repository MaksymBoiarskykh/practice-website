import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { SliderButton } from "../SliderButton/SliderButton";
import "swiper/scss";
import style from "./Slider.module.scss";

export const Slider = ({ data }) => {
  return (
    <Swiper className={style.Slider} spaceBetween={25} slidesPerView={1.3}>
      <SliderButton position="left">
        <FiArrowLeft />
      </SliderButton>
      <SliderButton position="right">
        <FiArrowRight />
      </SliderButton>

      {data.map((item, index) => (
        <SwiperSlide key={index} className={style.Slide}>
          <img src={item.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
