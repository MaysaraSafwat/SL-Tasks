import axiosInstance from "../utils/AxiosHelper";

export function getAllProducts() {
    return axiosInstance.get(`/products`).then((response) => response.data);
  }
  
  export function createProduct(product:any) {
    console.log(product)
    return axiosInstance.post(`/products/add`, product).then((response) => response.data);
  }

  export function getPaginatedProducts (limit:number, skip:number) {
    return axiosInstance.get(`/products?limit=${limit}&skip=${skip}`).then((response)=> response.data)
  }