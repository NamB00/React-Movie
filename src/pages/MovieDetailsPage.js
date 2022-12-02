import React from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide,Swiper } from 'swiper/react';
import useSWR from 'swr';
import MovieCard from '../components/movie/MovieCard';
import { apikey, fetcher } from '../config';
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=c713845790a8c1484cc0a0505634473c

const MovieDetailsPage = () => {
  //lay id movie
  const {movieId} = useParams();
  const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}`, fetcher);
  // console.log("MovieDetailsPage ~ data", data);
  if(!data) return null;
  const {backdrop_path, poster_path, title, genres, overview} = data;
  return (
    <div className='py-10'>
      <div className="w-full h-[600px] relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="w-full h-full bg-no-repeat bg-cover" style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}}>
        </div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img 
          src={`https://image.tmdb.org/t/p/original${poster_path}`} 
          alt="" 
          className='object-cover w-full h-full rounded-xl'
        />
      </div>
      <h1 className='mb-10 text-4xl text-center text-white'>{title}</h1>
      {genres.length > 0 && <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span className='px-4 py-2 border rounded border-primary text-primary' key={item.id}>{item.name}</span>
          ))}
      </div>}
      <p className="text-sm leading-relaxed max-w-[600px] mx-auto mb-10">{overview}</p>
      <MovieCredits></MovieCredits>
      <MovieVideos></MovieVideos>
      <MovieSimilar></MovieSimilar>
    </div>
  );
};

function MovieCredits() {
  //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>
  const {movieId} = useParams();
  const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apikey}`, fetcher);
  if (!data) return null;
  const {cast} = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className='py-10'>
      <h2 className='mb-10 text-3xl text-center'>Cast</h2>
      <div className="grid grid-cols-4 gap-5">
      {cast.splice(0, 4).map(item => (
        <div className="cast-item" key={item.id}>
          <img 
            src={`https://image.tmdb.org/t/p/original${item.profile_path}`} 
            className='w-full h-[350px] object-cover rounded-lg mb-3' alt="" />
            <h3 className='text-xl font-medium'>{item.name}</h3>
        </div>
      ))}
      </div>
    </div>
  )
}

function MovieVideos() {
  const {movieId} = useParams();
  const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}`, fetcher);
  if (!data) return null;
  const {results } = data;
  if (!results && results.length <= 0) return null;
  return (
    <div className='py-10'>
      <div className="flex flex-col gap-10">
        {results.splice(0, 2).map((item) => (
          <div className="" key={item.id} >
          <h3 className='inline-block p-3 mb-5 text-xl font-medium bg-secondary'>{item.name}</h3>
            <div className="w-full aspect-video">
            <iframe 
              width="617" 
              height="347" 
              src={`https://www.youtube.com/embed/${item.key}`} 
              title={item.name} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              className='object-fill w-full h-full'
              allowFullScreen>

            </iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MovieSimilar() {
  const {movieId} = useParams();
  const {data, error} = useSWR(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apikey}`, fetcher);
  if (!data) return null;
  const {results } = data;
  if (!results && results.length <= 0) return null;
  return (
    <div className='py-10'>
      <h2 className='text-3xl font-medium'>Similar movies</h2>
      <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
      {results.length > 0 && results.map((item) => (
        <SwiperSlide key={item.id}>
          <MovieCard item={item}></MovieCard>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
    </div>
  )
}

export default MovieDetailsPage;