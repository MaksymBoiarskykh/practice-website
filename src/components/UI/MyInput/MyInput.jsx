import style from "./MyInput.module.scss";

export const MyInput = (props) => (
  <input className={style.MyInput} {...props} />
);

export const customInput = () => {
  return (
    <div className={style.customInput}>
      <div className={style.customInputDefault}></div>
      <div className={style.customInputOption}></div>
    </div>
  );
};
