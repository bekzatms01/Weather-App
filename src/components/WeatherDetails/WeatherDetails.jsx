import React from "react";
import "./weather-details.css";

const WeatherDetails = ({ data }) => {
	return (
		<div className="details">
			<h2>Weather Details</h2>
			<div className="detail">
				<h3 className="title">{data.weather[0].main}</h3>
				<p className="percent">{data.clouds.all}%</p>
			</div>
			<div className="detail">
				<h3 className="title">Humidity</h3>
				<p className="percent">{data.main.humidity}%</p>
			</div>

			<div className="detail">
				<h3 className="title">Wind</h3>
				<p className="percent">{Math.floor(data.wind.speed)}km/h</p>
			</div>
		</div>
	);
};

export default WeatherDetails;
