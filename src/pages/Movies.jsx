import { getMovies } from 'API/api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { List } from '../components/Movies/Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const movie = searchParams.get('query') || '';

    const loadMovies = async () => {
      const data = await getMovies(movie);
      setMovies(data.results);
    };

    loadMovies();
  }, [searchParams]);

  const handleChangeMovie = text => {
    //setMovie(text);
    setSearchParams({ query: text });
  };

  return (
    <>
      <SearchBar handleChangeMovie={handleChangeMovie} />
      <ul>
        {movies.map(movie => (
          <List key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title || movie.name}
            </Link>
          </List>
        ))}
      </ul>
    </>
  );
};

export default Movies;
