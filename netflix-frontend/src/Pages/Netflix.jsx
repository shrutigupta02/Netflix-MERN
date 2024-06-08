import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import { trendingMovies, comedyMovies } from "../Utils/movieDetails";
import { trendingShows } from "../Utils/showDetails";
import PageBackdrop from "../Components/PageBackdrop";

export default function Netflix(){    
    return(
        <div className="bg-black h-screen w-screen">
            <Navbar />
            <PageBackdrop image="src/assets/home.jpeg" logo="src/assets/home-logo.png"/>
            <Slider trendingMovies={trendingMovies} trendingShows={trendingShows}/>
        </div>
    );
}