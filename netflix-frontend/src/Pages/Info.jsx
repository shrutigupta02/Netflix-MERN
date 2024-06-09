import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import React, { useState, useEffect } from 'react';

// Dynamically import all images from the assets folder
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,jpeg.webp,webp}');

export default function Info(){
    const location = useLocation();
    const { item } = location.state;
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const path = item.image.replace('src/assets/', '../assets/');
            const imageModule = await images[path]();
            setImageSrc(imageModule.default);
        };

        loadImage();
    }, [item.image]);

    return(
        <div className="bg-black text-slate-200 h-screen w-screen">
            <Navbar/>
            <h1 className="font-semibold text-2xl m-2 ml-8">{item.name}</h1>
            <div className="flex m-4 p-2">
                <img className="m-2 max-h-96 min-h-96 w-64 object-cover" src={imageSrc} alt={item.name} />                
                <div className="flex flex-col m-2 p-2 text-lg">
                    <h2 className="font-bold text-xl mb-4">About:</h2>
                    <p>{item.description}</p>
                    <h2 className="font-bold text-lg mt-6">Genres:</h2>
                    <p className="mt-1 text-md">
                        {item.genres.slice(0, 2).join(', ')}
                    </p> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}