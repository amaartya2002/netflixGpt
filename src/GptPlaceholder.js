import React, { useRef, useState } from 'react'
import openai from './Gptapi';
import { Conversation } from "gpt-turbo";
import {createChatCompletionsMachine} from 'chat-completions';
import GptResults from './GptResults';
import gptSearch from './gptSearch';
import { API, OPEN_AI } from './constants';
import { json } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addGptMovieResult } from './gptSlice';
import Gptsuggestions from './Gptsuggestions';






const GptPlaceholder = () => {

  
  const dispatch=useDispatch();
  const searchtext=useRef(null);
  const [gptDecider,setGptDecider]=useState(false);

  const searchMovie = async (movie) => {
     
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",API);


    const json=await data.json();
    return json.results
  };


  const justSearch = async (event) => {

    event.preventDefault();

  setGptDecider(false);

  
     
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchtext.current.value +
      ". only give me names of 10 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
      

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices?.[0].message?.content);
    const gptgmovies = gptResults.choices?.[0].message?.content.split(",");

    const promiseArray = gptgmovies.map((movie) => searchMovie(movie));
    const tmdbmovie = await Promise.all(promiseArray);
     
    console.log(tmdbmovie);
    dispatch(addGptMovieResult({movieNames : gptgmovies,movieResults:tmdbmovie}));

      
      
    } catch (error) {
      console.error('Error fetching GPT results:', error);
      // Handle the error as needed (e.g., show an error message)
    }

    

    
    
    
  };
  
  
 



  return (
    <div>
    {gptDecider ? (
    <></>) :
    (
      <div class="gpt_submission">
        <form class='gptform' onSubmit={justSearch}>
            <input ref={searchtext} type='text' class="searchbar" placeholder='What do you wanna watch ?' />
            
            <button type='submit' class="submit_but">Search</button>
            
        </form>
        
        </div>
    )}
        
    
        

    </div> 
    
  )
}

export default GptPlaceholder