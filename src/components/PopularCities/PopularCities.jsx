import React from "react";
import City from "./City/City";
import "./cities.css";

const cities = ["New York", "London", "Paris", "Astana"];

const PopularCities = () => {
	return (
		<div className="cities">
			{cities.map((item, idx) => {
				return <City city={item} key={idx} />;
			})}
		</div>
	);
};

export default PopularCities;
