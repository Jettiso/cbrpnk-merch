import React from "react";
import { useState } from "react";
import useStore from "../ZuStore";

const SearchInput = () => {
	const [searchTerm, setSearchTerm] = useState("");
    const store = useStore();
    
if(searchTerm) {
    store.currentSearch = searchTerm;
}

    console.log(store.currentSearch)
	return (
		<div>
            <label htmlFor="form">Product Name</label>
			<input type='text' name="form" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
		</div>
	);
};

export default SearchInput;
