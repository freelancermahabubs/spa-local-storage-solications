import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Home = ({handleWatchTime}) => {
  const [movies, setMovies] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setMovies(data))
  },[]);

  return (
    <>
   <div className="movie-container row">
   {
    movies.map(movie => <SingleCard
    movie = {movie}
    handleWatchTime = {handleWatchTime}
    />)}
   </div>
    </>
  );
};

export default Home;
