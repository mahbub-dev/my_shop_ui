import {
	Facebook,
	Instagram,
	MailOutline,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
	display: flex;
	${mobile({flexDirection:'column'})}
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialICon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({display:'none'})}
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({backgroundColor:'#fcf1f1'})}
`;
const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	width: 50%;
`;
const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>MAHBUB</Logo>
				<Desc>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Maiores cum sit voluptatum quas praesentium aliquam corporis
					voluptatem eos. Vel totam cumque reiciendis quod nisi sed,
					praesentium quam voluptates a eligendi?
				</Desc>
				<SocialContainer>
					<SocialICon color="3B5999">
						<Facebook />
					</SocialICon>
					<SocialICon color="E4405F">
						<Instagram />
					</SocialICon>
					<SocialICon color="55ACEE">
						<Twitter />
					</SocialICon>
					<SocialICon color="E60023">
						<Pinterest />
					</SocialICon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight:'10px'}} />
					6320 Rohanpur, Chapinawabganj,BD
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight:'10px'}}/>
					+1 234 56 78
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight:'10px'}}/>
					hsmahbub@dev.com
				</ContactItem>
				<Payment src="https://amref.org/wp-content/uploads/2017/10/pay-paypla.png" />
			</Right>
		</Container>
	);
};

export default Footer;
