import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MovieDetailsScreen = ({ addMovieToList }) => {
  const { id } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate(); // To navigate back

  // For demonstration, use a sample movie object (you can fetch actual data here)
  const movie = {
    id,
    title: 'Inception',
    type: 'movie',
    description: 'A mind-bending thriller about dream manipulation.',
    poster: 'https://example.com/inception.jpg',
  };

  const handleAddToList = (status) => {
    addMovieToList(movie, status); // Call addMovieToList from props
  };

  return (
    <div style={styles.container}>
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} style={styles.poster} />
      <p><strong>Type:</strong> {movie.type}</p>
      <p><strong>Description:</strong> {movie.description}</p>

      <div style={styles.buttons}>
        <button onClick={() => handleAddToList('toWatch')} style={styles.button}>Add to Watchlist</button>
        <button onClick={() => handleAddToList('watched')} style={styles.button}>Mark as Watched</button>
      </div>

      {/* Back button to navigate to the home screen */}
      <button onClick={() => navigate('/')} style={styles.backButton}>Back to Home</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  poster: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '5px',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  backButton: {
    padding: '10px 20px',
    marginTop: '20px',
    backgroundColor: '#ccc',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MovieDetailsScreen;
