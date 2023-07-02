import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import Products from "./pages/Products"
import CreateProduct from "./pages/CreateProduct"
import UpdateProduct from "./pages/UpdateProduct"
import ErrorPage from "./pages/Error404"

export default function DashboardRoutes (){
    return (
      <div className="text-center">
        <Routes>
				<Route path="dashboard/products" element={<Products />} />
                <Route path="/createProduct" element={<CreateProduct/>}/>
                <Route path="/updateProduct/:id" element={<UpdateProduct/>}/>
                <Route path="*" element={<ErrorPage />} /> 
		</Routes>
     </div>
    )
}