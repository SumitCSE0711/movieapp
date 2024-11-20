import axios from 'axios';

const BASE_URL = 'https://api.rapidmock.com/api/vikuman/v1';

export const getMoviesList = async () => {
  const response = await axios.get(`${BASE_URL}/movies/all`);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/movies`, { params: { id } });
  return response.data;
};

export const addToWatchList = async (movieId, status) => {
  const response = await axios.post(`${BASE_URL}/mylist/add`, { movieId, status });
  return response.data;
};

export const getMyList = async () => {
  const response = await axios.get(`${BASE_URL}/mylist`);
  return response.data;
};
