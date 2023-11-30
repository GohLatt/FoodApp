import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const data = state.cart.map((d) => d.name);

      state.cart.push(action.payload.obj);
    },
  },
});

export const { addCart } = cart.actions;

export const selectCart = (state) => state.cart.cart;

export default cart.reducer;
