import React from "react";

const AllProducts = ({...prop}) => {
    
    let all = prop.products;

    console.log(all)



    
	
		const allProds = all.map((product) => {
			return (
				<div
					className='flex flex-col bg-white hover:shadow-lg hover:scale-105 hover:transition-all dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]  max-w-xs'
					key={product.id}
				>
					<img className='w-full h-auto' src={product.img} alt={product.name} />
					<div className='p-4 md:p-5'>
						<h3 className='text-lg font-bold text-gray-800 dark:text-white'>{product.name}</h3>
						<p className='mt-1 text-gray-800 dark:text-gray-400'>{product.price}</p>
						<a
							className='mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
							href='#'
						>
							Buy Now
						</a>
					</div>
				</div>
			);
		});
	
        return allProds
};

export default AllProducts;
