import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 10 })); // action 1
store.dispatch(cartSlice.actions.addToCart({ id: 2, qty: 20 })); // action 2
