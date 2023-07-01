import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import Products from "./pages/Products"
import CreateProduct from "./pages/CreateProduct"
import UpdateProduct from "./pages/UpdateProduct"

export default function DashboardRoutes (){
    return (
        <Routes>
				<Route path="dashboard/products" element={<Products />} />
                <Route path="/createProduct" element={<CreateProduct/>}/>
                <Route path="/updateProduct" element={<UpdateProduct/>}/>
			
		</Routes>
    )
}