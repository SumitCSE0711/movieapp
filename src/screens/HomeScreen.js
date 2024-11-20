import React, { useState, useEffect } from 'react';
import { getMoviesList } from '../services/api'; 
import MovieCard from '../components/MovieCard';

const HomeScreen = ({ myList, addMovieToList, filterType, setFilterType }) => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await getMoviesList();
    setMovies(data);
  };

  // Filter movies based on search text and filterType
  const filteredMovies = movies
    .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())) // Filter by search text
    .filter((movie) => (filterType ? movie.type === filterType : true)); // Filter by filterType (movies or shows)

  return (
    <div style={styles.container}>
      <h2>Home Screen</h2>
      <input
        type="text"
        placeholder="Search Movies..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={styles.searchInput}
      />
      <div style={styles.buttons}>
        <button onClick={() => setFilterType('movie')} style={styles.filterButton}>Filter Movies</button>
        <button onClick={() => setFilterType('show')} style={styles.filterButton}>Filter Shows</button>
      </div>
      <div style={styles.movieList}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} addMovieToList={addMovieToList} />
        ))}
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
  searchInput: {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  filterButton: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
};

export default HomeScreen;
