import { useEffect, useState } from "react";
import {NavLink, useNavigate,} from "react-router-dom";
import Loader from "../components/Loader";
import { getAllProducts } from "../services/ProductsApi";
import ProductTable from "../components/Datatable";

export default function Products (){
    const navigate = useNavigate();
  const[products, setProducts] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  

  const getProducts = async ()=>{
    try{
        let res = await getAllProducts() 
        console.log(res)
        setProducts(res.products);
        setIsLoading(false)
    }catch(err){
        console.log(err)
    }
    
  }
   const onEditClick = (id:number)=>{
    navigate(`/updateProduct/${id}`);
   }

   const onDeleteClick = (id:number)=> {
     console.log("DELETE THIS ", id)
   }
  useEffect(()=>{
    getProducts();
  },[])

    return (
    <div>
        <div className="flex justify-end m-4">
        <NavLink
        to={`/createProduct`}
        className="px-4 py-2 bg-blue-800 text-white rounded-md shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Product
      </NavLink>
        </div>
      
        {!isLoading ? (
            <div>
                 <ProductTable products={products} onEdit={onEditClick} onDelete={onDeleteClick} />
            </div>
        ) : 
        (
            <Loader size={50} loading={isLoading} message="Fetching Products"/>
        )}
    </div>)
}