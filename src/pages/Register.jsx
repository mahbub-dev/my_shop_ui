import { useState } from "react";
import styled from "styled-components";
import { signup } from "../Redux/Reducer/ApiCalls";
import { mobile } from "../Responsive";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
		center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
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
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0 0;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	color: white;
	background-color: teal;
	cursor: pointer;
`;

const Register = () => {
	const [signupDetails, setSignupDetails] = useState({});
	const { username, email, password } = signupDetails;
	console.log(username, email, password);
	const handleClick = (e) => {
		e.preventDefault();
		signup(username, email, password);
	};
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form
					onChange={(e) =>
						setSignupDetails({
							...signupDetails,
							[e.target.name]: e.target.value,
						})
					}
				>
					<Input placeholder="First Name" name="firstname" />
					<Input placeholder="Last Name" name="lastname" />
					<Input placeholder="Username" name="username" />
					<Input placeholder="Email" name="email" />
					<Input
						placeholder="Password"
						name="password"
						type="password"
					/>
					<Input
						placeholder="Confirm Password"
						name="confirmpassword"
						type="password"
					/>

					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance with{" "}
						<b>PRIVACY POLICY</b>
					</Agreement>
					<Button onClick={handleClick}>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
