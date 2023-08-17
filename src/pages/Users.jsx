import { useState, useEffect } from "react";
import { usersData } from "../components/API/usersData";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../components/UI/Loader/Loader";
import { ListUsers } from "../components/ListUsers/ListUsers";
import { useFiltering } from "../hooks/useFiltering";
import { FilterBlock } from "../components/FilterBlock/FilterBlock";

const Users = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ sort: "", find: "", gender: "" });
  const [getUsers, isloading, isError] = useFetching(async () => {
    const users = await usersData(filter.gender, 50);
    setData(users.results);
  });

  useEffect(() => {
    getUsers();
  }, [filter.gender]);

  const sortedAndFilteredData = useFiltering(data, filter.sort, filter.find);

  return (
    <div className="App">
      <FilterBlock param={filter} setParam={setFilter} />
      {isloading ? <Loader /> : <ListUsers list={sortedAndFilteredData} />}
    </div>
  );
};

export { Users };
