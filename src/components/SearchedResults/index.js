import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";

const apiKey = "31dc015e0e80cee4de5d44faf077e921";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const SearchedResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="upcoming-movies">
      <h1>Searched Results</h1>
      {searchResults.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="movie-list">
          {searchResults.map((movie) => (
            <div key={movie.id} className="movie-item">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </Link>
              <div className="movie-info">
                <h3>{movie.original_title}</h3>
                <p style={{ color: "wheat" }}>Rating: {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchedResults;
