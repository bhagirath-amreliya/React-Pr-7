import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddMovie from "./Pages/AddMovie";
import EditMovie from "./Pages/EditMovie";
import MovieDetails from "./Pages/MovieDetails";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, { id: Date.now(), ...movie }]);
  };

  const updateMovie = (id, updatedMovie) => {
    setMovies(movies.map((m) => (m.id === id ? updatedMovie : m)));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div className="container">
      <h1 className="app-title"> Book now Movie</h1>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} deleteMovie={deleteMovie} />}
        />
        <Route path="/add" element={<AddMovie addMovie={addMovie} />} />
        <Route
          path="/edit/:id"
          element={<EditMovie movies={movies} updateMovie={updateMovie} />}
        />
        <Route
          path="/details/:id"
          element={<MovieDetails movies={movies} />}
        />
      </Routes>
    </div>
  );
};

export default App;
