/* eslint-disable jsx-a11y/alt-text */
import React, {  } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../config';
import { SwiperSlide, Swiper} from "swiper/react";
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { data } = useSWR(`https://api.themoviedb.org/3/movie/upcoming?api_key=c713845790a8c1484cc0a0505634473c`, fetcher);
  const movies = data?.results || [];
  console.log(movies);
  return (
    <section className='banner h-[500px] mb-10 page-container overflow-hidden'>
    <Swiper grabCursor="true" >
    {movies.length > 0 && movies.map((item) => (
      <SwiperSlide key={item.id} slidesPerview={"auto"}>
        <BannerItems item={item}></BannerItems>
      </SwiperSlide>
    ))}
    </Swiper>
      </section>
  );
};

function BannerItems({item}) {
  const {title, poster_path, id} = item; 
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
        <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
          <img 
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            className='object-cover object-top w-full h-full rounded-lg'
          />
          <div className="absolute w-full text-white left-5 bottom-5">
            <h2 className='mb-5 text-3xl font-bold'>{title}</h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className='px-4 py-2 border border-white rounded-md'>Adventure</span>
              <span className='px-4 py-2 border border-white rounded-md'>Adventure</span>
              <span className='px-4 py-2 border border-white rounded-md'>Adventure</span>
            </div>
            <Button onClick={() => navigate(`/movie/${id}`)} className="w-auto">Watch Now</Button>
            {/* <button className='px-6 py-3 font-medium text-white rounded-lg bg-primary'>Watch Now</button> */}
          </div>
        </div>
  )
}

export default Banner;

//10.09 211