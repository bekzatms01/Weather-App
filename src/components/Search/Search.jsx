import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./search.css";

const Search = () => {
	return (
		<div className="search">
			<input type="text" placeholder="Search..." />

			<FontAwesomeIcon
				icon={faMagnifyingGlass}
				style={{ width: "25px", height: "25px" }}
				className="btn"
			/>
		</div>
	);
};

export default Search;
