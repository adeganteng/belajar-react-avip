import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// Add to cart reducer
const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

// Login Reducer
const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({status : false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    })
})

const store = configureStore({
    reducer: {
      login: loginReducer,
    cart: cartReducer,
  },
});

console.log("Oncreate store: ", store.getState());

store.subscribe(() => {
  console.log("Store Change: ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 10 })); //action 1
store.dispatch(addToCart({ id: 2, qty: 20 })); //action 2
store.dispatch(login({ username: "admin", password: "admin" }));//action 3