import React from "react";
import "./weather-info.css";

const WeatherInfo = ({ data }) => {
	return (
		<>
			{data && (
				<>
					<div className="temp">{Math.floor(data.main.temp)}&#176;</div>
					<div className="location">
						<div className="city">London</div>
						<div className="date">06:09 - Monday,9 Sep '19</div>
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
			)}
		</>
	);
};

export default WeatherInfo;
