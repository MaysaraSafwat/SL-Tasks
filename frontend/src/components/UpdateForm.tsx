import React, { useEffect, useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./Loader";

type FormData = {
    name: string;
    description: string;
    price: number;
  };

export default function UpdateForm (){
   const[product, setProduct] = useState({
    name: 'Product1',
    description: "New Description",
    price: '25'
   })
   //const [product, setProduct]:any= useState(null)
   const[isLoading, setIsLoading] = useState(true)

    const schema: ZodType<FormData> = z
    .object({
      name: z.string().min(3).max(30),
      description: z.string().min(2).max(150),
      price: z.number()
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(schema),
      });

      const submitData = (data: FormData) => {
      console.log("IT WORKED", data);
      };

    return(
    <>
      { product ? 
(<form onSubmit={handleSubmit(submitData)}>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input value={ product.name}
    {...register("name")}
    type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required/>
    {errors.name && <span> {errors.name.message}</span>}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input value={product.description}
    {...register("description")}
    type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    {errors.description && <span> {errors.description.message}</span>}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input value={product.price}
    {...register("price",  { valueAsNumber: true })}
    type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    {errors.price && <span> {errors.price.message}</span>}
  </div>
  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"/>
</form>)
 : (
        <div>
            <Loader loading={isLoading} size={40} message="please wait"/>
        </div>
    )}
    </>
    )
}