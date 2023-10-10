import React, { lazy, Suspense } from "react";
import Accordion from "../components/Accordion";
const Products = lazy(() => import("../components/Products"));
import useStore from "../ZuStore";

const Shop = () => {
	const store = useStore();

	

	const handleSelectChange = (event) => {
		const value = event.target.value;
		
		
		store.setPriceFilter(value)

	};
	

	
	return (
		<div>
			<div className='flex justify-between px-8 py-6'>
				<div>
					<span>CLOTHING / SWEATSHIRTS</span>
				</div>
				<div>
					<label htmlFor='price-filter'>$</label>
					<select name='price-filter' id='priceFilter' className='outline-none' onChange={handleSelectChange}>
						<option value='highToLow'>High To Low</option>
						<option value='lowToHigh'>Low to High</option>
					</select>
				</div>
			</div>
			<div className='grid grid-cols-10 p-6'>
				<div className='col-span-2'>{<Accordion />}</div>
				<div className='col-span-8 grid grid-cols-3 gap-6'>
					{
						<Suspense fallback={<div>Products loading...</div>}>
							<Products />
						</Suspense>
					}
				</div>
			</div>
		</div>
	);
};

export default Shop;
