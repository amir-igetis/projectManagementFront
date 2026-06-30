
// import axios from 'axios';
// const LOCALHOST='http://localhost:5054'

// export const API_BASE_URL = LOCALHOST

// const api = axios.create({
//   baseURL: API_BASE_URL,
// });

// const token = localStorage.getItem('jwt');

// api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

// api.defaults.headers.post['Content-Type'] = 'application/json';

// export default api;

import axios from "axios";

export const API_BASE_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;

// import axios from "axios"

// export const API_BASE_URL = "http://localhost:5454"
// // export const API_BASE_URL = "http://localhost:8080"




// const api = axios.create({ baseURL: API_BASE_URL })

// const jwt = localStorage.getItem("jwt");

// api.defaults.headers.common["Authorization"] = `Bearer ${jwt}`
// api.defaults.headers.post["Content-Type"] = "application/json";

// export default api

// import axios from "axios"

// export const API_BASE_URL = "http://localhost:5454"

// // Create axios instance with base config
// const api = axios.create({
//     baseURL: API_BASE_URL,
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// // Function to set token for all future requests
// export const setAuthToken = (token) => {
//     if (token) {
//         localStorage.setItem("jwt", token)
//         api.defaults.headers.common["Authorization"] = `Bearer ${token}`
//     } else {
//         localStorage.removeItem("jwt")
//         delete api.defaults.headers.common["Authorization"]
//     }
// }

// // Get initial token from localStorage if exists
// const initialToken = localStorage.getItem("jwt")
// if (initialToken) {
//     api.defaults.headers.common["Authorization"] = `Bearer ${initialToken}`
// }

// export default api