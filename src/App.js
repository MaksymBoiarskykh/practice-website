import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { AppRouter } from "./components/AppRouter";
import { usersContext } from "./context/usersContext";

export const App = () => {
  const [userFromList, setUserFromList] = useState({});
  return (
    <usersContext.Provider value={{ userFromList, setUserFromList }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </usersContext.Provider>
  );
};
