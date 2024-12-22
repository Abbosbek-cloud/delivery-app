import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interfaces
import { IProduct } from "../../interfaces";

export interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products: [
    {
      id: 1,
      name: "Margarita",
      price: 12,
      description: "Medium | Cheese , onion, and tomato pure",
      image: "/assets/products/margarita.png",
      category: {
        id: 1,
        name: "Pizza",
        image: "/assets/categories/pizza.png",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: 2,
      name: "Classic Pepporoni",
      price: 15,
      description:
        "Medium | Cheese, hungarian pepper, paneer, capsicum and onion",
      image: "/assets/products/classic-pepperoni.png",
      category: {
        id: 1,
        name: "Pizza",
        image: "/assets/categories/pizza.png",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: 3,
      name: "Chicken Supreme",
      price: 18,
      description: "Medium | Cheese , onion, and tomato pure",
      image: "/assets/products/chicken-supreme.png",
      category: {
        id: 1,
        name: "Pizza",
        image: "/assets/categories/pizza.png",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: 4,
      name: "Vegeterian",
      price: 24,
      description: "Medium | Cheese , onion, and tomato pure",
      image: "/assets/products/vegeterian.png",
      category: {
        id: 1,
        name: "Pizza",
        image: "/assets/categories/pizza.png",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
    {
      id: 5,
      name: "Cheese Burst",
      price: 19,
      description: "Medium | Cheese, onion, and tomato pure",
      image: "/assets/products/vegeterian.png",
      category: {
        id: 1,
        name: "Pizza",
        image: "/assets/categories/pizza.png",
        createdAt: "2024-01-01",
        updatedAt: "2024-01-01",
      },
      createdAt: "2024-01-01",
      updatedAt: "2024-01-01",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions;

export default productSlice;
