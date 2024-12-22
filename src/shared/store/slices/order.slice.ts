import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// interfaces
import { IOrderView } from "../../interfaces";

export interface IOrderState {
  orders: IOrderView[];
}

const initialState: IOrderState = {
  orders: [
    {
      id: "1",
      quantity: 1,
      productId: 1,
      price: 10,
    },
  ],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrRemoveOrderAction: (state, action: PayloadAction<IOrderView>) => {
      if (state.orders.find((order) => order.id === action.payload.id)) {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload.id
        );
      } else {
        state.orders = [...state.orders, action.payload];
      }
    },
    incrementOrderAction: (state, action: PayloadAction<IOrderView>) => {
      if (state.orders.find((order) => order.id === action.payload.id)) {
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id
            ? {
                ...order,
                quantity: order.quantity + 1,
                price: order.price + action.payload.price,
              }
            : order
        );
      } else {
        state.orders = [...state.orders, action.payload];
      }
    },
    decrementOrderAction: (state, action: PayloadAction<IOrderView>) => {
      if (state.orders.find((order) => order.id === action.payload.id)) {
        state.orders = state.orders.map((order) =>
          order.id === action.payload.id
            ? {
                ...order,
                quantity: order.quantity > 1 ? order.quantity - 1 : 1,
                price: order.price - action.payload.price,
              }
            : order
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addOrRemoveOrderAction, incrementOrderAction } =
  orderSlice.actions;

export default orderSlice;
