import { HashRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <AppRouter />
    </HashRouter>
  );
};
