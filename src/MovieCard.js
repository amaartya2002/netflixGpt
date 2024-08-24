import React from 'react'
import { IMG_CDN } from './constants'

const MovieCard = ({name,Poster_Path}) => {
  return (
    <div>
        
        <img className="single_movie" alt={name} src={IMG_CDN+Poster_Path}/>
        
        
        </div>
  )
}

export default MovieCard