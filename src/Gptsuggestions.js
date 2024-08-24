import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const Gptsuggestions = () => {
const movieResults= useSelector((store) => store.gpt?.movieResults);
const movieNames= useSelector((store) => store.gpt?.movieNames);
console.log(movieResults);
console.log(movieNames);

if (!movieNames) return null

  return (
    <div class="gptmovies">
        { movieNames.map((movieName,index) =>(
           <MovieList key={movieName} Title={movieName} movie={movieResults[index]} />
           ))
        }
        
    </div>
  )
}

export default Gptsuggestions