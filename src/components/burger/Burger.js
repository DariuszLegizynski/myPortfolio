import React from "react";

import "./Burger.css";

const Burger = ({ burgerClass }) => {
	return (
		<div className={`burger burger${burgerClass}`}>
			<div className="burger__stick"></div>
		</div>
	);
};

export default Burger;
