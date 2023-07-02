import React, { useEffect, useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "./Loader";
import { getProductById, updateProduct } from "../services/ProductsApi";

type FormData = {
  title: string;
  description: string;
  category: string;
  price: number;
};

export default function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const schema: ZodType<FormData> = z.object({
    title: z.string().min(3).max(30),
    description: z.string().min(2).max(150),
    category: z.string().min(3).max(30),
    price: z.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitData = async (data: FormData) => {
    try {
      const response = await updateProduct(data, Number(id));
      console.log(response);
      navigate("/dashboard/products");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
        setIsLoading(false);
        setIsInitialized(true);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {product ? (
        <form onSubmit={handleSubmit(submitData)}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              value={isInitialized ? product.title : ""}
              {...register("title")}
              onChange={handleInputChange}
              name="title"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50vw] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.title && <span> {errors.title.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              value={isInitialized ? product.description : ""}
              {...register("description")}
              onChange={handleInputChange}
              name="description"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.description && <span> {errors.description.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <input
              value={isInitialized ? product.category : ""}
              {...register("category")}
              onChange={handleInputChange}
              name="category"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.category && <span> {errors.category.message}</span>}
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price
            </label>
            <input
              value={isInitialized ? product.price : ""}
              {...register("price", { valueAsNumber: true })}
              onChange={handleInputChange}
              name="price"
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            {errors.price && <span> {errors.price.message}</span>}
          </div>
          <input
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          />
        </form>
      ) : (
        <div>
          <Loader loading={isLoading} size={40} message="please wait" />
        </div>
      )}
    </>
  );
}
