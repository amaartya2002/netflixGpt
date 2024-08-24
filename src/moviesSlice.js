import { createSlice } from "@reduxjs/toolkit"; 

const moviesSlice = createSlice(
    {
        name:"movies",
        initialState:{
            nowPlayingMovies:null,
            nowPlayingTrailer:null,
            nowPopularMovies:null,
            nowTopRatedMovies:null,
            nowUpcomingMovies:null,
        },
        reducers: {
            addNowPlayingMovies: (state , action) => {
                state.nowPlayingMovies=action.payload;
            },

            addNowPlayingTrailers: (state , action) => {
                state.nowPlayingTrailer=action.payload;
            },

            addNowPopularMovies: (state , action) => {
                state.nowPopularMovies=action.payload;
            },

            addNowTopRatedMovies: (state , action) => {
                state.nowTopRatedMovies=action.payload;
            },

            addNowUpcomingMovies: (state , action) => {
                state.nowUpcomingMovies=action.payload;
            },





        }
    }
);

export const { addNowPlayingMovies,addNowPlayingTrailers, addNowPopularMovies, addNowTopRatedMovies, addNowUpcomingMovies  } = moviesSlice.actions;
export default moviesSlice.reducer;  