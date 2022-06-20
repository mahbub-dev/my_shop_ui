import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footeer from "../components/Footer";
import { mobile } from "../Responsive";
import { useLocation } from "react-router-dom";
const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;
const FiterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
	${mobile({ width: "0 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0" })}
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const ProductList = () => {
	const location = useLocation();
	const cat = location.pathname.split("/")[2];
	const [filters, setFilter] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (e) => {
		const value = e.target.value;
		setFilter({
			...filters,
			[e.target.name]: value,
		});
	};
	console.log(filters);
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>{cat}</Title>
			<FiterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select name="color" onChange={handleFilters}>
						<Option disabled>Color</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select name="size" onChange={handleFilters}>
						<Option disabled>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select
						name="sort"
						onChange={(e) => setSort(e.target.value)}
					>
						<Option value={'newest'}>Newest</Option>
						<Option value={'asc'}>Price (asc)</Option>
						<Option value={'desc'}>Price (desc)</Option>
					</Select>
				</Filter>
			</FiterContainer>
			<Products cat={cat} filters={filters} sort={sort} />
			<Newsletter />
			<Footeer />
		</Container>
	);
};

export default ProductList;
