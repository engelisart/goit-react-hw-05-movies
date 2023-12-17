import { getTrening } from 'API/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { List, Title } from './Home.styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const data = await getTrening();
      setMovies(data.results);
    };

    loadTrending();
  }, [page, query]);

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default Home;
