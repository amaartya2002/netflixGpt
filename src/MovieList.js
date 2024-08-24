import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({Title,movie}) => {
  return (
    <div class="movies">
    <div>
        <h1 class="np">{Title}</h1>
        </div>
        <div class="list"> 
        {movie?.map((movie) => (
            <MovieCard key={movie.id} name={movie.original_title} Poster_Path={movie.poster_path} />
          ))}
            </div>
            </div>
  )
}

export default MovieList