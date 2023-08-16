import React from "react";
import Accordion from "../components/Accordion";
import Products from "../components/Products";


const Shop = () => {
	return ( 
    <div className="grid grid-cols-10">
        <div className="col-span-2">{<Accordion />}</div>
        <div className="col-span-8 grid grid-cols-4 gap-6 p-6">{<Products />}</div>
    </div>
    );
};

export default Shop;
