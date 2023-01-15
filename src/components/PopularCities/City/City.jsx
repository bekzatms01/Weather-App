import React from "react";

const City = ({ city, getData }) => {
	return (
		<div className="popular-city" onClick={() => getData(city)}>
			{city}
		</div>
	);
};

export default City;
