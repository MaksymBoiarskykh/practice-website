import { useContext } from "react";
import { usersContext } from "../context/usersContext";

export const IdUserPage = () => {
  const { userFromList } = useContext(usersContext);
  console.log(userFromList);
  return (
    <div>
      <div>
        full name: {userFromList.name.first} {userFromList.name.last}
      </div>
      <div>
        {userFromList.location.country}, {userFromList.location.city}
      </div>
      <div>email: {userFromList.email}</div>
      <div>phone: {userFromList.phone}</div>
      <div></div>
      <img src={userFromList.picture.large}></img>
    </div>
  );
};
