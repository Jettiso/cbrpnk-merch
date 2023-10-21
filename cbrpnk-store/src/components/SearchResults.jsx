

const SearchResults = (results) => {

	const res = results.result;

	const mappedRes = res.map(item => {
		const product = item.item
		const {name, price, id, img} = product;

		
		return  {name, price, id, img};


	})


	const allItems = mappedRes.map(item => {
		return (
			<div
					className='flex flex-col bg-white hover:shadow-lg hover:scale-105 hover:transition-all dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]  max-w-xs'
					key={item.id}
				>
					<img className='w-full h-auto' src={item.img} alt={item.name} />
					<div className='p-4 md:p-5'>
						<h3 className='text-lg font-bold text-gray-800 dark:text-white'>{item.name}</h3>
						<p className='mt-1 text-gray-800 dark:text-gray-400'>${item.price}</p>
						<a
							className='mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
							href='#'
						>
							Buy Now
						</a>
					</div>
				</div>
		)
	})
	return allItems;
};

export default SearchResults;
