const defaultState = {
  value: "ligthTheme",
};

const LIGHT_THEME = "LIGHT_THEME";
const DARK_THEME = "DARK_THEME";

export const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIGHT_THEME:
      return { ...state, value: "ligthTheme" };
    case DARK_THEME:
      return { ...state, value: "darkTheme" };
    default:
      return state;
  }
};

export const ligthThemeReducer = () => ({
  type: LIGHT_THEME,
});
export const darkThemeReducer = () => ({
  type: DARK_THEME,
});
