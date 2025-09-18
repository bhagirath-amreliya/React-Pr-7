import React, { useState, useEffect } from "react";

const MovieForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    director: "",
    genre: "",
    movieTime: "",
    rating: "",
    poster: "",
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Movie Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Movie Description"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={form.director}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={form.genre}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="movieTime"
        placeholder="Movie Time (e.g. 2h 15m)"
        value={form.movieTime}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-10)"
        min="1"
        max="10"
        value={form.rating}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="poster"
        placeholder="Poster Image URL"
        value={form.poster}
        onChange={handleChange}
        required
      />
      <button type="submit"> Save</button>
    </form>
  );
};

export default MovieForm;
