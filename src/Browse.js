import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Headers from "./Headers";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { API } from "./constants";
import { addNowPlayingMovies } from './moviesSlice';
import Moviecontainer from './Moviecontainer';
import Secondarycontainer from './Secondarycontainer';
import gptSearch from './gptSearch';




const Browse = () => {
const auth=getAuth();
const dispatch=useDispatch();
const navigate=useNavigate();

const [showGptSearch,setShowGptSearch]=useState(false);

const handleGptSearch = () =>
{
  setShowGptSearch(!showGptSearch);
};

const list = async () => {
  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API);
    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle the error as needed (e.g., show an error message)
  }
};

const signout = () => {
signOut(auth).then(() => {
    
navigate("/");
}).catch((error) => {
  navigate("/error");
  
});

}


 useEffect( () => {

  list();

},[]);


  return (
     <div>
    <div class="upper">
      <Headers/>
    
    <div class="upperlist">
    <div class="gpt_button_sect">
    <button class="gpt_but" onClick={handleGptSearch}>{showGptSearch ? "Home Page" : "GPT Search"}</button>
    </div>
    <img class="acc_img" alt='signinicon' src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABVB2PLirdQh_1yd9FQBW3HBGcUmWVlTDrUt5l1W_lqDJ33Sl-F6vY8O2X_URorArVYCkG0SnXjA6LXqHBLFVMg_DMtx19TA.png?r=cf8' />
    <div class="signout_sect">
    <button class="Signout" onClick={signout}>Sign out</button>
    </div>
    </div>
    
    
    
    </div>

    {showGptSearch ? (
     gptSearch()    ): 
    (
      <>
      <Moviecontainer/>
      <Secondarycontainer/>
      </>
    )};
    
    
    </div>
    
    
  )
}

export default Browse;