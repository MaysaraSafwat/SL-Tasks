import { ObjectId } from 'mongodb';
import * as z from 'zod';

export const ParamsId = z.object({
  id: z.string().min(1).refine((val) => {
    try {
      return new ObjectId(val);
    } catch (error) {
      return false;
    }
  }, {
    message: 'Invalid ObjectId',
  }),
});

export type ParamsId = z.infer<typeof ParamsId>;