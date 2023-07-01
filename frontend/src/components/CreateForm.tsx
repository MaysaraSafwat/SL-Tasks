import React, { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
    name: string;
    description: string;
    price: number;
  };

export default function Form (){
    const [name, setName] = useState('hamdy');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

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
      
<form onSubmit={handleSubmit(submitData)}>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input {...register("name")}
    type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required/>
    {errors.name && <span> {errors.name.message}</span>}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input {...register("description")}
    type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    {errors.description && <span> {errors.description.message}</span>}
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
    <input {...register("price",  { valueAsNumber: true })}
    type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
    {errors.price && <span> {errors.price.message}</span>}
  </div>
  <input type="submit" className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"/>
</form>

    </>
    )
}