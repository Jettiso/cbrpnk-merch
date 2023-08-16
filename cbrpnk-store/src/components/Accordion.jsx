import React from "react";
import useStore from "../ZuStore";


const Accordion = () => {

	const store = useStore();


	const handleClickCategoryChange = (event) => {
		const category = event.target.dataset.category;
		store.setCurrentCategory(category);

	};

	return (
		<>
			<div className='hs-accordion-group pr-6'>
				<div className='hs-accordion active' id='hs-basic-heading-one'>
					<button
						className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 text-xl'
						aria-controls='hs-basic-collapse-one'
					>
						<svg
							className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.62421 7.86L13.6242 7.85999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M8.12421 13.36V2.35999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						<svg
							className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.62421 7.86L13.6242 7.85999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						CLOTHING
					</button>
					<div
						id='hs-basic-collapse-one'
						className='hs-accordion-content w-full overflow-hidden transition-[height] duration-300'
						aria-labelledby='hs-basic-heading-one'
					>
						<div className='pb-4 flex flex-col items-start px-8 '>
							<button
								data-category='hoodie'
								className='hover:font-semibold text-lg' onClick={handleClickCategoryChange}
							>
								Hoodies
							</button>
							<button data-category='tees' className='hover:font-semibold text-lg'  onClick={handleClickCategoryChange}>
								T-shirts
							</button>
							<button data-category='sweatshirts' className='hover:font-semibold text-lg'  onClick={handleClickCategoryChange}>
								Sweatshirts
							</button>
						</div>
					</div>
				</div>

				<div className='hs-accordion' id='hs-basic-heading-two'>
					<button
						className='hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-sm text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 text-xl'
						aria-controls='hs-basic-collapse-two'
					>
						<svg
							className='hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.62421 7.86L13.6242 7.85999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
							<path
								d='M8.12421 13.36V2.35999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						<svg
							className='hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400'
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2.62421 7.86L13.6242 7.85999'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
						MISCELLANEOUS
					</button>
					<div
						id='hs-basic-collapse-two'
						className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'
						aria-labelledby='hs-basic-heading-two'
					>
						<div className='pb-4 flex flex-col items-start px-8 '>
							<button data-category='bags' className='hover:font-semibold text-lg'  onClick={handleClickCategoryChange}>
								Bags
							</button>
							<button data-category='posters' className='hover:font-semibold text-lg'  onClick={handleClickCategoryChange}>
								Posters
							</button>
							<button data-category='puzzles' className='hover:font-semibold text-lg'  onClick={handleClickCategoryChange}>
								Puzzles
							</button>
						</div>
					</div>
					<button data-category='cases' className='text-xl text-gray-300 hover:text-gray-500 active:text-blue-600 font-semibold px-6 py-4' onClick={handleClickCategoryChange}>
						PHONE CASES
					</button>
				</div>
			</div>
		</>
	);
};

export default Accordion;
