import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  user: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quanity++;
      item.totalPrice = item.quanity * item.unitPrice;
      console.log(state.cart);
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quanity--;
      item.totalPrice = item.quanity * item.unitPrice;
      console.log(state.cart);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
