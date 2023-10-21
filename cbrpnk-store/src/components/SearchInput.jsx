import React from "react";
import useStore from "../ZuStore";


const SearchInput = () => {
    const store = useStore();


	const handleInputChange = (event) => {
		const inputVal = event.target.value;
		store.setInputValue(inputVal);
	}

	return (
		<div>
			<input type='text' name="form" placeholder="Search for a product" value={store.currentSearch} onChange={handleInputChange} />
		</div>
	);
};

export default SearchInput;
