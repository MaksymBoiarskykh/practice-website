import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyButton } from "../UI/MyButton/MyButton";
import style from "./UserBlock.module.scss";
import { usersContext } from "../../context/usersContext";

export const UserBlock = ({ user }) => {
  const navigate = useNavigate();
  const { setUserFromList } = useContext(usersContext);

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
            setUserFromList(user);
          }}
        >
          Show info
        </MyButton>
      </div>
    </li>
  );
};
