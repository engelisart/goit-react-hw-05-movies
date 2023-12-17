import { getMoviesReviews } from 'API/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      const data = await getMoviesReviews(movieId);
      setDetails(data);
    };

    getDetails();
  }, [movieId]);

  return (
    <>
      {!details?.results.length > 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      <ul>
        {details?.results?.map(detail => (
          <li key={detail.id}>
            <h3>Author:{detail.author}</h3>
            <p>{detail?.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
