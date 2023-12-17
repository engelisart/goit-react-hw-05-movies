import { Layout } from 'components/Layout/Layout';
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'));

const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const Movies = lazy(() => import('./components/Movies/Movies'));

const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Suspense>
  );
};
