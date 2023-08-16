import React, { lazy, Suspense } from "react";
import Accordion from "../components/Accordion";
const Products = lazy(() => import("../components/Products"));

const Shop = () => {
	return (
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
	);
};

export default Shop;
