import { createStore, combineReducers } from "redux";
import { sliceTheme } from "./themeSlice";

const rootReducer = combineReducers({
  theme: sliceTheme,
});
export const store = createStore(rootReducer);
