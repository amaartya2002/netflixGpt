import React from 'react'
import { useSelector } from 'react-redux'
import Videotitle from './Videotitle';
import Videoplay from './Videoplay';

const Moviecontainer = () => {
    const movies=useSelector((store) => store.movies?.nowPlayingMovies);

    if(movies === null)
    return;

    const firstMovie = movies[0];
    

    const {original_title , overview , id} = firstMovie;

    

  return (
    <div class="trailtitle">
    <Videotitle Title={original_title} Overview={overview}/>
    <Videoplay movieid={id}/>
    </div>
    
  )
}

export default Moviecontainer