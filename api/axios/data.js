import axios from "./axios";

export const getData = () => {
  return axios.request({
    url: "/home/getData",
  });
};

export const getUserFormData = () => {
  return axios.request({
    url: "/user/getUserFormData",
  });
};
