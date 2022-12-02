import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper} from "swiper/react";
import useSWR from "swr";
import MovieCard from './MovieCard';
import { fetcher } from '../../config';

// https://api.themoviedb.org/3/movie/now_playing?api_key=
//https://api.themoviedb.org/3/movie/550?api_key=c713845790a8c1484cc0a0505634473c
//https://api.themoviedb.org/3/search/movie?api_key=c713845790a8c1484cc0a0505634473c&query=''

const MovieList = ({type = 'now_playing'}) => {
  // const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(`https://api.themoviedb.org/3/movie/${type}?api_key=c713845790a8c1484cc0a0505634473c`, fetcher);
  // useEffect(() => {
  //   if (data && data.results) setMovies(data.results);
  // },[data]);
  const movies = data?.results || [];
  // console.log(movies);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
      {movies.length > 0 && movies.map((item) => (
        <SwiperSlide key={item.id}>
          <MovieCard item={item}></MovieCard>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default MovieList;