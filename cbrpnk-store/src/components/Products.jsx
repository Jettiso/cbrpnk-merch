import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get("./products.json");
			const items = await response.data;

			setProducts(items);
		};
		fetchProducts();
	}, []);

	return (
		<>
			{products.map((product) => {

				return (
					<div className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]  max-w-xs' key={product.id}>
						<img
							className='w-full h-auto rounded-t-xl'
							src='https://res.cloudinary.com/dp1rpqkjb/image/upload/v1690710110/bags/girl_cotton_tote_bag_gwjv1z.jpg'
							alt={product.name}
						/>
						<div className='p-4 md:p-5'>
							<h3 className='text-lg font-bold text-gray-800 dark:text-white'>{product.name}</h3>
							<p className='mt-1 text-gray-800 dark:text-gray-400'>
								{product.price}
							</p>
							<a
								className='mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
								href='#'
							>
								Buy Now
							</a>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Products;
