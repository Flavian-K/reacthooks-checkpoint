import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
	return (
		<div className="movie-list">
			{movies.map((movie) => (
				<MovieCard
					key={movie.title}
					title={movie.title}
					description={movie.description}
					posterURL={movie.posterURL}
					rating={movie.rating}
				/>
			))}
		</div>
	);
}

export default MovieList;
