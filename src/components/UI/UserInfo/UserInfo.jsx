import { useState } from "react";
import { searchInObject } from "../../../utils/searchInObject";
import style from "./UserInfo.module.scss";

export const UserInfo = ({ user, param }) => {
  const [content, setContent] = useState({ value: [], symbolBetween: "" });

  const showInfo = (info) => {
    const resultArr = searchInObject(user[info.value], info.only);
    setContent({ value: [...resultArr], symbolBetween: info.symbol || "" });
  };

  return (
    <>
      <div className={style.InfoBlock}>
        <div className={style.InfoBlockPicture}>
          <img src={user.picture.large} />
        </div>
        <ul className={style.InfoBlockResult}>
          {content.value.map((item, index) => (
            <li key={index}>
              {index > 0 && content.symbolBetween} {item}
            </li>
          ))}
        </ul>
        <ul className={style.InfoBlockContent}>
          {param.map((item) => (
            <li
              onMouseEnter={() => showInfo(item)}
              value={item.value}
              key={item.value}
            >
              <div>{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
