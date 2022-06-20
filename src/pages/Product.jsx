import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../Responsive";
import { publicRequest } from "../requestMethod";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../Redux/Reducer/cartRedux";
import { add, remove } from "../Redux/Reducer/incDec";
const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${mobile({ height: "50vh" })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0 50px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	width: 50%;
	margin: 30px 0px;
	justify-content: space-between;
	${mobile({ width: "100%" })}
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;

const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;

const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	${mobile({ width: "100%", justifyContent: "space-between" })}
`;

const AmmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

const Ammount = styled.p`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;

const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-weight: 500;

	&:hover {
		background-color: #f8f4f4;
	}
`;

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [color, setProdColor] = useState([]);
	const [size, setProdSize] = useState([]);
	const [orderSize, setOrderSize] = useState("");
	const [orderColor, setOrderColor] = useState("");

	// Redux requirment
	const dispatch = useDispatch();
	const prodQuantity = useSelector((state) => state.changeNum.value);

	useEffect(() => {
		(async () => {
			try {
				const res = await publicRequest.get(`products/find/${id}`);
				setProduct(res.data);
				setProdColor(res.data.color);
				setProdSize(res.data.size);
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);

	const handleClick = () => {
		// update cart
		dispatch(
			addProduct({
				...product,
				prodQuantity,
				size: orderSize,
				color: orderColor,
				price: product.price * prodQuantity,
			})
		);
	};
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src={product.img} />
				</ImgContainer>
				<InfoContainer>
					<Title> {product.title} </Title>
					<Desc>{product.desc}</Desc>
					<Price>{`& ${product.price}`}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{color.map((c) => (
								<FilterColor
									color={c}
									key={c}
									onClick={() => {
										setOrderColor(c);
									}}
								/>
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize
								onChange={(e) => setOrderSize(e.target.value)}
							>
								{size.map((s) => (
									<FilterSizeOption key={s}>
										{s}
									</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmmountContainer>
							<Remove
								style={{ cursor: "pointer" }}
								onClick={() => {
									dispatch(remove());
								}}
							/>
							<Ammount>{prodQuantity}</Ammount>
							<Add
								style={{ cursor: "pointer" }}
								onClick={() => {
									dispatch(add());
								}}
							/>
						</AmmountContainer>
						<Button onClick={handleClick}>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};
export const {handleClick} = Product
export default Product;
