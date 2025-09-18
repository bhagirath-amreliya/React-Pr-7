import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "../Components/Movie";

const Home = ({ movies, deleteMovie }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  // filter + search
  const filteredMovies = movies
    .filter(
      (m) =>
        m.title.toLowerCase().includes(search.toLowerCase()) ||
        m.director.toLowerCase().includes(search.toLowerCase()) ||
        m.genre.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "rating") return b.rating - a.rating; // highest rating first
      if (sortBy === "time") return a.movieTime.localeCompare(b.movieTime);
      return 0;
    });

  return (
    <div>
      <div className="top-bar">
        <button className="btn-add" onClick={() => navigate("/add")}>
          ➕ Add Movie
        </button>

        <input
          type="text"
          placeholder="Search by title, director, genre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">Sort By</option>
          <option value="title">Title (A-Z)</option>
          <option value="rating">Rating (High → Low)</option>
          <option value="time">Movie Time</option>
        </select>
      </div>

      <div className="movie-list">
        {filteredMovies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} deleteMovie={deleteMovie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
