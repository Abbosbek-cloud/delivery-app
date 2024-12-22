import { configureStore } from "@reduxjs/toolkit";
import { authSlice, orderSlice, productSlice, categorySlice } from "./slices";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    order: orderSlice.reducer,
    product: productSlice.reducer,
    category: categorySlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
