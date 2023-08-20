import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { usersData } from "../API/usersData";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../components/UI/Loader/Loader";
import { ListUsers } from "../components/ListUsers/ListUsers";
import { useFiltering } from "../hooks/useFiltering";
import { FilterBlock } from "../components/FilterBlock/FilterBlock";

const Users = () => {
  const theme = useSelector((state) => state.theme.value);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ sort: "", find: "", gender: "" });
  // hook for processing requests to the server
  const [getUsers, isloading, isError] = useFetching(async () => {
    const users = await usersData(filter.gender, 50);
    setData(users.results);
  });

  useEffect(() => {
    getUsers();
  }, [filter.gender]);

  const sortedAndFilteredData = useFiltering(data, filter.sort, filter.find);

  if (isError) {
    return (
      <>
        <h1 className="MassageText">problem with a server...</h1>
        <Loader />
      </>
    );
  }
  return (
    <main className={`App ${theme}`}>
      <FilterBlock param={filter} setParam={setFilter} />
      {isloading ? <Loader /> : <ListUsers list={sortedAndFilteredData} />}
    </main>
  );
};

export { Users };
