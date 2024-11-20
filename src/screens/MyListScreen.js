import React, { useState } from 'react';

const MyListScreen = ({ myList }) => {
  const [activeTab, setActiveTab] = useState('toWatch'); // Default to 'toWatch'

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={styles.container}>
      <h2>My List</h2>
      <div style={styles.tabs}>
        <button
          style={activeTab === 'toWatch' ? styles.activeTab : styles.tab}
          onClick={() => handleTabSwitch('toWatch')}
        >
          To Watch
        </button>
        <button
          style={activeTab === 'watched' ? styles.activeTab : styles.tab}
          onClick={() => handleTabSwitch('watched')}
        >
          Watched
        </button>
      </div>

      {/* Display Movies based on the active tab */}
      <div style={styles.movieList}>
        {activeTab === 'toWatch' ? (
          myList.toWatch.length > 0 ? (
            <div style={styles.scrollContainer}>
              {myList.toWatch.map((movie) => (
                <div key={movie.id} style={styles.movieCard}>
                  <img src={movie.poster} alt={movie.title} style={styles.poster} />
                  <p>{movie.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies in To Watch list.</p>
          )
        ) : (
          myList.watched.length > 0 ? (
            <div style={styles.scrollContainer}>
              {myList.watched.map((movie) => (
                <div key={movie.id} style={styles.movieCard}>
                  <img src={movie.poster} alt={movie.title} style={styles.poster} />
                  <p>{movie.title}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies in Watched list.</p>
          )
        )}
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
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  tab: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#ccc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activeTab: {
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
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    display: 'flex',
    overflowX: 'scroll',
    gap: '20px',
    padding: '10px',
    maxWidth: '100%',
  },
  movieCard: {
    textAlign: 'center',
    minWidth: '150px',
    marginBottom: '20px',
  },
  poster: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  },
};

export default MyListScreen;
