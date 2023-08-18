import { useState } from "react";
import { searchInObject } from "../../utils/searchInObject";
import style from "./UserInfo.module.scss";

export const UserInfo = ({ user, data }) => {
  const [content, setContent] = useState([]);

  const showInfo = (info) => {
    const resultArr = searchInObject(user[info.value], info.only);
    setContent([...resultArr]);
  };

  return (
    <>
      <div className={style.InfoBlock}>
        <div className={style.InfoBlockPicture}>
          <img src={user.picture.large} />
        </div>
        <ul className={style.InfoBlockResult}>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul className={style.InfoBlockContent}>
          {data.map((item) => (
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
