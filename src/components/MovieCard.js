import React, { memo } from 'react';

const MovieCard = memo(({ movie, addMovieToList }) => {
  const handleAddToList = (status) => {
    addMovieToList(movie, status);
  };

  return (
    <div style={styles.card}>
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} style={styles.poster} />
      <div style={styles.buttons}>
        <button onClick={() => handleAddToList('toWatch')} style={styles.button}>Add to Watchlist</button>
        <button onClick={() => handleAddToList('watched')} style={styles.button}>Mark as Watched</button>
      </div>
    </div>
  );
});

const styles = {
  card: {
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '200px',
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
  buttons: {
    marginTop: '10px',
  },
  button: {
    padding: '10px',
    margin: '5px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default MovieCard;
