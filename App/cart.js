import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  exist: null,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const data = state.cart.some((d) => d?.name === action.payload.name);

      if (!data) {
        state.cart.push(action.payload.obj);
      } else {
        state.exist = true;
      }
    },

    addCount: (state, action) => {
      state.cart = state.cart.map((d) =>
        d.name === action.payload
          ? {
              ...d,
              count: d.count + 1,
              price: Number(d.price) + Number(d.calPrice),
            }
          : d
      );
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map((d) => {
        if (d.name === action.payload) {
          if (d.count > 1) {
            return {
              ...d,
              count: d.count - 1,
              price: Number(d.price) - Number(d.calPrice),
            };
          } else {
            return d;
          }
        }

        return d;
      });
    },

    closeExist: (state) => {
      state.exist = false;
    },
  },
});

export const { addCart, closeExist, addCount, decreaseCount } = cart.actions;

export const selectCart = (state) => state.cart.cart;
export const selectExit = (state) => state.cart.exist;

export default cart.reducer;
