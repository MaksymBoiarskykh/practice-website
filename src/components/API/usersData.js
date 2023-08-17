import axios from "axios";
const link = "https://randomuser.me/api/";

export const usersData = async (usersGender = "", limit = 1, code = "") => {
  const response = await axios.get(link, {
    params: {
      results: limit,
      gender: usersGender,
      id: code,
    },
  });
  return response.data;
};

//   static async getPostInfo(id) {
//     const response = await axios.get(`${link}/${id}`);
//     return response;
//   }

//   static async getPostInfo(id) {
//     const response = await axios.get(`${link}/${id}/comments`);
//     return response;
//   }
