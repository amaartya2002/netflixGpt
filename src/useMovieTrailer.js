import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API } from './constants';

import { addNowPlayingTrailers } from './moviesSlice';

const useMovieTrailer = (movieid) => {
    const Dispatch=useDispatch();
    
    const bgvideo = async () => {
  
      
      try {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US",API);
               
        if (!data.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const json = await data.json();
        // console.log(json);
        const filterData = json.results.filter((video) => video.type === "Trailer");
        
        const trailer = filterData.length ? filterData[0] : json.results[0];
  
        
        // console.log(trailer);
        Dispatch(addNowPlayingTrailers(trailer));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };
  
    useEffect(()=>{
      bgvideo()
    },[]);
  
};

export default useMovieTrailer