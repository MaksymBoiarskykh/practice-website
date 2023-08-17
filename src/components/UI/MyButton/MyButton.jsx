import style from "./MyButton.module.scss";

export const MyButton = ({ onClick, children }) => (
  <button className={style.MyButton} onClick={onClick}>
    {children}
  </button>
);
