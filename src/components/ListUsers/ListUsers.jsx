import { UserBlock } from "../UserBlock/UserBlock";
import style from "./ListUsers.module.scss";

export const ListUsers = ({ list }) => {
  return (
    <div className={style.block}>
      <ul className={style.listUsers}>
        {list.map((item, index) => (
          <UserBlock key={index} user={item} />
        ))}
      </ul>
    </div>
  );
};
