import React from "react";
import { useNavigate } from "react-router-dom";
import MovieForm from "../Components/MovieForm";

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();

  const handleAdd = (movie) => {
    addMovie(movie);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <MovieForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddMovie;
