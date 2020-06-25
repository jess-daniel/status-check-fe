const axios = require('axios');

const baseApi = process.env.REACT_APP_SERVER_HOST;
const token = localStorage.getItem('token');

const axiosWithAuth = () => {
  return axios.create({
    baseURL: baseApi,
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

module.exports = axiosWithAuth;
