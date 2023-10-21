import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "../ZuStore";
import AllProducts from "./AllProducts";
import SearchResults from "./SearchResults";
import Fuse from "fuse.js";

const Products = () => {
	const [products, setProducts] = useState([]);
	const store = useStore();

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get("./products.json");
			const items = await response.data;

			return setProducts(items);
		};
		fetchProducts();
	}, []);


	const category = products.filter((item) => {
		return item.category === store.currentCategory;
	});

	const fuse = new Fuse(products, {
		keys: ["name", "price"],
	});

	

	const res = fuse.search(store.currentSearch)



	const isAllCategory = store.currentCategory === "all";


	

	return (
		<>
		<SearchResults result={res}/> 
		{/* <AllProducts products={isAllCategory ? products : category} /> */}
		</>
	);
};

export default Products;
