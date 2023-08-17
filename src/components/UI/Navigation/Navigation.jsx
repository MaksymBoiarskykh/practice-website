import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = ({ items, status, changeStatus }) => {
  const menuStyles = status
    ? `${style.menu}  ${style.active}`
    : `${style.menu}`;

  return (
    <nav className={menuStyles}>
      <ul className={style.menuList}>
        {items.map((item, index) => (
          <li onClick={() => changeStatus(!status)} key={index}>
            <Link className={style.menuItem} to={item.to}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
