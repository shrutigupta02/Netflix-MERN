import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Slider from "../Components/Slider";
import { trendingMovies, comedyMovies } from "../Utils/movieDetails";
import { trendingShows } from "../Utils/showDetails";
import PageBackdrop from "../Components/PageBackdrop";
import Footer from "../Components/Footer";
import img from "../assets/home.jpeg"

export default function Netflix(){   
    const item = {
        id: 101,
        name: "Stranger Things",
        description: "A group of kids in the 1980s encounter strange happenings in their small town.",
        genres: ["Drama", "Fantasy", "Horror"],
        image: "src/assets/trending-shows/stranger.jpeg.webp"
    };
    
    return(
        <div className="bg-black h-screen w-screen">
            <Navbar />
            <PageBackdrop image={img} logo="src/assets/home-logo.png" item={item}/>
            <Slider trendingMovies={trendingMovies} trendingShows={trendingShows}/>
            <Footer/>
        </div>
    );
}