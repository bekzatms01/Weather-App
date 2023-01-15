import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const Search = ({ query, setQuery, searchHandler }) => {
	return (
		<div className="search">
			<input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						searchHandler();
					}
				}}
				placeholder="Search..."
			/>

			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				style={{ width: "25px", height: "25px" }}
				className="btn"
				onClick={searchHandler}
			/>
		</div>
	);
};

export default Search;
