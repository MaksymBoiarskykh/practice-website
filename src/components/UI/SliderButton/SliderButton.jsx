import { useSwiper } from "swiper/react";
import style from "./SliderButton.module.scss";

export const SliderButton = ({ children, position }) => {
  const swiper = useSwiper();

  const styles =
    position === "right"
      ? `${style.sliderButton} ${style.Right}`
      : `${style.sliderButton} ${style.Left}`;

  return (
    <button
      className={styles}
      onClick={() =>
        position === "right" ? swiper.slideNext() : swiper.slidePrev()
      }
    >
      {children}
    </button>
  );
};
