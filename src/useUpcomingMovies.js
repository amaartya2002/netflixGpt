import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API } from './constants';

import { addNowUpcomingMovies } from './moviesSlice';

const useUpcomingMovies = () => {
    const Dispatch=useDispatch();
    
    const bgvideos = async () => {
  
      
      try {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API);
               
        if (!data.ok) {
          throw new Error("Failed to fetch data");
        }
    
        const json = await data.json();
        const upmovie=json.results;
        // console.log("lol");
        
        
        // const filterData = json.results.filter((video) => video.type === "Trailer");
        
        // const trailer = filterData.length ? filterData[0] : json.results[0];
  
        
        // console.log(trailer);
        Dispatch(addNowUpcomingMovies(upmovie));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error as needed (e.g., show an error message)
      }
    };
  
    useEffect(()=>{
        bgvideos()
    },[]);
  
};

export default useUpcomingMovies
