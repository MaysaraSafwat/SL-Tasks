import axiosInstance from "../utils/AxiosHelper";

export function getAllProducts() {
    return axiosInstance.get(`/products`).then((response) => response.data);
  }
  