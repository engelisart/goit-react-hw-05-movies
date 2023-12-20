import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMoviesDetails } from 'API/api';
import { useEffect, useState } from 'react';
import {
  BtnGoBack,
  ImgTitle,
  Information,
  Movie,
  StInformationTitle,
  StNavLink,
  TitleText,
} from '../components/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  useEffect(() => {
    const loadMovieDetails = async () => {
      const data = await getMoviesDetails(movieId);
      setDetails(data);
    };

    loadMovieDetails();
  }, [movieId]);

  return (
    <>
      <Movie>
        <BtnGoBack
          onClick={() => {
            navigate(location.state ?? '/movies');
          }}
        >
          Go Back
        </BtnGoBack>
        <ImgTitle>
          <img
            src={
              details?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${details?.poster_path}`
                : `https://placehold.co/300x440`
            }
            alt={details?.title || details?.name}
            width="300px"
          />
          <TitleText>
            <h2>{details?.title || details?.name}</h2>
            <p>User score : {details?.vote_average.toFixed(1)}/10</p>
            <h3>Overview</h3>
            <p>{details?.overview}</p>
            <h3>Genres</h3>
            <p>{details?.genres.map(genre => `${genre.name} `)}</p>
          </TitleText>
        </ImgTitle>
        <Information>
          <StInformationTitle>Additional information</StInformationTitle>
          <StNavLink to="cast" state={location.state}>
            Cast
          </StNavLink>
          <StNavLink to="reviews" state={location.state}>
            Reviews
          </StNavLink>
        </Information>

        <Outlet />
      </Movie>
    </>
  );
};

export default MovieDetails;
