import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails, addToWatchList } from '../services/api';

const DetailsScreen = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(id);
        setDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error.message);
      }
    };

    fetchDetails();
  }, [id]);

  const handleAddToList = async (status) => {
    await addToWatchList(id, status);
    alert(`Added to ${status}`);
  };

  if (!details) return <p>Loading...</p>;

  return (
    <div style={styles.container}>
      <h2>{details.title}</h2>
      <div style={styles.movieDetails}>
        <img src={details.poster} alt={details.title} style={styles.poster} />
        <div style={styles.info}>
          <p><strong>Description:</strong> {details.description}</p>
          <p><strong>Rating:</strong> {details.rating}/10</p>
          <p><strong>Genre:</strong> {details.genre}</p>
          <button onClick={() => handleAddToList('To Watch')} style={styles.addButton}>Add to Watchlist</button>
          <button onClick={() => handleAddToList('Watched')} style={styles.addButton}>Mark as Watched</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  movieDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  poster: {
    width: '300px',
    height: 'auto',
    borderRadius: '5px',
  },
  info: {
    maxWidth: '600px',
    marginLeft: '20px',
  },
  addButton: {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DetailsScreen;
