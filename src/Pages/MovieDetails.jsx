import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      {movie.poster && (
        <img src={movie.poster} alt={movie.title} className="poster-large" />
      )}
      <h2>{movie.title}</h2>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Movie Time:</strong> {movie.movieTime}</p>
      <p><strong>⭐ Rating:</strong> {movie.rating}/10</p>
      <button onClick={() => navigate("/")}>⬅ Back</button>
    </div>
  );
};

export default MovieDetails;
