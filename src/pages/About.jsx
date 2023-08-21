import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { postsData } from "../API/postsData";
import { useFetching } from "../hooks/useFetching";
import { Slider } from "../components/UI/Slider/Slider";
import { ListPosts } from "../components/ListPosts/ListPosts";
import sliderData from "../components/UI/Slider/data";
import { Loader } from "../components/UI/Loader/Loader";

export const About = () => {
  const theme = useSelector((state) => state.theme.value);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [getUsers, isloading, isError] = useFetching(async () => {
    const data = await postsData(page);
    setPosts([...posts, ...data]);
  });

  const addPosts = () => setPage(page + 1);

  useEffect(() => {
    getUsers();
  }, [page]);

  console.log(posts);

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
      <Slider data={sliderData} />
      {isloading && page === 1 ? (
        <Loader />
      ) : (
        <ListPosts posts={posts} addPosts={addPosts} />
      )}
    </main>
  );
};
