import React from "react";
import City from "./City/City";
import "./cities.css";

const cities = ["New York", "London", "Paris", "Astana"];

const PopularCities = ({ getData }) => {
	return (
		<div className="cities">
			{cities.map((item, idx) => {
				return <City city={item} key={idx} getData={getData} />;
			})}
		</div>
	);
};

export default PopularCities;
