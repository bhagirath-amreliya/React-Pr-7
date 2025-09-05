import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(stored);
  }, []);

  let deleteMovie = (id) => {
    let updated = movies.filter((m, i) => i !== id);
    setMovies(updated);
    localStorage.setItem("movies", JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr style={{textAlign: "center"}}>
              <th>Title</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m, i) => (
              <tr key={i}>
                <td>{m.title}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td style={{textAlign: "center"}}>
                  <Button as={Link} to={`/movie/${i}`} variant="btn btn-outline-info" size="sm" className="me-2">View</Button>
                  <Button as={Link} to={`/edit/${i}`} variant="btn btn-outline-warning" size="sm" className="me-2">Edit</Button>
                  <Button onClick={() => deleteMovie(i)} variant="btn btn-outline-danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>  
      )}
    </div>
  );
}

export default Home;