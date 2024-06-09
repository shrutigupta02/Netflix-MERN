import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

// Dynamically import all images from the assets folder
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,gif,jpeg.webp,webp}');

export default function Card({ item }) {
    const navigate = useNavigate();
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            const path = item.image.replace('src/assets/', '../assets/');
            const imageModule = await images[path]();
            setImageSrc(imageModule.default);
        };

        loadImage();
    }, [item.image]);

    return (
        <div 
        onClick={() => navigate("/details", { state: { item } })}
        className="min-w-80 ml-2 p-5 rounded overflow-hidden shadow-lg bg-inherit transition-transform hover:shadow-red-800/80 hover:scale-105">
            {imageSrc && <img   className="m-2 max-h-96 min-h-96 w-64 object-cover"
                                src={imageSrc} alt={item.name} />}
            <div className="p-6">
                <h1 className="font-bold text-md mb-2">{item.name}</h1>
            </div>
        </div>
    );
}
