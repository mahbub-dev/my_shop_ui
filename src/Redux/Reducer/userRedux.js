import { createSlice } from "@reduxjs/toolkit";
export  const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
        isFething: false,
        error:false
	},
	reducers: {
         loginStart: (state) => {
             state.isFething = true
         },
         loginSuccess: (state, action) => {
            state.isFething = false;
            state.currentUser = action.payload
         },
         loginFailure: (state) => {
            state.isFething = false;
            state.error = true;
         }
	},
});
export  const {loginStart,loginSuccess,loginFailure} = userSlice.actions
export default userSlice.reducer
