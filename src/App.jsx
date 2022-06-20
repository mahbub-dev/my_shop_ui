import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

// import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
	const user = useSelector(state=> state.user.currentUser);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Routes>
				<Route
					path="/products/:category"
					element={<ProductList />}
				/>
			</Routes>
			<Routes>
				<Route path="/product/:id" element={<Product />} />
			</Routes>
			<Routes>
				<Route path="/cart" element={<Cart />} />
			</Routes>
			<Routes>
				<Route
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
			<Routes>
				<Route
					path="/register"
					element={user ? <Navigate to="/" /> : <Register />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
