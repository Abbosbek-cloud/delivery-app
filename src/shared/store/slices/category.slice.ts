import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interfaces
import { ICategoryView } from "../../interfaces";

export interface ICategoryState {
  categories: ICategoryView[];
}

const initialState: ICategoryState = {
  categories: [
    {
      id: 1,
      name: "Pizzas",
      image: "/assets/categories/pizzas.png",
    },
    {
      id: 2,
      name: "Salads",
      image: "/assets/categories/salad.png",
    },
    {
      id: 3,
      name: "Desserts",
      image: "/assets/categories/dessert.png",
    },
    {
      id: 4,
      name: "Sides",
      image: "/assets/categories/sides.png",
    },
    {
      id: 5,
      name: "Drinks",
      image: "/assets/categories/drinks.png",
    },
  ],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoriesAction: (state, action: PayloadAction<ICategoryView[]>) => {
      state.categories = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoriesAction } = categorySlice.actions;

export default categorySlice;
