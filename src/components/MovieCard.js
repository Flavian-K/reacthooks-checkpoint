import React from "react";

function MovieCard({ title, description, posterURL, rating }) {
	return (
		<div className="movie-card">
			<img src={posterURL} alt={title} />
			<h2>{title}</h2> {/* Displays the movie title */}
			<p>{description}</p> {/* Displays the movie description */}
			<p>Rating: {rating}</p> {/* Displays the movie rating */}
		</div>
	);
}

export default MovieCard;
