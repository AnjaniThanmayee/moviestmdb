import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const apiKey = "31dc015e0e80cee4de5d44faf077e921";
const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

class Upcoming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  }

  render() {
    const { movies, error } = this.state;

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="upcoming-movies">
        <h1>Upcoming Movies</h1>
        <div className="movie-list">
          {movies.map((movie) => (
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
      </div>
    );
  }
}

export default Upcoming;
