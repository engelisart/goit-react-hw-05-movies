import { getTrening } from 'API/api';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Title } from '../components/Home/Home.styled';

const Home = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(1);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
};

export default Home;
