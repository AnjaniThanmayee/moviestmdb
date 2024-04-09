import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

const apiKey = "31dc015e0e80cee4de5d44faf077e921";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (!id) {
      setError("Movie ID is missing");
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
        setGenres(data.genres);
      })
      .catch((error) => {
        setError(error.message);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cast details");
        }
        return response.json();
      })
      .then((data) => {
        setCast(data.cast);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="movie-details-container">
      <div className="details-container">
        <div className="movie-details-content">
          <div className="movie-wo">
            <img
              src={`${imageBaseUrl}${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-poster-detail"
            />
            <div className="movie-info">
              <h2>{movieDetails.title}</h2>
              <p style={{ color: "wheat" }}>
                Rating: {movieDetails.vote_average}
              </p>

              <ul className="genre">
                {genres.map((genre) => (
                  <li key={genre.id} style={{ color: "wheat" }}>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <p style={{ color: "wheat" }}>
                Release Date: {movieDetails.release_date}
              </p>
            </div>
          </div>
          <h1>Overview </h1>
          <p style={{ color: "wheat" }}>{movieDetails.overview}</p>
        </div>
        <img
          src={`${imageBaseUrl}${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
          className="backdrop"
        />
      </div>
      <div className="cast-details">
        <h2
          style={{ marginLeft: "12px", marginTop: "0px", paddingTop: "10px" }}
        >
          Cast
        </h2>
        {cast.length === 0 ? (
          <p>No Cast found.</p>
        ) : (
          <div className="cast-list">
            {cast.map((actor) => (
              <div key={actor.id} className="actor">
                <img
                  src={`${imageBaseUrl}${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-image"
                />
                <p>{actor.name}</p>
                <p style={{ color: "wheat" }}>{actor.character}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
