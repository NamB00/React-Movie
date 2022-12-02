import React, { Fragment } from 'react';
import MovieList from '../components/movie/MovieList';

const HomePage = () => {
  return (
    <Fragment>
      <section className='mb-10 pd-20 movie-layout page-container'>
        <h2 className='mb-10 text-3xl font-bold text-white capitalize'>Now playing</h2>
        <MovieList></MovieList>
      </section>
      <section className='mb-10 pd-20 movie-layout page-container'>
        <h2 className='mb-10 text-3xl font-bold text-white capitalize'>Top rated</h2>
        <MovieList type='top_rated'></MovieList>
      </section>
      <section className='mb-10 pd-20 movie-layout page-container'>
        <h2 className='mb-10 text-3xl font-bold text-white capitalize'>Trending</h2>
        <MovieList type='popular'></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;