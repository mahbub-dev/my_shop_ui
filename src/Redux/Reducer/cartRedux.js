import { createSlice } from "@reduxjs/toolkit";
export  const cartSlice = createSlice({
	name: "cart",
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
			state.quantity += 1;
			state.total += action.payload.price;
		},
	},
});
export  const {addProduct} = cartSlice.actions
export default cartSlice.reducer
