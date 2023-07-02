import React, { useState } from "react";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  email: string;
  password: string;
};
type Props = {
    loginHandler: (data:any) => void;
  };

function Login({loginHandler} : Props) {

  const schema: ZodType<FormData> = z
    .object({ 
      email: z.string().email(),
      password: z.string().min(5).max(20),
    })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleLogin = (data: FormData) => {
    loginHandler(data)
};

  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit(handleLogin)}>
     
        <label> Email: </label>
        <input type="email" {...register("email")} />
        {errors.email && <span> {errors.email.message}</span>}
       
        <label> Password: </label>
        <input type="password" {...register("password")} />
        {errors.password && <span> {errors.password.message}</span>}
       
        

        <input type="submit" />
      </form> */}

<form onSubmit={handleSubmit(handleLogin)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[50vw] text-start">
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
      Email
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
      id="email"
      type="email"
      {...register('email')}
    />
    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
  </div>
  <div className="mb-6">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
      Password
    </label>
    <input
      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
      id="password"
      type="password"
      {...register('password')}
    />
    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
  </div>
  <div className="flex items-center justify-between">
    <button className="bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Sign In
    </button>
  </div>
</form>
    </div>
  );
}

export default Login