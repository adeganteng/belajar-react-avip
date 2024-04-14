import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

export default store;