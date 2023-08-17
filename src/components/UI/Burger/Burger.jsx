import style from "./Burger.module.scss";

export const Burger = (props) => (
  <div className={style.btnMenu} {...props}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);
