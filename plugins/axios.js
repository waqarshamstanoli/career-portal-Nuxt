import Vue from "vue";
import axios from "axios";
import { API_END_POINT } from "@/config/index.js";

const service = axios.create({
  baseURL: API_END_POINT,
});

service.interceptors.response.use(
  (response) => {
    // let token = response.data.token;
    let token = "$2y$10$yqDMxsdC1TxaRWNH5dlnyekibP6KLJ3rq6Tqv3BCssXTWMLYGyYCK";
    if (token) {
      localStorage.setItem("token", token);
    }
    return response;
  },
  (error) => {
    const errorMsg = error.response.data.message;

    console.log(error.response);

    Vue.notify({
      group: "backend-error",
      title: "Error",
      text: errorMsg || "Something went wrong...!",
      type: "error",
      duration: 5000,
    });

    // localStorage.removeItem("token");
    return Promise.reject(error);
  }
);

service.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    let token = "$2y$10$yqDMxsdC1TxaRWNH5dlnyekibP6KLJ3rq6Tqv3BCssXTWMLYGyYCK";
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    Vue.notify({
      group: "backend-error",
      title: "Error",
      text: error.response.data.msg || "Something went wrong...!",
      type: "error",
      duration: 5000,
    });

    // localStorage.removeItem("token");
    return Promise.reject(error);
  }
);

export default service;
