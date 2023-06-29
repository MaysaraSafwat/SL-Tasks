import { WithId } from 'mongodb';
import * as z from 'zod';
import { db } from '../../db';


export const Product = z.object({
  name: z.string().min(3).max(150),
  price: z.number(),
  description : z.string(),
  image: z.any()
});

export type Product = z.infer<typeof Product>;
export type ProductWithId = WithId<Product>;
export const Products = db.collection<Product>('products');