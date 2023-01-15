import React from "react";
import "./weather-details.css";

const WeatherDetails = ({ data }) => {
	return (
		<div className="details">
			<h2>Weather Details</h2>
			{data.clouds.all > 0 && (
				<div className="detail">
					<h3>Clouds</h3>
					<p>{data.clouds.all}%</p>
				</div>
			)}

			<div className="detail">
				<h3>Humidity</h3>
				<p>{data.main.humidity}%</p>
			</div>

			<div className="detail">
				<h3>Wind</h3>
				<p>{Math.floor(data.wind.speed)}km/h</p>
			</div>
		</div>
	);
};

export default WeatherDetails;
