import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
	const [movies, setMovies] = useState([
		{
			title: "Inception",
			description: "A mind-bending thriller",
			posterURL: "https://image-url.com/inception.jpg",
			rating: 8.8,
		},
		{
			title: "Interstellar",
			description: "A journey through space and time",
			posterURL: "https://image-url.com/interstellar.jpg",
			rating: 8.6,
		},
		// Add more movie objects as needed
	]);

	const [titleFilter, setTitleFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState(0);

	const filteredMovies = movies.filter(
		(movie) =>
			movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
			movie.rating >= ratingFilter
	);

	const addMovie = (newMovie) => {
		setMovies([...movies, newMovie]);
	};

	return (
		<div className="App">
			<Filter
				setTitleFilter={setTitleFilter}
				setRatingFilter={setRatingFilter}
			/>
			<MovieList movies={filteredMovies} />
			{/* Add New Movie Form (optional) */}
		</div>
	);
}

export default App;
