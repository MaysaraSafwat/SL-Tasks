// import { Schema, model } from "mongoose";
//   import zod from "zod";
  
//   const productSchema = new Schema({
//     name: zod.string().min(3).max(150),
//     description: zod.string(),
//     price : zod.number(),
//     image: zod.string(),
//   });
  
//   // Use Zod to validate the schema
//   productSchema.static("validate", async (productData: any) => {
//     return await zod.object(productSchema).parse(productData);
//   });
  
//   // Create a model from the schema
//   const Product = model<ProductSchema>("Product", productSchema);
  
//   export { Product };  

import { WithId } from 'mongodb';
import * as z from 'zod';
import { db } from '../../db';

export const Product = z.object({
  name: z.string().min(3).max(150),
  price: z.number(),
  description : z.string(),
  image: z.string()
});

export type Product = z.infer<typeof Product>;
export type ProductWithId = WithId<Product>;
export const Products = db.collection<Product>('products');