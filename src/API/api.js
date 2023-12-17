import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTk5MjJjNzA2ZDE5YjU4NWVmYzM5YmZiNmJlOWMzMiIsInN1YiI6IjY1NzliYjA0NGQyM2RkMDBlM2RlZDBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wlEJ_PeigLekgUaWj3EVoTX8j3ZhU3kLk8FJev0lAtQ';
axios.defaults.headers.Accept = 'application/json';
axios.defaults.params = {
  include_adult: true,
};

export const getTrening = async () => {
  const { data } = await axios.get('trending/all/day');
  return data;
};

export const getMovies = async query => {
  const { data } = await axios.get('search/movie', {
    params: {
      query,
      page: 1,
    },
  });

  return data;
};

export const getMoviesDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);
  return data;
};

export const getMoviesCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);
  return data;
};

export const getMoviesReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);
  return data;
};
