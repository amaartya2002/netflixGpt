import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const Secondarycontainer = () => {
  const Movies=useSelector((store)=>store.movies)
  
  return (
    <div class="Sc">
      <div class="browsing">
      <MovieList Title={"Now Playing"} movie={Movies.nowPlayingMovies}/>
      <MovieList Title={"Top Rated"} movie={Movies.nowTopRatedMovies}/>
      <MovieList Title={"Popular"} movie={Movies.nowPopularMovies}/>
      <MovieList Title={"Upcoming"} movie={Movies.nowUpcomingMovies}/>
      </div>

    </div>
  )
}

export default Secondarycontainer