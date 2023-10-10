import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../ZuStore";
import AllProducts from "./AllProducts";



const Products = () => {

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get("./products.json");
			const items = await response.data;

			return setProducts(items);
		};
		fetchProducts();
	}, []);

	const [products, setProducts] = useState([]);


	
	const store = useStore();

	const category = products.filter(item => {
		return item.category === store.currentCategory;
	});




	const isAllCategory = store.currentCategory === "all";

	
	return (
		<>
			<AllProducts products={isAllCategory ? products : category} />
		</>
	); 	
};

export default Products;
