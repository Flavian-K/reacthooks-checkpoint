import React from "react";

function Filter({ setTitleFilter, setRatingFilter }) {
	return (
		<div className="filter">
			<input
				type="text"
				placeholder="Search by title"
				onChange={(e) => setTitleFilter(e.target.value)}
			/>
			<input
				type="number"
				placeholder="Search by rating"
				onChange={(e) => setRatingFilter(Number(e.target.value))}
			/>
		</div>
	);
}

export default Filter;
