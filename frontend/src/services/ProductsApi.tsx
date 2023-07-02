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

  export function updateProduct(product: any, id:number){
    return axiosInstance.put(`/products/${id}`, product).then((response) => response.data); 
  }

  export function getProductById(id:number){
    return axiosInstance.get(`/products/${id}`).then((response) => response.data);
  }

  export function deleteProduct(id:number){
    return axiosInstance.delete(`/products/${id}`).then((response) => response.data);
  } 