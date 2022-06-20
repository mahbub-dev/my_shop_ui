import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/Reducer/ApiCalls";
import { mobile } from "../Responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
		center;
	display: flex;
	background-size: cover;
	align-items: center;
	justify-content: center;
	opacity: 0.7;
	z-index: -1;
`;

const Wrapper = styled.div`
	width: 25%;
	padding: 20px;
	background-color: white;
	${mobile({ width: "75vw" })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	color: white;
	background-color: teal;
	cursor: pointer;
	margin-bottom: 10px;
	&:disabled{
		color:green;
		cursor: not-allowed;
	}
`;


const Link = styled.a`
	margin: 10px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Error = styled.span`
color: red;
`

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch()
	const {isFething, error} = useSelector((state) => state.user)

	const handleClick = (e) => {
		e.preventDefault()
		login(dispatch,{username,password})
	}
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input
						placeholder="Username"
						onChange={(e) => setUsername(e.target.value)}
					></Input>
					<Input
						placeholder="Password"
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					></Input>
					<Button onClick={handleClick} disabled={isFething}>LOGIN</Button>
					{error && <Error>Something went wrong...</Error>}
					<Link>DO NOT REMEMBER THE PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
