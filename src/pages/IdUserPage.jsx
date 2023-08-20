import { useSelector } from "react-redux";
import { FiPhone, FiAtSign, FiUser, FiNavigation } from "react-icons/fi";
import { UserInfo } from "../components/UI/UserInfo/UserInfo";

export const IdUserPage = () => {
  const theme = useSelector((state) => state.theme.value);
  const user = JSON.parse(localStorage.getItem("user"));

  // it's for taking only nessosary data from api result
  const param = [
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
      symbol: ",",
    },
  ];

  return (
    <main className={`App ${theme}`}>
      <div className="container">
        <UserInfo user={user} param={param} />
      </div>
    </main>
  );
};
