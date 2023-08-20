import { useNavigate } from "react-router-dom";
import { MyButton } from "../MyButton/MyButton";
import style from "./UserBlock.module.scss";

export const UserBlock = ({ user }) => {
  const navigate = useNavigate();

  return (
    <li>
      <div className={style.userBlock}>
        <div className={style.userPicture}>
          <img src={`${user.picture.large}`} />
        </div>
        <div className={style.userCaption}>
          {user.name.first} {user.name.last}
        </div>
        <div className={style.userLocation}>
          <div>country: {user.location.country}</div>
          <div>city: {user.location.city}</div>
        </div>
        <MyButton
          onClick={() => {
            navigate(`/users/${user.name.first}${user.name.last}`);
            localStorage.setItem("user", JSON.stringify(user));
          }}
        >
          Show info
        </MyButton>
      </div>
    </li>
  );
};
