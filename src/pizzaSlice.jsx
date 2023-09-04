import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toppings: ["pepporoni"],
  gluten: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    toggleGluten: (state) => {
      state.gluten = !state.gluten;
    },
    addTopping: (state, action) => {
      state.toppings = [...state.toppings, action.payload];
    },
  },
});

export const { toggleGluten, addTopping } = pizzaSlice.actions;

export default pizzaSlice.reducer;
