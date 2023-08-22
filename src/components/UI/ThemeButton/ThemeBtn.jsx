import { useDispatch, useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../../store/themeSlice";
import style from "./ThemeButton.module.scss";

export const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const changeTheme = async () => {
    theme === "ligthTheme" ? dispatch(darkTheme()) : dispatch(lightTheme());
  };
  return (
    <>
      <div className={style.toggleSwitch}>
        <label className={style.labelTheme}>
          <input
            type="checkbox"
            className={style.inputTheme}
            onClick={changeTheme}
          />
          <span className={style.slider}></span>
        </label>
      </div>
    </>
  );
};
