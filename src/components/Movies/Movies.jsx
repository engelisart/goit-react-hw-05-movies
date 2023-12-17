import { getMovies } from 'API/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List } from './Movies.styled';

const Movies = () => {
  const [movie, setMovie] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await getMovies(movie);
      setMovies(data.results);
    };

    loadMovies();
  }, [movie]);

  const handleChangeMovie = text => {
    setMovie(text);
  };

  return (
    <>
      <SearchBar handleChangeMovie={handleChangeMovie} />
      <ul>
        {movies.map(movie => (
          <List key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </List>
        ))}
      </ul>
    </>
  );
};

export default Movies;
