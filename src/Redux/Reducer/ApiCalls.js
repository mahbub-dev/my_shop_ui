import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../../requestMethod";
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
		console.log(err);
	}
};

export const signup = async (username, email, password) => {
	try {
		const res = await publicRequest.post("/auth/register", {
			username,
			email,
			password,
		});
		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
