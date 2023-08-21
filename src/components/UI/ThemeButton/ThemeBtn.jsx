import { useDispatch, useSelector } from "react-redux";
import {
  ligthThemeReducer,
  darkThemeReducer,
} from "../../../store/themeReducer";
import style from "./ThemeButton.module.scss";

export const ThemeBtn = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const changeTheme = async () => {
    theme === "ligthTheme"
      ? dispatch(darkThemeReducer())
      : dispatch(ligthThemeReducer());
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
