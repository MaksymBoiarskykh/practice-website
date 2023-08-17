import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.LoaderBlock}>
      <div className={style.Loader}></div>
    </div>
  );
};
