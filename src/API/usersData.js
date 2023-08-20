import axios from "axios";
const linkUser = "https://randomuser.me/api/";

export const usersData = async (usersGender = "", limit = 1) => {
  const response = await axios.get(linkUser, {
    params: {
      results: limit,
      gender: usersGender,
    },
  });
  return response.data;
};
