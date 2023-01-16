import React from "react";
import "./weather-info.css";

const WeatherInfo = ({ data }) => {
	const getDate = () => {
		let options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		let today = new Date();
		let ans = today.toLocaleDateString("en-US", options);
		return ans;
	};
	return (
		<>
			<div className="temp">{Math.floor(data.main.temp)}&#176;</div>
			<div className="location">
				<div className="city">{data.name}</div>
				<div className="date">{getDate()}</div>
			</div>
			<div className="main-info">
				<div className="icon">
					<img
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt="icon"
					/>
				</div>
				<div className="act">{data.weather[0].main}</div>
			</div>
		</>
	);
};

export default WeatherInfo;
