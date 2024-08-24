import React from 'react'
import { API } from './constants';
import { useSelector } from 'react-redux';
import { addNowPlayingTrailers } from './moviesSlice';
import useMovieTrailer from './useMovieTrailer';
import usePopularMovies from './usePopularMovies';
import useTopRatedMovies from './useTopRatedMovies';
import useUpcomingMovies from './useUpcomingMovies';




const Videoplay = ({movieid}) => {
  
  const trailerdet=useSelector(store => store.movies?.nowPlayingTrailer);

  useMovieTrailer(movieid);
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


  return (
    <iframe class="bgtrailer" src={"https://www.youtube.com/embed/"+trailerdet?.key+"?&autoplay=1&mute=1"} title="YouTube video player"></iframe>

  )
}

export default Videoplay