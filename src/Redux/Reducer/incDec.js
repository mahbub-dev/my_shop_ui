import { createSlice } from "@reduxjs/toolkit";
const increaseAndDecreas = createSlice({
	name: "ChangeNum",
	initialState: {
		value: 1,
	},
	reducers: {
		add: (state, action) => {
			state.value += 1;
		},
		remove: (state, action) => {
			if (state.value > 1) {
				state.value -= 1;
			}
		},
	},
});

export const { add, remove } = increaseAndDecreas.actions;
export default increaseAndDecreas.reducer;
