import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";
import { themeContext } from "./context/themeContext";

export const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </themeContext.Provider>
  );
};
