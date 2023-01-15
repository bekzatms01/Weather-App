import React, { useEffect, useState } from "react";
import PopularCities from "../PopularCities/PopularCities";
import Search from "../Search/Search";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherOfNextDays from "../WeatherOfNextDays/WeatherOfNextDays";
import "./weather.css";

const Weather = () => {
	const [data, setData] = useState(null);
	const [dataOfNextDays, setDataOfNextDays] = useState(null);
	const [query, setQuery] = useState("");

	const getData = (query) => {
		fetch(
			`${process.env.REACT_APP_API_URL}/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				setData(res);
				getDataOfNextDays(res.id);
			});
	};

	const getDataOfNextDays = (id) => {
		fetch(
			`${process.env.REACT_APP_API_URL}/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
		)
			.then((response) => response.json())
			.then((res) => {
				let arr = [];
				for (let i = 8; i < res.list.length; i += 8) {
					arr.push(res.list[i]);
				}
				setDataOfNextDays(arr);
			});
	};

	useEffect(() => {
		getData("Almaty");
	}, []);
	const searchHandler = () => {
		getData(query);
		setQuery("");
	};

	return (
		<div className="container">
			<div className="left">
				<WeatherInfo data={data} />
			</div>

			<div className="right">
				<Search
					query={query}
					setQuery={setQuery}
					searchHandler={searchHandler}
				/>
				<PopularCities getData={getData} />
				<hr />
				{data && <WeatherDetails data={data} />}
				<hr />
				{dataOfNextDays && (
					<WeatherOfNextDays dataOfNextDays={dataOfNextDays} />
				)}
			</div>
		</div>
	);
};

export default Weather;
