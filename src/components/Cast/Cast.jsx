import { getMoviesCredits } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastTitle, ItemCast, ListCast } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState();

  useEffect(() => {
    const getCasts = async () => {
      const data = await getMoviesCredits(movieId);

      setCasts(data);
    };

    getCasts();
  }, [movieId]);

  return (
    <>
      <ListCast>
        {casts?.cast?.map(cast => (
          <ItemCast key={cast.id}>
            {cast?.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast?.profile_path}`}
                alt={cast?.name}
                width="300px"
                height="440px"
              />
            ) : (
              <img
                src={`https://placehold.co/300x440`}
                alt={cast?.name}
                width="300px"
                height="440px"
              />
            )}

            <CastTitle>{cast?.name}</CastTitle>
            <CastTitle>{`Character : ${cast?.character}`}</CastTitle>
          </ItemCast>
        ))}
      </ListCast>
    </>
  );
};

export default Cast;
