import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Only include Header here
import HomeScreen from './screens/HomeScreen';
import MyListScreen from './screens/MyListScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';

const App = () => {
  const [myList, setMyList] = useState({ watched: [], toWatch: [] });
  const [filterType, setFilterType] = useState(''); // Set initial filter type

  const handleAddToList = (movie, status) => {
    setMyList((prevList) => {
      const updatedList = { ...prevList };
      if (!updatedList[status].find((m) => m.id === movie.id)) {
        updatedList[status].push(movie);
      }
      return updatedList;
    });
  };

  return (
    <Router>
      <Header addMovieToList={handleAddToList} setFilterType={setFilterType} />
      <Routes>
        <Route
          path="/"
          element={<HomeScreen myList={myList} addMovieToList={handleAddToList} filterType={filterType} />}
        />
        <Route path="/mylist" element={<MyListScreen myList={myList} />} /> {/* Ensure MyListScreen is here */}
        <Route path="/movie/:id" element={<MovieDetailsScreen addMovieToList={handleAddToList} />} />
      </Routes>
    </Router>
  );
};

export default App;
