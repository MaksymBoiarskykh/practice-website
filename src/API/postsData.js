import axios from "axios";
const link = "https://jsonplaceholder.typicode.com/posts";

export const postsData = async (page, limit = 7, url = link) => {
  const response = await axios.get(url, {
    params: {
      _limit: limit,
      _page: page,
    },
  });
  if (!response.ok) {
    throw new Error("invalid response");
  }
  return response.data;
};
