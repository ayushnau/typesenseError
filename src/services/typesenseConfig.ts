/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as axios from "axios";

let axiosObjectTypesense: any = axios.default.create();

axiosObjectTypesense.defaults.baseURL = `https://wjp8hi2lum07e5yrp-1.a1.typesense.net`;

axiosObjectTypesense.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosObjectTypesense.interceptors.response.use(
  function (response: any) {
    return response;
  },
  function (error: any) {
    if (error.message.includes("500")) {
      console.log("server error!");
    } else if (error.message.includes("403")) {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export { axiosObjectTypesense };
