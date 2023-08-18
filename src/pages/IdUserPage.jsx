import { UserInfo } from "../components/UserInfo/UserInfo";
import { FiPhone, FiAtSign, FiUser, FiNavigation } from "react-icons/fi";

export const IdUserPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const data = [
    {
      value: "name",
      name: <FiUser />,
      only: ["first", "last"],
    },
    {
      value: "email",
      name: <FiAtSign />,
      only: [""],
    },
    {
      value: "phone",
      name: <FiPhone />,
      only: [""],
    },
    {
      value: "location",
      name: <FiNavigation />,
      only: ["city", "country"],
    },
  ];

  return (
    <div className="container">
      <UserInfo user={user} data={data} />
    </div>
  );
};
