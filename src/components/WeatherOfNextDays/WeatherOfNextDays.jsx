import React from "react";
import WeatherOfNextDay from "./WeatherOfNextDay";

const WeatherOfNextDays = ({ dataOfNextDays }) => {
	return (
		<div className="details">
			<h2>Next Days</h2>
			{dataOfNextDays.map((item) => {
				return <WeatherOfNextDay item={item} key={item.dt} />;
			})}
		</div>
	);
};

export default WeatherOfNextDays;
