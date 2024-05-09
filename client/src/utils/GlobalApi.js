import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.BASEURL,
});
// console.log(process.env.BASEURL);

const registerUser = async ({ name, username, email, password }) => {
  const response = await axiosClient.post('auth/register', {
    name,
    username,
    email,
    password,
  });
  console.log(response);
  return response.data;
};

const loginUser = async ({ email, password }) => {
  const response = await axiosClient.post('auth/login', {
    email,
    password,
  });
  // console.log(response);
  return response.data;
};

export default {
  registerUser,
  loginUser,
};
