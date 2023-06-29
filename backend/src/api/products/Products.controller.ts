import { Response, Request, NextFunction } from 'express';
import { Product, Products, ProductWithId } from "./Products.model";
import { ObjectId } from 'mongodb';
import {ParamsId }from "../../interfaces/ParamId"
import * as z from 'zod';


export async function getAllProducts(req: Request, res: Response<ProductWithId[]>, next: NextFunction) {
    try {
      const products = await Products.find().toArray();
      res.json(products);
    } catch (error) {
      next(error);
    }
  }

  export async function createProduct(req: Request<{}, ProductWithId, Product>, res: Response<ProductWithId>, next: NextFunction) {
    try {
        console.log(req.body)
      const insertResult = await Products.insertOne(req.body);
      if (!insertResult.acknowledged) throw new Error('Error inserting Product.');
      res.status(201);
      res.json({
        _id: insertResult.insertedId,
        ...req.body,
      });
    } catch (error) {
      next(error);    
    }
  }  

  export async function getProduct(req: Request<ParamsId , ProductWithId, {}>, res: Response<ProductWithId>, next: NextFunction) {
    try {
      const result = await Products.findOne({
        _id: new ObjectId(req.params.id),
      });
      if (!result) {
        res.status(404);
        throw new Error(`Product with id "${req.params.id}" not found.`);
      }
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  export async function updateProduct(req: Request<ParamsId, ProductWithId, Product>, res: Response<ProductWithId>, next: NextFunction) {
    try {
      const result = await Products.findOneAndUpdate({
        _id: new ObjectId(req.params.id),
      }, {
        $set: req.body,
      }, {
        returnDocument: 'after',
      });
      if (!result.value) {
        res.status(404);
        throw new Error(`Product with id "${req.params.id}" not found.`);
      }
      res.json(result.value);
    } catch (error) {
      next(error);
    }
  }

  export async function deleteProduct(req: Request<ParamsId, {}, {}>, res: Response<{}>, next: NextFunction) {
    try {
      const result = await Products.findOneAndDelete({
        _id: new ObjectId(req.params.id),
      });
      if (!result.value) {
        res.status(404);
        throw new Error(`Product with id "${req.params.id}" not found.`);
      }
      res.status(204).json("Product deleted successfully.").end();
    } catch (error) {
      next(error);
    } 
  }