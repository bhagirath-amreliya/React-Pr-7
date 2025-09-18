import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie, deleteMovie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card">
      {movie.poster && (
        <img src={movie.poster} alt={movie.title} className="poster" />
      )}
      <div>
        <h2>{movie.title}</h2>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Time:</strong> {movie.movieTime}</p>
        <p><strong>⭐ Rating:</strong> {movie.rating}/10</p>
      </div>
      <div className="actions">
        <button onClick={() => navigate(`/details/${movie.id}`)}>View</button>
        <button onClick={() => navigate(`/edit/${movie.id}`)}>Edit</button>
        <button className="btn-delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Movie;
