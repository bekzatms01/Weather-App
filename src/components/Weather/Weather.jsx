import React, { useEffect, useState } from "react";
import PopularCities from "../PopularCities/PopularCities";
import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import "./weather.css";

const Weather = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid={api_key}"
		)
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setData(res);
			});
	}, []);

	return (
		<div className="container">
			<div className="left">
				<WeatherInfo data={data} />
			</div>
			<div className="right">
				<Search />
				<PopularCities />
				<hr />
				{data && <WeatherDetails data={data} />}
			</div>
		</div>
	);
};

export default Weather;
