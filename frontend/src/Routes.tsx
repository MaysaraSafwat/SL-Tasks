import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import Products from "./pages/Products"
import CreateProduct from "./pages/CreateProduct"

export default function DashboardRoutes (){
    return (
        <Routes>
				<Route path="dashboard/products" element={<Products />} />
                <Route path="/createProduct" element={<CreateProduct/>}/>
			
		</Routes>
    )
}