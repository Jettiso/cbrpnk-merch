import React from "react";
import Accordion from "../components/Accordion";
import Products from "../components/Products";


const Shop = () => {
	return ( 
    <div className="grid grid-cols-8 gap-4">
        <div className="col-span-2">{<Accordion />}</div>
        <div className="col-span-6 flex">{<Products />}</div>
    </div>
    );
};

export default Shop;
