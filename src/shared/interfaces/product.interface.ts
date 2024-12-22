import { ICategory } from "./category.interface";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: ICategory;
  createdAt: string;
  updatedAt: string;
}

export interface IProductView
  extends Omit<IProduct, "createdAt" | "updatedAt"> {}

export interface IProductRequest extends IProductView {}

export interface IProductResponse extends IProductView {}
