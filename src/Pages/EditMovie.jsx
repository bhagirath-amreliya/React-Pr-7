import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MovieForm from "../Components/MovieForm";

const EditMovie = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === parseInt(id));

  const handleUpdate = (updatedData) => {
    updateMovie(movie.id, { ...movie, ...updatedData });
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      {movie ? (
        <MovieForm onSubmit={handleUpdate} initialData={movie} />
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default EditMovie;
