import { configureStore } from "@reduxjs/toolkit";
import increaseAndDecreas from "./Reducer/incDec";
import cartReducer from "./Reducer/cartRedux";
import userReducer from "./Reducer/userRedux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
export const store = configureStore({
	reducer: {
		changeNum: increaseAndDecreas,
		cart: cartReducer,
		user: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export let persistor = persistStore(store)