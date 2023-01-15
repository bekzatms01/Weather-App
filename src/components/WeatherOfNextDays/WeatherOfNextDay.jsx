import React from "react";
import "./weather-next-day.css";
const WeatherOfNextDay = ({ item }) => {
	return (
		<div className="detail">
			<h3>{item.dt_txt.slice(0, 10)}</h3>
			<p>{Math.floor(item.main.temp)}&#176;</p>
			<p>{item.weather[0].main}</p>
		</div>
	);
};

export default WeatherOfNextDay;
