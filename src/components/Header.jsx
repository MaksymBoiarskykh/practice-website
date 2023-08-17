import React, { useState } from "react";
import { Navigation } from "./UI/Navigation/Navigation";
import { Burger } from "./UI/Burger/Burger";

export const Header = () => {
  const links = [
    { name: "about", to: "/about" },
    { name: "users", to: "/users" },
  ];
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <Burger onClick={() => setActiveMenu(!activeMenu)} />
        <Navigation
          items={links}
          status={activeMenu}
          changeStatus={setActiveMenu}
        />
      </div>
    </header>
  );
};
