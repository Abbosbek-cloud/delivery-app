import { IProduct } from "./product.interface";

export interface IOrder {
  id: string;
  productId: IProduct["id"];
  quantity: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface IOrderView extends Omit<IOrder, "createdAt" | "updatedAt"> {}

export interface IOrderRequest extends IOrderView {}

export interface IOrderResponse extends IOrderView {}
